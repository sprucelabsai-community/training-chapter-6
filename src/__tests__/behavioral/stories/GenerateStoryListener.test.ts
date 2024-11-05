import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, generateId, assert } from '@sprucelabs/test-utils'
import StoryGeneratorImpl, {
    StoryGenerator,
    StoryGeneratorGenerateOptions,
} from '../../../StoryGenerator'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'
import {
    DidFailTargetAndPayload,
    DidGenerateTargetAndPayload,
} from '../../support/EventFaker'

@fake.login()
export default class GenerateStoryListenerTest extends AbstractEightBitTest {
    protected static async beforeEach() {
        await super.beforeEach()
        await this.bootSkill()

        StoryGeneratorImpl.Class = MockStoryGenerator
        await this.eventFaker.fakeDidGenerateStory()
    }

    @test()
    protected static async skillIsListening() {
        await this.emitGenerateStory()
    }

    @test()
    protected static async callsGenerateOnStoryGenerator() {
        await this.emitGenerateStory()

        assert.isTruthy(
            this.mockGenerator,
            `You did not construct a story generator`
        )

        this.mockGenerator.assertGenerateWasCalled()
    }

    @test()
    protected static async passesPayloadToGenerate() {
        const payload: StoryGeneratorGenerateOptions = {
            currentChallenge: generateId(),
            familyMembers: [generateId()],
            storyElements: [generateId()],
        }

        await this.emitGenerateStory(payload)

        this.mockGenerator.assertOptionsPassedToGenerate(payload)
    }

    @test()
    protected static async emitsDidGenerateStoryOnSuccess() {
        let passedTarget: DidGenerateTargetAndPayload['target'] | undefined
        let passedPayload: DidGenerateTargetAndPayload['payload'] | undefined

        await this.eventFaker.fakeDidGenerateStory(({ target, payload }) => {
            passedTarget = target
            passedPayload = payload
        })

        await this.emitGenerateStory()

        assert.isEqualDeep(passedTarget, {
            personId: this.fakedPerson.id,
        })

        assert.isEqualDeep(passedPayload, {
            storyId: this.mockGenerator.getGeneratedStoryId(),
        })
    }

    @test()
    protected static async emitsDidFailToGenerateOnFail() {
        StoryGeneratorImpl.Class = ThrowingStoryGenerator

        let passedTarget: DidFailTargetAndPayload['target'] | undefined
        let passedPayload: DidFailTargetAndPayload['payload'] | undefined

        await this.eventFaker.fakeDidFailToGenerateStory(
            ({ target, payload }) => {
                passedTarget = target
                passedPayload = payload
            }
        )

        await this.emitGenerateStory()

        assert.isEqualDeep(passedTarget, { personId: this.fakedPerson.id })
        assert.isEqualDeep(passedPayload, {
            errorMessage: ThrowingStoryGenerator.errorMessage,
        })
    }

    private static get mockGenerator(): MockStoryGenerator {
        return MockStoryGenerator.instance
    }

    private static async emitGenerateStory(
        payload?: StoryGeneratorGenerateOptions
    ) {
        await this.fakedClient.emitAndFlattenResponses(
            'eightbitstories.generate-story::v2024_09_19',
            {
                payload: payload ?? {
                    familyMembers: [generateId()],
                    storyElements: ['wizard'],
                },
            }
        )
    }
}

class MockStoryGenerator implements StoryGenerator {
    public static instance: MockStoryGenerator
    private generateOptions?: StoryGeneratorGenerateOptions
    private storyId = generateId()

    public constructor() {
        MockStoryGenerator.instance = this
    }

    public async generate(options: StoryGeneratorGenerateOptions) {
        this.generateOptions = options
        return this.storyId
    }

    public getGeneratedStoryId() {
        return this.storyId
    }

    public assertGenerateWasCalled() {
        assert.isTruthy(
            this.generateOptions,
            `You did not call generate() on your story generator`
        )
    }

    public assertOptionsPassedToGenerate(
        expected: StoryGeneratorGenerateOptions
    ) {
        assert.isEqualDeep(
            this.generateOptions,
            expected,
            'You did not pass the expected options to generate()!'
        )
    }
}

class ThrowingStoryGenerator implements StoryGenerator {
    public static errorMessage = generateId()
    public async generate(): Promise<string> {
        throw new Error(ThrowingStoryGenerator.errorMessage)
    }
}

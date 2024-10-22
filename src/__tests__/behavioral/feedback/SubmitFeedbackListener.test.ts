import { EventSource } from '@sprucelabs/spruce-event-utils'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'
import { SendMessageTargetAndPayload } from '../../support/EventFaker'

@fake.login()
export default class SubmitFeedbackListenerTest extends AbstractEightBitTest {
    private static wasHit: boolean
    private static sendMessageTarget?: SendMessageTargetAndPayload['target']
    private static sendMessagePayload?: SendMessageTargetAndPayload['payload']
    private static feedback: string

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.wasHit = false
        this.feedback = generateId()

        delete this.sendMessageTarget
        delete this.sendMessagePayload

        await this.eventFaker.fakeSendMessage(({ target, payload }) => {
            this.sendMessageTarget = target
            this.sendMessagePayload = payload
            this.wasHit = true
        })

        process.env.FEEDBACK_PHONE = '555-000-0000'
        await this.bootSkill()
    }

    @test()
    protected static async skillIsListening() {
        const success = await this.emitSubmitFeedback()

        assert.isTrue(
            success,
            `Submit feedback listener should return success true!`
        )
    }

    @test('sends message to 555-555-5555', '555-555-5555')
    @test('sends message to 555-000-0000', '555-000-0000')
    protected static async emitsSendMessageEventToPhone(phone: string) {
        process.env.FEEDBACK_PHONE = phone
        await this.emitSubmitFeedback()
        assert.isTrue(
            this.wasHit,
            `You did not emit send-message in your listener!`
        )
        assert.isEqualDeep(this.sendMessageTarget, {
            phone: process.env.FEEDBACK_PHONE,
        })
    }

    @test()
    protected static async emitsMessageWithExpectedPayload() {
        await this.emitSubmitFeedback()
        const { message } = this.sendMessagePayload ?? {}

        assert.isEqual(message?.classification, 'transactional')
        assert.isEqualDeep(message?.context, {
            fromName: this.fakedPerson.casualName,
            feedback: this.feedback,
        })
    }

    @test()
    protected static async emitsGetPersonAsSkill() {
        let passedSource: EventSource | undefined | null
        await this.eventFaker.fakeGetPerson(({ source }) => {
            passedSource = source
        })

        const { skill } = await this.skills.loginAsCurrentSkill()

        await this.emitSubmitFeedback()
        assert.isEqualDeep(passedSource, {
            skillId: skill.id,
        })
    }

    private static async emitSubmitFeedback() {
        const [{ success }] = await this.fakedClient.emitAndFlattenResponses(
            'eightbitstories.submit-feedback::v2024_09_19',
            {
                payload: {
                    feedback: this.feedback,
                },
            }
        )

        return success
    }
}

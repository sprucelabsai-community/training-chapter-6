import {
    buttonAssert,
    formAssert,
    interactor,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { selectAssert } from '@sprucelabs/schema'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test } from '@sprucelabs/test-utils'
import { PublicFamilyMember } from '../../../eightbitstories.types'
import CurrentChallengeCardViewController from '../../../stories/CurrentChallengeCard.vc'
import GenerateSkillViewController from '../../../stories/Generate.svc'
import StoryElementSelectCardViewController from '../../../stories/StoryElementSelectCard.vc'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'
import { GenerateStoryTargetAndPayload } from '../../support/EventFaker'
import SpyFamilyMemberSelectCard from './SpyFamilyMemberSelectCard'

@fake.login()
export default class GenerateSkillViewTest extends AbstractEightBitTest {
    private static vc: SpyGenerateSkillView
    private static fakedFamilyMembers: PublicFamilyMember[]

    protected static async beforeEach() {
        await super.beforeEach()

        this.views.setController(
            'eightbitstories.story-element-select-card',
            SpyStoryElementsCard
        )

        this.views.setController(
            'eightbitstories.family-member-select-card',
            SpyFamilyMemberSelectCard
        )

        this.views.setController(
            'eightbitstories.current-challenge-card',
            SpyCurrentChallengeCard
        )

        this.views.setController(
            'eightbitstories.generate',
            SpyGenerateSkillView
        )

        this.vc = this.views.Controller(
            'eightbitstories.generate',
            {}
        ) as SpyGenerateSkillView

        this.fakedFamilyMembers = [
            this.eventFaker.generatePublicFamilyMemberValues(),
        ]

        await this.eventFaker.fakeListFamilyMembers(
            () => this.fakedFamilyMembers
        )

        await this.eventFaker.fakeGenerateStory()
    }

    @test()
    protected static async canCreateGenerateSkillView() {
        vcAssert.assertSkillViewRendersCards(this.vc, [
            'storyElements',
            'currentChallenge',
            'familyMembers',
            'controls',
        ])
    }

    @test()
    protected static async controlsCardRendersExpectedButtons() {
        buttonAssert.cardRendersButtons(this.controlsCardVc, ['back', 'write'])
    }

    @test()
    protected static async backButtonRedirectsToRoot() {
        await this.load()

        await vcAssert.assertActionRedirects({
            action: () => interactor.clickButton(this.controlsCardVc, 'back'),
            router: this.views.getRouter(),
            destination: {
                id: 'eightbitstories.root',
            },
        })
    }

    @test()
    protected static storyElementsCardRendersForm() {
        formAssert.cardRendersForm(this.vc.getElementsCardVc())
    }

    @test()
    protected static storyElementsFormDoesNotRenderSubmitControls() {
        assert.isFalse(
            this.elementsFormVc.getShouldRenderSubmitControls(),
            'You are still rendering the submit controls!'
        )
    }

    @test()
    protected static elementsFormRendersElementsSelect() {
        formAssert.formRendersField(this.elementsFormVc, 'elements')
    }

    @test()
    protected static elementsRendAsTags() {
        formAssert.formFieldRendersAs(this.elementsFormVc, 'elements', 'tags')
    }

    @test()
    protected static rendersExpectedStoryElementChoices() {
        const { options } = this.elementsFormVc.getField('elements')
        selectAssert.assertSelectChoicesMatch(options.choices, [
            'wizards',
            'witches',
            'dinosaurs',
            'magic',
            'elves',
            'sports',
            'hardLessons',
        ])
    }

    @test()
    protected static async rendersAlertAndRedirectsIfNoFamilyMembers() {
        await this.eventFaker.fakeListFamilyMembers(() => [])
        await vcAssert.assertRendersAlertThenRedirects({
            vc: this.vc,
            action: () => this.views.load(this.vc),
            router: this.views.getRouter(),
            destination: {
                id: 'eightbitstories.members',
            },
        })

        vcAssert.assertCardIsBusy(this.familyCardVc)
    }

    @test()
    protected static familyMembersCardRendersForm() {
        formAssert.cardRendersForm(this.familyCardVc)
        assert.isFalse(
            this.familyFormVc.getShouldRenderSubmitControls(),
            'You should not be rendering submit buttons!'
        )
    }

    @test()
    protected static rendersFamilyMembersField() {
        formAssert.formRendersField(this.familyFormVc, 'familyMembers')
    }

    @test()
    protected static familyMembersRendersAsTags() {
        formAssert.formFieldRendersAs(
            this.familyFormVc,
            'familyMembers',
            'tags'
        )
    }

    @test()
    protected static async rendersChoiceForFirstFamilyMember() {
        await this.load()
        this.assertRendersChoiceForEachFamilyMember()
    }

    @test()
    protected static async rendersChoicesFor2FamilyMembers() {
        this.fakedFamilyMembers.push(
            this.eventFaker.generatePublicFamilyMemberValues()
        )
        await this.load()
        this.assertRendersChoiceForEachFamilyMember()
    }

    @test()
    protected static async familyMembersIsRequiredAndArray() {
        await this.load()
        const field = this.familyMembersField
        assert.isTrue(
            field.isArray,
            `Your familyMembers field needs to be an array`
        )
        assert.isTrue(
            field.isRequired,
            `Your familyMembers field needs to be required!`
        )
    }

    @test()
    protected static async currentChallengesCardRendersForm() {
        formAssert.cardRendersForm(this.vc.getChallengesCardVc())
    }

    @test()
    protected static async currentChallengeRendersAsTextArea() {
        formAssert.formFieldRendersAs(
            this.currentChallengeFormVc,
            'currentChallenge',
            'textarea'
        )
    }

    @test()
    protected static async doesNotRenderSubmitControls() {
        assert.isFalse(
            this.currentChallengeFormVc.getShouldRenderSubmitControls(),
            'Do not render submit controls on your challenge form!'
        )
    }

    @test()
    protected static async writeStoryButtonDisabledToStart() {
        this.assertWriteButtonDisabled()
    }

    @test()
    protected static async writeStoryEnablesWhenSelectingOneElementAndFamilyMember() {
        await this.load()

        this.assertWriteButtonDisabled()

        await this.selectStoryElements(['wizards'])
        await this.selectFamilyMembers([this.fakedFamilyMembers[0].id])

        this.assertWriteButtonEnabled()

        await this.selectStoryElements([])

        this.assertWriteButtonDisabled()
    }

    @test('clicking write story emits generate event 1', ['wizards'])
    @test('clicking write story emits generate event 2', [
        'sports',
        'dinosaurs',
    ])
    protected static async clickingWriteEmitsGenerateEvent(
        storyElements: string[]
    ) {
        await this.load()

        const currentChallenge = generateId()
        await this.setCurrentChallenge(currentChallenge)
        await this.selectStoryElements(storyElements)
        await this.selectFirstFamilyMember()

        let passedPayload: GenerateStoryTargetAndPayload['payload'] | undefined

        await this.eventFaker.fakeGenerateStory(({ payload }) => {
            passedPayload = payload
        })

        await this.clickWrite()

        assert.isEqualDeep(passedPayload, {
            familyMembers: [this.fakedFamilyMembers[0].id],
            storyElements,
            currentChallenge,
        })
    }

    @test()
    protected static async clickingGenerateMakesControlsBusy() {
        await this.loadConfigureStoryAndClickWrite()
        vcAssert.assertCardIsBusy(this.controlsCardVc)
    }

    @test()
    protected static async emittingDidFailRendersAlert() {
        await this.loadConfigureStoryAndClickWrite()
        const errorMessage = generateId()
        const alertVc = await vcAssert.assertRendersAlert(this.vc, () =>
            this.emitDidFailToGenerate(errorMessage)
        )

        assert.isEqual(
            alertVc.alertOptions.message,
            errorMessage,
            "You didn't pass the error from the event to your alert!"
        )
    }

    @test()
    protected static async doesNotRenderAlertOnFailAfterBlur() {
        await this.eventFaker.fakeDidFailToGenerateStory()
        await this.loadConfigureStoryAndClickWrite()
        await this.blurVc()
        await this.emitDidFailToGenerate()
    }

    @test()
    protected static async redirectsToWriteViewOnDidGenerate() {
        await this.loadConfigureStoryAndClickWrite()
        const storyId = generateId()

        await vcAssert.assertActionRedirects({
            action: () => this.emitDidGenerateStory(storyId),
            destination: {
                id: 'eightbitstories.read',
                args: {
                    storyId,
                },
            },
            router: this.views.getRouter(),
        })
    }

    @test()
    protected static async doesNotRedirectToWriteIfNavigatedAway() {
        await this.eventFaker.fakeDidGenerateStory()
        await this.loadConfigureStoryAndClickWrite()
        await this.blurVc()
        await this.emitDidGenerateStory()
    }

    private static async blurVc() {
        await interactor.blur(this.vc)
    }

    private static emitDidGenerateStory(storyId?: string) {
        return this.fakedClient.emitAndFlattenResponses(
            'eightbitstories.did-generate-story::v2024_09_19',
            {
                target: {
                    personId: generateId(),
                },
                payload: {
                    storyId: storyId ?? generateId(),
                },
            }
        )
    }

    private static emitDidFailToGenerate(errorMessage?: string) {
        return this.fakedClient.emitAndFlattenResponses(
            'eightbitstories.did-fail-to-generate-story::v2024_09_19',
            {
                target: { personId: generateId() },
                payload: {
                    errorMessage: errorMessage ?? generateId(),
                },
            }
        )
    }

    private static async loadConfigureStoryAndClickWrite() {
        await this.load()
        await this.selectStoryElements(['elves'])
        await this.selectFirstFamilyMember()
        await this.clickWrite()
    }

    private static async clickWrite() {
        await interactor.clickButton(this.controlsCardVc, 'write')
    }

    private static async selectFirstFamilyMember() {
        await this.selectFamilyMembers([this.fakedFamilyMembers[0].id])
    }

    private static async setCurrentChallenge(currentChallenge: string) {
        await this.currentChallengeFormVc.setValue(
            'currentChallenge',
            currentChallenge
        )
    }

    private static assertWriteButtonEnabled() {
        buttonAssert.buttonIsEnabled(this.controlsCardVc, 'write')
    }

    private static async selectFamilyMembers(value: string[]) {
        await this.familyFormVc.setValue('familyMembers', value)
    }

    private static async selectStoryElements(value: string[]) {
        await this.elementsFormVc.setValue('elements', value)
    }

    private static assertWriteButtonDisabled() {
        buttonAssert.buttonIsDisabled(this.controlsCardVc, 'write')
    }

    private static get currentChallengeFormVc() {
        return this.vc.getChallengeFormVc()
    }

    private static get familyCardVc() {
        return this.vc.getFamilyCardVc()
    }

    private static assertRendersChoiceForEachFamilyMember() {
        selectAssert.assertSelectChoicesMatch(
            this.familyMembersField.options.choices,
            this.fakedFamilyMembers.map((f) => f.id)
        )
    }

    private static get familyMembersField() {
        return this.familyFormVc.getField('familyMembers')
    }

    private static get familyFormVc() {
        return this.vc.getFamilyFormVc()
    }

    private static async load() {
        await this.views.load(this.vc)
    }

    private static get elementsFormVc() {
        return this.vc.getElementsFormVc()
    }

    private static get controlsCardVc() {
        return this.vc.getControlsCardVc()
    }
}

class SpyGenerateSkillView extends GenerateSkillViewController {
    public getChallengeFormVc() {
        return this.getChallengesCardVc().getFormVc()
    }

    public getChallengesCardVc() {
        return this.currentChallengeCardVc as SpyCurrentChallengeCard
    }

    public getFamilyFormVc() {
        return this.getFamilyCardVc().getFormVc()
    }

    public getFamilyCardVc() {
        return this.familyMembersCardVc as SpyFamilyMemberSelectCard
    }

    public getElementsFormVc() {
        return this.getElementsCardVc().getFormVc()
    }

    public getElementsCardVc() {
        return this.elementsCardVc as SpyStoryElementsCard
    }
    public getControlsCardVc() {
        return this.controlsCardVc
    }
}

class SpyStoryElementsCard extends StoryElementSelectCardViewController {
    public getFormVc() {
        return this.formVc
    }

    public getCardVc() {
        return this.cardVc
    }
}

class SpyCurrentChallengeCard extends CurrentChallengeCardViewController {
    public getFormVc() {
        return this.formVc
    }
}

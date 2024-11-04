import {
    buttonAssert,
    formAssert,
    interactor,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { selectAssert } from '@sprucelabs/schema'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test-utils'
import { PublicFamilyMember } from '../../../eightbitstories.types'
import GenerateSkillViewController from '../../../skillViewControllers/Generate.svc'
import StoryElementsCardViewController from '../../../viewControllers/StoryElementsCard.vc'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class GenerateSkillViewTest extends AbstractEightBitTest {
    private static vc: SpyGenerateSkillView
    private static fakedFamilyMembers: PublicFamilyMember[]

    protected static async beforeEach() {
        await super.beforeEach()

        this.views.setController(
            'eightbitstories.story-elements-card',
            SpyStoryElementsCard
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
    public getFamilyFormVc() {
        return this.familyMembersFormVc
    }
    public getFamilyCardVc() {
        return this.familyMembersCardVc
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

class SpyStoryElementsCard extends StoryElementsCardViewController {
    public getFormVc() {
        return this.formVc
    }

    public getCardVc() {
        return this.cardVc
    }
}

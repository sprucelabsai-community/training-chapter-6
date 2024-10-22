import {
    buttonAssert,
    formAssert,
    interactor,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { selectAssert } from '@sprucelabs/schema'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test-utils'
import GenerateSkillViewController from '../../../skillViewControllers/Generate.svc'
import StoryElementsCardViewController from '../../../viewControllers/StoryElementsCard.vc'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class GenerateSkillViewTest extends AbstractEightBitTest {
    private static vc: SpyGenerateSkillView

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
        await this.views.load(this.vc)

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

    private static get elementsFormVc() {
        return this.vc.getElementsFormVc()
    }

    private static get controlsCardVc() {
        return this.vc.getControlsCardVc()
    }
}

class SpyGenerateSkillView extends GenerateSkillViewController {
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

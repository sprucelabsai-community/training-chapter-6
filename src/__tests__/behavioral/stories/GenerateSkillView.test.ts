import {
    buttonAssert,
    interactor,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test-utils'
import GenerateSkillViewController from '../../../skillViewControllers/Generate.svc'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class GenerateSkillViewTest extends AbstractEightBitTest {
    private static vc: SpyGenerateSkillView

    protected static async beforeEach() {
        await super.beforeEach()
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
        buttonAssert.cardRendersButtons(this.vc.getControlsCardVc(), [
            'back',
            'write',
        ])
    }

    @test()
    protected static async backButtonRedirectsToRoot() {
        await this.views.load(this.vc)

        await vcAssert.assertActionRedirects({
            action: () =>
                interactor.clickButton(this.vc.getControlsCardVc(), 'back'),
            router: this.views.getRouter(),
            destination: {
                id: 'eightbitstories.root',
            },
        })
    }
}

class SpyGenerateSkillView extends GenerateSkillViewController {
    public getControlsCardVc() {
        return this.controlsCardVc
    }
}

import {
    buttonAssert,
    interactor,
    SkillViewControllerId,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test-utils'
import FeedbackCardViewController from '../../feedback/FeedbackCard.vc'
import RootSkillViewController from '../../skillViewControllers/Root.svc'
import AbstractEightBitTest from '../support/AbstractEightBitTest'
import SpyFeedbackCard from './feedback/SpyFeedbackCard'

@fake.login()
export default class RootSkillViewTest extends AbstractEightBitTest {
    private static vc: SpyRootSkillView

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        await this.eventFaker.fakeSubmitFeedback()

        this.views.setController(
            'eightbitstories.feedback-card',
            SpyFeedbackCard
        )
        this.views.setController('eightbitstories.root', SpyRootSkillView)
        this.vc = this.views.Controller(
            'eightbitstories.root',
            {}
        ) as SpyRootSkillView
    }

    @test()
    protected static rendersCard() {
        vcAssert.assertSkillViewRendersCard(this.vc)
    }

    @test()
    protected static async requiresLogin() {
        await vcAssert.assertLoginIsRequired(this.vc)
    }

    @test()
    protected static rendersExpectedButtons() {
        buttonAssert.cardRendersButtons(this.cardVc, [
            'values',
            'members',
            'feedback',
            'write',
        ])
    }

    @test()
    protected static async clickingFeedbackRendersDialog() {
        await this.clickFeedbackAndAssertDialog()
    }

    @test()
    protected static async submittingFeedbackClosesDialog() {
        const { feedbackCardVc, dialogVc } =
            await this.clickFeedbackAndAssertDialog()

        await feedbackCardVc.fillOutFeedback()

        assert.isTrue(
            dialogVc.getIsVisible(),
            `You hid your dialog too soon! Do it after submit!`
        )

        await feedbackCardVc.submit()

        assert.isFalse(
            dialogVc.getIsVisible(),
            'You did not hide the form after sumbit!'
        )
    }

    @test()
    protected static async familyValuesButtonRedirectsToFamilySkillView() {
        await this.load()
        await this.assertClickingRedirects('values', 'eightbitstories.family')
    }

    @test()
    protected static async familyMembersButtonRedirectsToMembersSkillView() {
        await this.load()
        await this.assertClickingRedirects('members', 'eightbitstories.members')
    }

    @test()
    protected static async clickingWriteStorieRedirectsToGenerateSkillView() {
        await this.load()
        await this.assertClickingRedirects('write', 'eightbitstories.generate')
    }

    private static async assertClickingRedirects(
        button: string,
        destination: SkillViewControllerId
    ) {
        await vcAssert.assertActionRedirects({
            action: () => this.clickButton(button),
            router: this.views.getRouter(),
            destination: {
                id: destination,
            },
        })
    }

    private static async load() {
        await this.views.load(this.vc)
    }

    private static clickButton(button: string): any {
        return interactor.clickButton(this.cardVc, button)
    }

    private static async clickFeedbackAndAssertDialog() {
        const dialogVc = await vcAssert.assertRendersDialog(this.vc, () =>
            this.clickButton('feedback')
        )

        const feedbackCardVc = vcAssert.assertRendersAsInstanceOf(
            dialogVc,
            FeedbackCardViewController
        )

        return { dialogVc, feedbackCardVc: feedbackCardVc as SpyFeedbackCard }
    }

    private static get cardVc() {
        return this.vc.getCardVc()
    }
}

class SpyRootSkillView extends RootSkillViewController {
    public getCardVc() {
        return this.cardVc
    }
}

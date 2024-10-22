import { formAssert, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { eventFaker, fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test-utils'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'
import SpyFeedbackCard from './SpyFeedbackCard'

@fake.login()
export default class FeedbackCardTest extends AbstractEightBitTest {
    private static vc: SpyFeedbackCard
    private static wasOnSubmitInvoked: boolean

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.wasOnSubmitInvoked = false

        this.views.setController(
            'eightbitstories.feedback-card',
            SpyFeedbackCard
        )
        this.vc = this.views.Controller('eightbitstories.feedback-card', {
            onSubmit: () => {
                this.wasOnSubmitInvoked = true
            },
        }) as SpyFeedbackCard
    }

    @test()
    protected static rendersAForm() {
        formAssert.cardRendersForm(this.vc)
    }

    @test()
    protected static rendersFeedbackField() {
        formAssert.formRendersField(this.formVc, 'feedback')
    }

    @test()
    protected static rendersFeedbackAsTextarea() {
        formAssert.formFieldRendersAs(this.formVc, 'feedback', 'textarea')
    }

    @test()
    protected static doesNotRenderCancelButton() {
        assert.isFalse(
            this.formVc.getShouldRenderCancelButton(),
            `You should not be rendering the cancel button!`
        )
    }

    @test()
    protected static async submittingFormEmitsSubmitFeedbackEvent() {
        let passedFeedback: string | undefined

        await this.eventFaker.fakeSubmitFeedback(({ payload }) => {
            const { feedback } = payload
            passedFeedback = feedback
            return {
                success: true,
            }
        })

        const expected = await this.fillOutFeedback()
        await this.submit()

        assert.isEqual(
            passedFeedback,
            expected,
            `The feedback was not passed from the form!`
        )
    }

    @test()
    protected static async submitFeedbackThrowingRendersAlert() {
        await eventFaker.makeEventThrow(
            'eightbitstories.submit-feedback::v2024_09_19'
        )

        await this.fillOutFeedback()
        await vcAssert.assertRendersAlert(this.vc, () => this.submit())
        assert.isFalse(
            this.wasOnSubmitInvoked,
            `The onSubmit handler should not have been called because there was an error!`
        )
    }

    private static async submit() {
        await this.vc.submit()
    }

    private static async fillOutFeedback() {
        return this.vc.fillOutFeedback()
    }

    private static get formVc() {
        return this.vc.getFormVc()
    }
}

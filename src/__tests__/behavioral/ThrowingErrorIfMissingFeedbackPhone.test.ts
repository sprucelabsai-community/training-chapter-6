import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, errorAssert } from '@sprucelabs/test-utils'
import AbstractEightBitTest from '../support/AbstractEightBitTest'

@fake.login()
export default class ThrowingErrorIfMissingFeedbackPhoneTest extends AbstractEightBitTest {
    @test()
    protected static async canCreateThrowingErrorIfMissingFeedbackPhone() {
        delete process.env.FEEDBACK_PHONE
        const err = await assert.doesThrowAsync(() => this.bootSkill())
        errorAssert.assertError(err, 'MISSING_PARAMETERS', {
            parameters: ['env.FEEDBACK_PHONE'],
        })
    }
}

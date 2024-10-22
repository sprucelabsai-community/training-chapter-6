import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class GetFamilyListenerTest extends AbstractEightBitTest {
    protected static async beforeEach() {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    protected static async skillIsListening() {
        await this.emitGetfamily()
    }

    @test()
    @seed('families', 1)
    protected static async returnsTheOnlyFamilyRecord() {
        const actual = await this.emitGetfamily()
        assert.isTruthy(actual, `You did not return a family!`)
        const expected = await this.getFirstFamily()
        assert.isEqualDeep(
            actual,
            expected,
            `You did not return the family record`
        )
    }

    @test()
    @seed('families', 1, { shouldSetFakedPersonAsSource: false })
    protected static async returnsFamilyTiedToLoggedInPerson() {
        const family = await this.emitGetfamily()
        assert.isFalsy(family, 'You returned a family and should not have!')
    }

    private static async emitGetfamily() {
        const [{ family }] = await this.fakedClient.emitAndFlattenResponses(
            'eightbitstories.get-family::v2024_09_19'
        )

        return family
    }
}

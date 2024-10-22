import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class ListFamilyMembersListenerTest extends AbstractEightBitTest {
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    protected static async skillIsListener() {
        await this.emitListMembers()
    }

    @test()
    @seed('familyMembers', 1)
    protected static async returnsOnlyFamilyMember() {
        await this.assertReturnsAllFamilyMembers()
    }

    @test()
    @seed('familyMembers', 2)
    protected static async returnsAllFamilyMembers() {
        await this.assertReturnsAllFamilyMembers()
    }

    @test()
    @seed('familyMembers', 1, { shouldSetFakedPersonAsSource: false })
    protected static async filtersByLoggedInPersonsId() {
        const actual = await this.emitListMembers()
        assert.isLength(
            actual,
            0,
            `You returned too many family members! Remember to filter by source.personId`
        )
    }

    private static async assertReturnsAllFamilyMembers() {
        const expected = await this.familyMembers.find({})
        const actual = await this.emitListMembers()

        assert.isEqualDeep(
            actual,
            expected,
            'You did not return your family members'
        )
    }

    private static async emitListMembers() {
        const [{ familyMembers }] =
            await this.fakedClient.emitAndFlattenResponses(
                'eightbitstories.list-family-members::v2024_09_19'
            )

        return familyMembers
    }
}

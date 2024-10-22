import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId, errorAssert } from '@sprucelabs/test-utils'
import { PublicFamilyMember } from '../../../eightbitstories.types'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class GetFamilyMemberListenerTest extends AbstractEightBitTest {
    protected static async beforeEach() {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    protected static async skillIsListening() {
        const familyMemberId = generateId()
        await this.emitAndAssertThrowsNotFound(familyMemberId)
    }

    @test()
    @seed('familyMembers', 1)
    protected static async canGetMyOnlyFamilyMember() {
        const expected = await this.getFirstFamilyMember({
            shouldIncludePrivateFields: false,
        })
        await this.assertGetFamilyMemberResponseEquals(expected)
    }

    @test()
    @seed('familyMembers', 2)
    protected static async canGetCorrectMemberBasedOnId() {
        const [, expected] = await this.familyMembers.find({})
        await this.assertGetFamilyMemberResponseEquals(expected)
    }

    @test()
    @seed('familyMembers', 1, { shouldSetFakedPersonAsSource: false })
    protected static async throwsIfSourcePersonDoesNotMatch() {
        const match = await this.getFirstFamilyMember()
        await this.emitAndAssertThrowsNotFound(match.id)
    }

    private static async emitAndAssertThrowsNotFound(familyMemberId: string) {
        const err = await assert.doesThrowAsync(() =>
            this.emitGetFamilyMember(familyMemberId)
        )
        errorAssert.assertError(err, 'FAMILY_MEMBER_NOT_FOUND', {
            familyMemberId,
        })
    }

    private static async assertGetFamilyMemberResponseEquals(
        expected: PublicFamilyMember
    ) {
        const actual = await this.emitGetFamilyMember(expected.id)
        assert.isEqualDeep(actual, expected)
    }

    private static async emitGetFamilyMember(id: string) {
        const [{ familyMember }] =
            await this.fakedClient.emitAndFlattenResponses(
                'eightbitstories.get-family-member::v2024_09_19',
                {
                    target: {
                        familyMemberId: id,
                    },
                }
            )

        return familyMember
    }
}

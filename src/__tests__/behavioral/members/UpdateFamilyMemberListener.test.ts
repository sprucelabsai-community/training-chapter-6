import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId, errorAssert } from '@sprucelabs/test-utils'
import { UpdateFamilyMember } from '../../../eightbitstories.types'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class UpdateFamilyMemberListenerTest extends AbstractEightBitTest {
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    @seed('familyMembers', 1)
    protected static async throwsMemberNotFoundWithBadId() {
        const familyMemberId = generateId()
        await this.emitAndAssertThrowsNotFound(familyMemberId)
    }

    @test()
    @seed('familyMembers', 1)
    protected static async canUpdateExistingMember() {
        const expected = await this.getFirstPublicFamilyMember()
        const actual = await this.emitUpdate(expected.id)
        assert.isEqualDeep(actual, expected)
    }

    @test()
    @seed('familyMembers', 1)
    protected static async actuallyUpdatesFamilyMember() {
        const expected = await this.getFirstPublicFamilyMember()
        const values = {
            name: generateId(),
            bio: generateId(),
        }
        const actual = await this.emitUpdate(expected.id, values)
        const updated = await this.getFirstPublicFamilyMember()

        assert.doesInclude(
            updated,
            values,
            `You didn't update the member's values`
        )

        assert.isEqualDeep(actual, updated)
    }

    @test()
    @seed('familyMembers', 1, { shouldSetFakedPersonAsSource: false })
    protected static async shouldThrowNotFoundWhenUpdatingSomeElsesMember() {
        const member = await this.getFirstFamilyMember()
        await this.emitAndAssertThrowsNotFound(member.id)
    }

    private static async emitAndAssertThrowsNotFound(familyMemberId: string) {
        const err = await assert.doesThrowAsync(() =>
            this.emitUpdate(familyMemberId)
        )
        errorAssert.assertError(err, 'FAMILY_MEMBER_NOT_FOUND', {
            familyMemberId,
        })
    }

    private static async getFirstPublicFamilyMember() {
        return await this.getFirstFamilyMember({
            shouldIncludePrivateFields: false,
        })
    }

    private static async emitUpdate(
        familyMemberId: string,
        values?: UpdateFamilyMember
    ) {
        const [{ familyMember }] =
            await this.fakedClient.emitAndFlattenResponses(
                'eightbitstories.update-family-member::v2024_09_19',
                {
                    target: { familyMemberId },
                    payload: {
                        familyMember: values ?? {},
                    },
                }
            )

        return familyMember
    }
}

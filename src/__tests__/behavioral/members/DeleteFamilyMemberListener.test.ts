import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, errorAssert, generateId } from '@sprucelabs/test-utils'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class DeleteFamilyMemberListenerTest extends AbstractEightBitTest {
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    @seed('familyMembers', 1)
    protected static async throwsIfMemberNotFound() {
        const familyMemberId = generateId()
        await this.emitAndAssertNotFound(familyMemberId)
    }

    @test()
    @seed('familyMembers', 1)
    protected static async doesNotThrowIfSuccessfulDelete() {
        const member = await this.getFirstFamilyMember()
        const success = await this.emitDeleteMember(member.id)
        assert.isTrue(success, 'You have to return true from the delete event')
        const total = await this.familyMembers.count({})
        assert.isEqual(total, 0, `You didn't delete your family member!`)
    }

    @test()
    @seed('familyMembers', 1, { shouldSetFakedPersonAsSource: false })
    protected static async throwsNotFoundIfNotSourcePersonId() {
        const member = await this.getFirstFamilyMember()
        await this.emitAndAssertNotFound(member.id)
    }

    private static async emitAndAssertNotFound(familyMemberId: string) {
        const err = await assert.doesThrowAsync(() =>
            this.emitDeleteMember(familyMemberId)
        )

        errorAssert.assertError(err, 'FAMILY_MEMBER_NOT_FOUND', {
            familyMemberId,
        })
    }

    private static async emitDeleteMember(familyMemberId: string) {
        const [{ success }] = await this.fakedClient.emitAndFlattenResponses(
            'eightbitstories.delete-family-member::v2024_09_19',
            {
                target: {
                    familyMemberId,
                },
            }
        )
        return success
    }
}

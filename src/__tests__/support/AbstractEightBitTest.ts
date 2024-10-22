import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { assert } from '@sprucelabs/test-utils'
import FamiliesStore from '../../family/Families.store'
import FamilyMembersStore from '../../members/FamilyMembers.store'
import EventFaker from './EventFaker'

export default abstract class AbstractEightBitTest extends AbstractSpruceFixtureTest {
    protected static eventFaker: EventFaker
    protected static families: FamiliesStore
    protected static familyMembers: FamilyMembersStore

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()
        this.eventFaker = new EventFaker()

        this.familyMembers = await this.stores.getStore('familyMembers')
        this.families = await this.stores.getStore('families')
    }

    protected static async getFirstFamily() {
        const family = await this.families.findOne({})
        assert.isTruthy(
            family,
            `You need to @seed('family') before getting the first one!`
        )
        return family
    }

    protected static async getFirstFamilyMember(options?: {
        shouldIncludePrivateFields?: boolean
    }) {
        const member = await this.familyMembers.findOne(
            {},
            { shouldIncludePrivateFields: true, ...options }
        )
        assert.isTruthy(
            member,
            `You need to @seed('familyMembers') before getting the first one!`
        )
        return member
    }
}

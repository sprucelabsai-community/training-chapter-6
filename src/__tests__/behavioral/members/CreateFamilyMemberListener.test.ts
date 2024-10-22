import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import {
    CreateFamilyMember,
    FamilyMember,
} from '../../../eightbitstories.types'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class CreateFamilyMemberListenerTest extends AbstractEightBitTest {
    private static familyMemberValues: CreateFamilyMember

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()

        this.familyMemberValues = {
            name: generateId(),
            bio: generateId(),
        }
    }

    @test()
    protected static async skillIsListening() {
        await this.emitCreateMember()
    }

    @test()
    protected static async actuallyCreatesAFamilyMember() {
        await this.emitCreateMember()
        const count = await this.familyMembers.count({})
        assert.isEqual(count, 1, 'You did not create a family member!')
    }

    @test()
    protected static async setsProperValuesToCreatedFamilyMember() {
        await this.emitCreateMember()
        const actual = await this.getFirstFamilyMember()

        assert.isEqualDeep(actual, {
            id: actual.id,
            ...this.familyMemberValues,
            source: {
                personId: this.fakedPerson.id,
            },
        })
    }

    @test()
    protected static async returnsCreatedPersonWithExpectedValues() {
        const actual = await this.emitCreateMember()
        const expected = (await this.getFirstFamilyMember()) as FamilyMember
        assert.isEqualDeep({ ...actual, source: expected.source }, expected)
    }

    private static async emitCreateMember() {
        const [{ familyMember }] =
            await this.fakedClient.emitAndFlattenResponses(
                'eightbitstories.create-family-member::v2024_09_19',
                {
                    payload: {
                        familyMember: this.familyMemberValues,
                    },
                }
            )

        return familyMember
    }
}

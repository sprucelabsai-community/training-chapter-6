import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, generateId, assert } from '@sprucelabs/test-utils'
import { CreateFamily } from '../../../eightbitstories.types'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class SaveFamilyListenerTest extends AbstractEightBitTest {
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    protected static async skillIsListening() {
        await this.emitSaveFamily()
    }

    @test()
    protected static async savingFamilyCreatesFamilyRecord() {
        await this.emitSaveFamily()
        await this.assertTotalFamilyRecords(1)
    }

    @test()
    protected static async savesNameAndValues() {
        const name = generateId()
        const values = generateId()

        await this.emitSaveFamily({ name, values })
        const family = await this.getFirstFamily()

        assert.isEqual(family.name, name)
        assert.isEqual(family.values, values)
    }

    @test()
    protected static async returnsSavedFamily() {
        const actual = await this.emitSaveFamily()
        const expected = await this.getFirstFamily()

        assert.isEqualDeep(actual, expected, `Did not return family record!`)
    }

    @test()
    protected static async savingFamilyTwiceDoesNotCreateSecondRecord() {
        await this.emitSaveFamily()
        await this.emitSaveFamily()
        await this.assertTotalFamilyRecords(1)
    }

    @test()
    protected static async savesDifferentRecordForDifferentPerson() {
        await this.emitSaveFamily()

        const { client } = await this.people.loginAsDemoPerson('555-123-1234')
        this.fakedClient = client

        await this.emitSaveFamily()

        await this.assertTotalFamilyRecords(2)
    }

    private static async assertTotalFamilyRecords(expected: number) {
        const total = await this.families.count()
        assert.isEqual(
            total,
            expected,
            `Did not create the correct number of family records!`
        )
    }

    private static async emitSaveFamily(values?: Partial<CreateFamily>) {
        const [{ family }] = await this.fakedClient.emitAndFlattenResponses(
            'eightbitstories.save-family::v2024_09_19',
            {
                payload: {
                    family: {
                        name: generateId(),
                        values: generateId(),
                        ...values,
                    },
                },
            }
        )

        return family
    }
}

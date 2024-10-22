import {
    formAssert,
    interactor,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { eventFaker, fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test } from '@sprucelabs/test-utils'
import FamilySkillViewController from '../../../family/Family.svc'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'
import { SaveFamilyTargetAndPayload } from '../../support/EventFaker'

@fake.login()
export default class FamilySkillViewTest extends AbstractEightBitTest {
    private static vc: SpyFamilySkillView

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.views.setController('eightbitstories.family', SpyFamilySkillView)
        this.vc = this.views.Controller(
            'eightbitstories.family',
            {}
        ) as SpyFamilySkillView

        await this.eventFaker.fakeGetFamily()
    }

    @test()
    protected static async rendersCardVc() {
        vcAssert.assertSkillViewRendersCard(this.vc)
    }

    @test()
    protected static async cardRendersForm() {
        formAssert.cardRendersForm(this.cardVc)
    }

    @test()
    protected static async formRendersExpectedFields() {
        formAssert.formRendersFields(this.formVc, ['name', 'values'])
    }

    @test()
    protected static async valuesFieldRendersAsTextarea() {
        formAssert.formFieldRendersAs(this.formVc, 'values', 'textarea')
    }

    @test()
    protected static async clickingCancelRedirectsToRoot() {
        await this.load()

        await vcAssert.assertActionRedirects({
            action: () => interactor.cancelForm(this.formVc),
            destination: {
                id: 'eightbitstories.root',
            },
            router: this.views.getRouter(),
        })
    }

    @test()
    protected static async submittingFormEmitsSaveEvent() {
        let passedPayload: SaveFamilyTargetAndPayload['payload'] | undefined

        await this.eventFaker.fakeSaveFamily(({ payload }) => {
            passedPayload = payload
        })
        await this.load()

        const expected = await this.fillOutForm()

        await vcAssert.assertActionRedirects({
            action: () => this.submit(),
            destination: {
                id: 'eightbitstories.root',
            },
            router: this.views.getRouter(),
        })

        assert.isEqualDeep(passedPayload?.family, expected)
    }

    @test()
    protected static async saveEventThrowsRendersAlert() {
        await eventFaker.makeEventThrow(
            'eightbitstories.save-family::v2024_09_19'
        )

        await this.load()
        await this.fillOutForm()

        await vcAssert.assertRendersAlert(this.vc, () => this.submit())
    }

    @test()
    protected static async populatesFormFromGetFamilyResponse() {
        const family = this.eventFaker.generateFamilyRecordValues()

        await this.eventFaker.fakeGetFamily(() => {
            return family
        })

        await this.load()

        const actual = this.formVc.getValues()
        assert.isEqualDeep(
            actual,
            {
                name: family.name,
                values: family.values,
            },
            `The values were not set to the form!`
        )
    }

    private static async submit() {
        await interactor.submitForm(this.formVc)
    }

    private static async fillOutForm() {
        const expected = {
            name: generateId(),
            values: generateId(),
        }

        await this.formVc.setValues(expected)
        return expected
    }

    private static async load() {
        await this.views.load(this.vc)
    }

    private static get formVc() {
        return this.vc.getFormVc()
    }

    private static get cardVc() {
        return this.vc.getCardVc()
    }
}

class SpyFamilySkillView extends FamilySkillViewController {
    public getFormVc() {
        return this.formVc
    }
    public getCardVc() {
        return this.cardVc
    }
}

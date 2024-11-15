import { vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test-utils'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'
import SpyFamilyMemberSelectCard from './SpyFamilyMemberSelectCard'

@fake.login()
export default class FamilyMemberSelectCardTest extends AbstractEightBitTest {
    @test()
    protected static async canSetIsCardBusy() {
        this.views.setController(
            'eightbitstories.family-member-select-card',
            SpyFamilyMemberSelectCard
        )

        const vc = this.views.Controller(
            'eightbitstories.family-member-select-card',
            {}
        ) as SpyFamilyMemberSelectCard

        vcAssert.assertCardIsBusy(vc.getCardVc())

        vc.setIsBusy(false)

        vcAssert.assertCardIsNotBusy(vc.getCardVc())
    }
}

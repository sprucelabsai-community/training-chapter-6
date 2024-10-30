import {
    activeRecordCardAssert,
    buttonAssert,
    interactor,
    listAssert,
    MockActiveRecordCard,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { eventFaker, fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test-utils'
import { PublicFamilyMember } from '../../../eightbitstories.types'
import FamilyMemberFormCardViewController from '../../../members/FamilyMemberFormCard.vc'
import MembersSkillViewController from '../../../members/Members.svc'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'
import { DeleteFamilyMemberTargetAndPayload } from '../../support/EventFaker'
import SpyFamilyMemberFormCard from './SpyFamilyMemberFormCard'

@fake.login()
export default class MembersSkillViewTest extends AbstractEightBitTest {
    private static vc: SpyMembersSkillView
    private static fakedFamilyMembers: PublicFamilyMember[]

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.fakedFamilyMembers = []

        await this.eventFaker.fakeDeleteFamilyMember()
        await this.eventFaker.fakeCreateFamilyMember()
        await this.eventFaker.fakeListFamilyMembers(
            () => this.fakedFamilyMembers
        )

        this.views.setController(
            'eightbitstories.family-member-form-card',
            SpyFamilyMemberFormCard
        )
        this.views.setController('active-record-card', MockActiveRecordCard)
        this.views.setController('eightbitstories.members', SpyMembersSkillView)
        this.vc = this.views.Controller(
            'eightbitstories.members',
            {}
        ) as SpyMembersSkillView
    }

    @test()
    protected static rendersCard() {
        vcAssert.assertSkillViewRendersCard(this.vc)
    }

    @test()
    protected static cardRendersExpectedButtons() {
        buttonAssert.cardRendersButtons(this.activeCardVc, ['done', 'add'])
    }

    @test()
    protected static async rendersMembersList() {
        listAssert.cardRendersList(this.activeCardVc)
    }

    @test()
    protected static async doneButtonRedirectsToRoot() {
        await this.load()

        await vcAssert.assertActionRedirects({
            action: () => interactor.clickButton(this.activeCardVc, 'done'),
            router: this.views.getRouter(),
            destination: {
                id: 'eightbitstories.root',
            },
        })
    }

    @test()
    protected static async rendersNoResultsRowIfNoFamilyMembers() {
        this.assertDoesNotRenderNoResultsRow()
        await this.load()
        this.assertListRendersRow('no-results')
    }

    @test()
    protected static async doesNotRenderNoResultsRowIfReturnsFamilyMember() {
        this.seedFamilyMember()
        await this.load()
        this.assertDoesNotRenderNoResultsRow()
    }

    @test()
    protected static async rendersRowForFamilyMember() {
        const familyMember = this.seedFamilyMember()
        await this.load()
        this.assertListRendersRow(familyMember.id)
    }

    @test()
    protected static async rendersRowForEachFamilyMember() {
        this.seedFamilyMember()
        this.seedFamilyMember()
        await this.load()
        this.assertListRendersRow(this.fakedFamilyMembers[1].id)
    }

    @test()
    protected static async cardRendersAsActiveRecordCard() {
        activeRecordCardAssert.rendersAsActiveRecordCard(this.activeCardVc)
    }

    @test()
    protected static async rendersDialogWhenClickingAdd() {
        await this.clickAddAndAssertDialog()
    }

    @test()
    protected static async cancellingFormInFamilyMemberFormCardHidesDialog() {
        const { dialogVc, familyMemberFormCardVc } =
            await this.clickAddAndAssertDialog()

        await interactor.cancelForm(familyMemberFormCardVc.getFormVc())
        assert.isFalse(
            dialogVc.getIsVisible(),
            'Cancelling the form did not hide the dialog'
        )
    }

    @test()
    protected static async submittingAddFamilyHidesDialog() {
        await this.load()
        const { dialogVc, familyMemberFormCardVc } =
            await this.clickAddAndAssertDialog()

        await familyMemberFormCardVc.fillOutFormAndSubmit()

        assert.isFalse(
            dialogVc.getIsVisible(),
            'Submitting form did not hide the dialog'
        )
    }

    @test()
    protected static async refreshesMembersAfterCreating() {
        await this.load()
        let wasHit = false
        await this.eventFaker.fakeListFamilyMembers(() => {
            wasHit = true
        })
        const { familyMemberFormCardVc } = await this.clickAddAndAssertDialog()

        assert.isFalse(wasHit, 'You refreshed too soon!')

        await familyMemberFormCardVc.fillOutFormAndSubmit()

        assert.isTrue(wasHit, 'Did not try and list family members')
    }

    @test()
    protected static async familyMemberRowRendersDeleteButton() {
        const member = await this.seedFamilyMemberAndLoad()
        this.activeCardVc.assertRowRendersButton(member.id, 'delete')
    }

    @test()
    protected static async clickingDeleteMemberRendersConfirm() {
        await this.seedFamilyMemberAndLoad()
        await this.clickDeleteMemberAndAssertConfirm()
    }

    @test()
    protected static async clickingDeleteEmitsDeleteFamilyMemberEvent() {
        let passedTarget:
            | DeleteFamilyMemberTargetAndPayload['target']
            | undefined

        await this.eventFaker.fakeDeleteFamilyMember(({ target }) => {
            passedTarget = target
        })

        const member = await this.seedFamilyMemberAndLoad()
        await this.clickDeleteAndConfirm()

        assert.isEqualDeep(passedTarget, {
            familyMemberId: member.id,
        })
    }

    @test()
    protected static async deletingMemberDeletesRow() {
        const member = await this.seedFamilyMemberAndLoad()
        await this.clickDeleteAndConfirm()
        this.assertDoesNotRenderRow(member.id)
    }

    @test()
    protected static async deletingSecondMemberDeletesSecondRow() {
        this.seedFamilyMember()
        const member = await this.seedFamilyMemberAndLoad()
        await this.clickDeleteAndConfirm(member.id)
        this.assertDoesNotRenderRow(member.id)
    }

    @test()
    protected static async deleteEventThrowingRendersAlert() {
        await this.makeDeleteEventThrow()
        await this.seedFamilyMemberAndLoad()
        await this.clickDeleteConfirmAndAssertAlert()
    }

    @test()
    protected static async doesNotDeleteMemberIfEventFails() {
        await this.makeDeleteEventThrow()
        const member = await this.seedFamilyMemberAndLoad()
        await this.clickDeleteConfirmAndAssertAlert()
        this.assertListRendersRow(member.id)
    }

    @test()
    protected static async doesNotEmitEventIfConfirmationIsDeclined() {
        await this.makeDeleteEventThrow()
        await this.seedFamilyMemberAndLoad()
        const confirmVc = await this.clickDeleteMemberAndAssertConfirm()
        await confirmVc.decline()
    }

    @test()
    protected static async clickingMemberRowRendersDialog() {
        const { spyFormCardVc, member } =
            await this.seedFamilyMemberClickRowAssertRendersDialog()

        const actual = spyFormCardVc.getMemberPassedToConstructor()
        assert.isEqualDeep(
            actual,
            member,
            'You did not pass the family member to the consturctor'
        )
    }

    @test()
    protected static async loadsMemberFormCardWhenClickingRow() {
        const { spyFormCardVc } =
            await this.seedFamilyMemberClickRowAssertRendersDialog()

        assert.isTrue(
            spyFormCardVc.getWasLoaded(),
            'Your form card was not loaded!'
        )
    }

    @test()
    protected static async onCancelOnEditMemberFormHidesDialog() {
        const { spyFormCardVc, dialogVc } =
            await this.seedFamilyMemberClickRowAssertRendersDialog()

        await spyFormCardVc.invokeCancelHandler()
        assert.isFalse(
            dialogVc.getIsVisible(),
            `You need to hide your dialog on cancel when editing a member!`
        )
    }

    @test()
    protected static async onSubmitOnEditMemberFormHidesDialog() {
        const { spyFormCardVc, dialogVc } =
            await this.seedFamilyMemberClickRowAssertRendersDialog()
        await spyFormCardVc.invokeSubmitHandler()
        assert.isFalse(
            dialogVc.getIsVisible(),
            'You need to hide your dialog on submit when editing a member!'
        )
    }

    @test()
    protected static async refreshesActiveRecordCardOnSubmitWhenEditing() {
        let wasHit = false

        const { spyFormCardVc } =
            await this.seedFamilyMemberClickRowAssertRendersDialog()

        this.activeCardVc.refresh = async () => {
            wasHit = true
        }

        await spyFormCardVc.invokeSubmitHandler()

        assert.isTrue(
            wasHit,
            'You should have tried to list members on submit!'
        )
    }

    @test()
    protected static async activeRecordPagesAsExpected() {
        activeRecordCardAssert.pagingOptionsEqual(this.activeCardVc, {
            pageSize: 5,
            shouldPageClientSide: true,
        })
    }

    private static async seedFamilyMemberClickRowAssertRendersDialog() {
        const member = await this.seedFamilyMemberAndLoad()
        const dialogVc = await vcAssert.assertRendersDialog(this.vc, () =>
            interactor.clickRow(this.listVc, 0)
        )
        const spyFormCardVc = vcAssert.assertRendersAsInstanceOf(
            dialogVc,
            FamilyMemberFormCardViewController
        ) as SpyFamilyMemberFormCard

        return { spyFormCardVc, member, dialogVc }
    }

    private static async clickDeleteConfirmAndAssertAlert() {
        return await vcAssert.assertRendersAlert(this.vc, () =>
            this.clickDeleteAndConfirm()
        )
    }

    private static async makeDeleteEventThrow() {
        await eventFaker.makeEventThrow(
            'eightbitstories.delete-family-member::v2024_09_19'
        )
    }

    private static async clickDeleteAndConfirm(row?: string) {
        const confirmVc = await this.clickDeleteMemberAndAssertConfirm(row)
        await confirmVc.accept()
    }

    private static async clickDeleteMemberAndAssertConfirm(row?: string) {
        return await vcAssert.assertRendersConfirm(this.vc, () =>
            interactor.clickButtonInRow(this.listVc, row ?? 0, 'delete')
        )
    }

    private static get listVc() {
        return this.activeCardVc.getListVc()
    }

    private static async seedFamilyMemberAndLoad() {
        const familyMember = this.seedFamilyMember()
        await this.load()
        return familyMember
    }

    private static async clickAddAndAssertDialog() {
        const dialogVc = await vcAssert.assertRendersDialog(this.vc, () =>
            interactor.clickButton(this.activeCardVc, 'add')
        )

        const familyMemberFormCardVc = vcAssert.assertRendersAsInstanceOf(
            dialogVc,
            FamilyMemberFormCardViewController
        ) as SpyFamilyMemberFormCard

        return {
            dialogVc,
            familyMemberFormCardVc,
        }
    }

    private static seedFamilyMember() {
        const familyMember = this.eventFaker.generatePublicFamilyMemberValues()
        this.fakedFamilyMembers.push(familyMember)
        return familyMember
    }

    private static assertListRendersRow(id: string) {
        this.activeCardVc.assertRendersRow(id)
    }

    private static assertDoesNotRenderNoResultsRow() {
        this.assertDoesNotRenderRow('no-results')
    }

    private static assertDoesNotRenderRow(id: string) {
        this.activeCardVc.assertDoesNotRenderRow(id)
    }

    private static async load() {
        await this.views.load(this.vc)
    }

    private static get activeCardVc() {
        return this.vc.getActiveCardVc()
    }
}

class SpyMembersSkillView extends MembersSkillViewController {
    public getActiveCardVc() {
        return this.activeCardVc as MockActiveRecordCard
    }
}

import {
    AbstractSkillViewController,
    ViewControllerOptions,
    SkillView,
    SkillViewControllerLoadOptions,
    Router,
    buildActiveRecordCard,
    ActiveRecordCardViewController,
    ListRow,
} from '@sprucelabs/heartwood-view-controllers'
import { PublicFamilyMember } from '../eightbitstories.types'

export default class MembersSkillViewController extends AbstractSkillViewController {
    public static id = 'members'

    private router?: Router
    protected activeCardVc: ActiveRecordCardViewController

    public constructor(options: ViewControllerOptions) {
        super(options)
        this.activeCardVc = this.ActiveRecordCard()
    }

    private ActiveRecordCard(): ActiveRecordCardViewController {
        return this.Controller(
            'active-record-card',
            buildActiveRecordCard({
                eventName: 'eightbitstories.list-family-members::v2024_09_19',
                responseKey: 'familyMembers',
                header: {
                    title: 'Family Members',
                    image: 'https://s3.amazonaws.com/storybook.sprucelabs.ai/members.jpg',
                },
                paging: {
                    pageSize: 5,
                    shouldPageClientSide: true,
                },
                rowTransformer: this.renderRow.bind(this),
                columnWidths: ['fill'],
                noResultsRow: {
                    height: 'content',
                    cells: [
                        {
                            text: {
                                content: `You have not created any family members! Do that now! 👇`,
                            },
                        },
                    ],
                },
                footer: {
                    buttons: [
                        {
                            id: 'add',
                            label: 'Add Family Member',
                            onClick: this.handleClickAddMember.bind(this),
                        },
                        {
                            id: 'done',
                            label: 'Done',
                            type: 'primary',
                            onClick: this.handleClickDone.bind(this),
                        },
                    ],
                },
            })
        )
    }

    private renderRow(familyMember: PublicFamilyMember): ListRow {
        return {
            id: familyMember.id,
            onClick: this.handleClickRow.bind(this, familyMember),
            cells: [
                {
                    text: {
                        content: familyMember.name,
                    },
                    subText: {
                        content: familyMember.bio,
                    },
                },
                {
                    button: {
                        id: 'delete',
                        lineIcon: 'user-delete',
                        type: 'destructive',
                        onClick: this.handleClickDelete.bind(
                            this,
                            familyMember
                        ),
                    },
                },
            ],
        }
    }

    private async handleClickRow(familyMember: PublicFamilyMember) {
        const vc = this.Controller('eightbitstories.family-member-form-card', {
            familyMember,
            onCancel: () => dlgVc.hide(),
            onSubmit: async () => {
                await dlgVc.hide()
                await this.activeCardVc.refresh()
            },
        })
        const dlgVc = this.renderInDialog(vc.render())
        await vc.load()
    }

    private async handleClickDelete(member: PublicFamilyMember) {
        const didConfirm = await this.confirm({
            isDestructive: true,
            message: `Are you sure you want to delete ${member.name}?`,
        })

        if (!didConfirm) {
            return
        }

        try {
            const client = await this.connectToApi()
            await client.emitAndFlattenResponses(
                'eightbitstories.delete-family-member::v2024_09_19',
                {
                    target: {
                        familyMemberId: member.id,
                    },
                }
            )
            this.activeCardVc.deleteRow(member.id)
        } catch (err: any) {
            this.log.error('Failed to delete family member', err)
            await this.alert({
                message: err.message ?? 'Failed to delete family member!',
            })
        }
    }

    private async handleClickAddMember() {
        const vc = this.Controller('eightbitstories.family-member-form-card', {
            onCancel: async () => {
                await dialogVc.hide()
            },
            onSubmit: async () => {
                await dialogVc.hide()
                await this.activeCardVc.refresh()
            },
        })

        const dialogVc = this.renderInDialog(vc.render())
    }

    private async handleClickDone() {
        await this.router?.redirect('eightbitstories.root')
    }

    public async load(options: SkillViewControllerLoadOptions) {
        const { router } = options
        this.router = router

        await this.activeCardVc.load()
    }

    public render(): SkillView {
        return {
            layouts: [
                {
                    cards: [this.activeCardVc.render()],
                },
            ],
        }
    }
}

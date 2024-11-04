import {
    AbstractSkillViewController,
    ViewControllerOptions,
    SkillView,
    CardViewController,
    SkillViewControllerLoadOptions,
    Router,
    buildSkillViewLayout,
    buildForm,
    FormViewController,
} from '@sprucelabs/heartwood-view-controllers'
import { buildSchema } from '@sprucelabs/schema'
import { SelectChoice } from '@sprucelabs/spruce-core-schemas'
import { PublicFamilyMember } from '../eightbitstories.types'
import StoryElementsCardViewController from '../viewControllers/StoryElementsCard.vc'

export default class GenerateSkillViewController extends AbstractSkillViewController {
    public static id = 'generate'

    protected elementsCardVc: StoryElementsCardViewController
    protected controlsCardVc: CardViewController
    protected familyMembersCardVc: CardViewController
    protected familyMembersFormVc: FormViewController<FamilyMembersFormSchema>

    private currentChallengeCardVc: CardViewController
    private router?: Router

    public constructor(options: ViewControllerOptions) {
        super(options)

        this.familyMembersFormVc = this.FamilyMemberFormVc()
        this.elementsCardVc = this.ElementsCardVc()
        this.currentChallengeCardVc = this.CurrentChallengeCardVc()
        this.familyMembersCardVc = this.FamilyMembersCardVc()
        this.controlsCardVc = this.ControlsCardVc()
    }

    private FamilyMemberFormVc() {
        return this.Controller(
            'form',
            buildForm({
                schema: familyMembersFormSchema,
                shouldShowSubmitControls: false,
                sections: [
                    {
                        fields: [{ name: 'familyMembers', renderAs: 'tags' }],
                    },
                ],
            })
        )
    }

    private ControlsCardVc(): CardViewController {
        return this.Controller('card', {
            id: 'controls',
            body: {
                sections: [
                    {
                        buttons: [
                            {
                                id: 'back',
                                label: 'Back',
                                onClick: this.handleClickBack.bind(this),
                            },
                            {
                                id: 'write',
                                type: 'primary',
                                label: 'Write Story',
                            },
                        ],
                    },
                ],
            },
        })
    }

    private FamilyMembersCardVc(): CardViewController {
        return this.Controller('card', {
            id: 'familyMembers',
            header: {
                title: 'Family Members',
            },
            body: {
                isBusy: true,
                sections: [
                    {
                        form: this.familyMembersFormVc.render(),
                    },
                ],
            },
        })
    }

    private CurrentChallengeCardVc(): CardViewController {
        return this.Controller('card', {
            id: 'currentChallenge',
            header: {
                title: 'Current Challenge',
            },
        })
    }

    private ElementsCardVc() {
        return this.Controller('eightbitstories.story-elements-card', {})
    }

    private async handleClickBack() {
        await this.router?.redirect('eightbitstories.root')
    }

    public async load(options: SkillViewControllerLoadOptions) {
        const { router } = options
        this.router = router

        const client = await this.connectToApi()
        const [{ familyMembers }] = await client.emitAndFlattenResponses(
            'eightbitstories.list-family-members::v2024_09_19'
        )

        if (familyMembers.length === 0) {
            await this.alert({
                message:
                    'You gotta add at least one family member before writing your bedtime story!',
            })

            await this.router.redirect('eightbitstories.members')
            return
        }

        this.updateFamilyMemberField(familyMembers)
        this.familyMembersCardVc.setIsBusy(false)
    }

    private updateFamilyMemberField(familyMembers: PublicFamilyMember[]) {
        const choices: SelectChoice[] = familyMembers.map((f) => ({
            value: f.id,
            label: f.name,
        }))

        this.familyMembersFormVc.updateField('familyMembers', {
            fieldDefinition: {
                type: 'select',
                isArray: true,
                isRequired: true,
                options: {
                    choices,
                },
            },
        })
    }

    public render(): SkillView {
        const skillView = buildSkillViewLayout('big-left', {
            leftCards: [
                this.elementsCardVc.render(),
                this.familyMembersCardVc.render(),
            ],
            rightCards: [
                this.currentChallengeCardVc.render(),
                this.controlsCardVc.render(),
            ],
        })

        return skillView
    }
}

const familyMembersFormSchema = buildSchema({
    id: 'familyMembersForm',
    fields: {
        familyMembers: {
            type: 'select',
            isRequired: true,
            isArray: true,
            options: {
                choices: [] as SelectChoice[],
            },
        },
    },
})

type FamilyMembersFormSchema = typeof familyMembersFormSchema

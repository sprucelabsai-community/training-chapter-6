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
    Button,
} from '@sprucelabs/heartwood-view-controllers'
import { buildSchema } from '@sprucelabs/schema'
import { SelectChoice, SpruceSchemas } from '@sprucelabs/spruce-core-schemas'
import { PublicFamilyMember } from '../eightbitstories.types'
import StoryElementsCardViewController from './StoryElementsCard.vc'

export default class GenerateSkillViewController extends AbstractSkillViewController {
    public static id = 'generate'

    protected elementsCardVc: StoryElementsCardViewController
    protected controlsCardVc: CardViewController
    protected familyMembersCardVc: CardViewController
    protected familyMembersFormVc: FormViewController<FamilyMembersFormSchema>
    protected currentChallengeCardVc: CardViewController
    protected currentChallengeFormVc: FormViewController<CurrentChallengeFormSchema>

    private router?: Router

    public constructor(options: ViewControllerOptions) {
        super(options)

        this.currentChallengeFormVc = this.CurrentChallengeFormVc()
        this.familyMembersFormVc = this.FamilyMemberFormVc()
        this.elementsCardVc = this.ElementsCardVc()
        this.currentChallengeCardVc = this.CurrentChallengeCardVc()
        this.familyMembersCardVc = this.FamilyMembersCardVc()
        this.controlsCardVc = this.ControlsCardVc()

        this.handleDidFailToGenerate = this.handleDidFailToGenerate.bind(this)
        this.handleDidGenerate = this.handleDidGenerate.bind(this)
    }

    private CurrentChallengeFormVc() {
        return this.Controller(
            'form',
            buildForm({
                schema: currentChallengFormSchema,
                shouldShowSubmitControls: false,
                sections: [
                    {
                        fields: [
                            { name: 'currentChallenge', renderAs: 'textarea' },
                        ],
                    },
                ],
            })
        )
    }

    private FamilyMemberFormVc() {
        return this.Controller(
            'form',
            buildForm({
                schema: familyMembersFormSchema,
                shouldShowSubmitControls: false,
                onChange: this.handleChangeForms.bind(this),
                sections: [
                    {
                        fields: [{ name: 'familyMembers', renderAs: 'tags' }],
                    },
                ],
            })
        )
    }

    private handleChangeForms() {
        this.updateControls()
    }

    private ControlsCardVc(): CardViewController {
        return this.Controller('card', {
            id: 'controls',
            body: {
                sections: [
                    {
                        buttons: this.renderControlsButtons(),
                    },
                ],
            },
        })
    }

    private renderControlsButtons(): Button[] {
        const isValid =
            this.familyMembersFormVc.isValid() && this.elementsCardVc.isValid()
        return [
            {
                id: 'back',
                label: 'Back',
                onClick: this.handleClickBack.bind(this),
            },
            {
                id: 'write',
                type: 'primary',
                label: 'Write Story',
                isEnabled: isValid,
                onClick: this.handleClickWrite.bind(this),
            },
        ]
    }

    private async handleClickWrite() {
        this.controlsCardVc.setIsBusy(true)

        const familyMembers = this.familyMembersFormVc.getValue('familyMembers')
        const storyElements = this.elementsCardVc.getSelectedElements()
        const currentChallenge =
            this.currentChallengeFormVc.getValue('currentChallenge')

        const client = await this.connectToApi()
        await client.emitAndFlattenResponses(
            'eightbitstories.generate-story::v2024_09_19',
            {
                payload: {
                    storyElements,
                    familyMembers: familyMembers!,
                    currentChallenge,
                },
            }
        )
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
            body: {
                sections: [
                    {
                        form: this.currentChallengeFormVc.render(),
                    },
                ],
            },
        })
    }

    private ElementsCardVc() {
        return this.Controller('eightbitstories.story-elements-card', {
            onChange: () => this.updateControls(),
        })
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

        await client.on(
            'eightbitstories.did-fail-to-generate-story::v2024_09_19',
            this.handleDidFailToGenerate
        )

        await client.on(
            'eightbitstories.did-generate-story::v2024_09_19',
            this.handleDidGenerate
        )
    }

    private async handleDidGenerate({
        payload,
    }: SpruceSchemas.Eightbitstories.v2024_09_19.DidGenerateStoryEmitTargetAndPayload) {
        const { storyId } = payload
        await this.router?.redirect('eightbitstories.read', {
            storyId,
        })
    }

    private async handleDidFailToGenerate({
        payload,
    }: SpruceSchemas.Eightbitstories.v2024_09_19.DidFailToGenerateStoryEmitTargetAndPayload) {
        const { errorMessage } = payload
        await this.alert({ message: errorMessage })
    }

    public async willBlur() {
        const client = await this.connectToApi()
        await client.off(
            'eightbitstories.did-fail-to-generate-story::v2024_09_19',
            this.handleDidFailToGenerate
        )

        await client.off(
            'eightbitstories.did-generate-story::v2024_09_19',
            this.handleDidGenerate
        )
    }

    private updateControls() {
        this.controlsCardVc.updateSection(0, {
            buttons: this.renderControlsButtons(),
        })
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

const currentChallengFormSchema = buildSchema({
    id: 'currentChallengeForm',
    fields: {
        currentChallenge: {
            type: 'text',
            isRequired: true,
        },
    },
})

type CurrentChallengeFormSchema = typeof currentChallengFormSchema
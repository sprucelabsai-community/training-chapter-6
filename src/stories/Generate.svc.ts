import {
    AbstractSkillViewController,
    ViewControllerOptions,
    SkillView,
    CardViewController,
    SkillViewControllerLoadOptions,
    Router,
    buildSkillViewLayout,
    Button,
} from '@sprucelabs/heartwood-view-controllers'
import { SpruceSchemas } from '@sprucelabs/spruce-core-schemas'
import { PublicFamilyMember } from '../eightbitstories.types'
import CurrentChallengeCardViewController from './CurrentChallengeCard.vc'
import FamilyMemberSelectCardViewController from './FamilyMemberSelectCard.vc'
import StoryElementSelectCardViewController from './StoryElementSelectCard.vc'

export default class GenerateSkillViewController extends AbstractSkillViewController {
    public static id = 'generate'

    protected elementsCardVc: StoryElementSelectCardViewController
    protected controlsCardVc: CardViewController
    protected familyMembersCardVc: FamilyMemberSelectCardViewController
    protected currentChallengeCardVc: CurrentChallengeCardViewController

    private router?: Router

    public constructor(options: ViewControllerOptions) {
        super(options)

        this.elementsCardVc = this.ElementsCardVc()
        this.currentChallengeCardVc = this.CurrentChallengeCardVc()
        this.familyMembersCardVc = this.FamilyMemberSelectCardVc()
        this.controlsCardVc = this.ControlsCardVc()

        this.handleDidFailToGenerate = this.handleDidFailToGenerate.bind(this)
        this.handleDidGenerate = this.handleDidGenerate.bind(this)
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
                isEnabled: this.isValid(),
                onClick: this.handleClickWrite.bind(this),
            },
        ]
    }

    private isValid() {
        return (
            this.familyMembersCardVc.isValid() && this.elementsCardVc.isValid()
        )
    }

    private async handleClickWrite() {
        this.controlsCardVc.setIsBusy(true)

        const familyMembers =
            this.familyMembersCardVc.getSelectedFamilyMembers()
        const storyElements = this.elementsCardVc.getSelectedElements()
        const currentChallenge =
            this.currentChallengeCardVc.getCurrentChallenge()

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

    private FamilyMemberSelectCardVc() {
        return this.Controller('eightbitstories.family-member-select-card', {
            onChange: () => this.updateControls(),
        })
    }

    private CurrentChallengeCardVc() {
        return this.Controller('eightbitstories.current-challenge-card', {})
    }

    private ElementsCardVc() {
        return this.Controller('eightbitstories.story-element-select-card', {
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

        this.setFamilyMembers(familyMembers)
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

    private setFamilyMembers(familyMembers: PublicFamilyMember[]) {
        this.familyMembersCardVc.setFamilyMembers(familyMembers)
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

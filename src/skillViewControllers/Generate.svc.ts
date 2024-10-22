import {
    AbstractSkillViewController,
    ViewControllerOptions,
    SkillView,
    CardViewController,
    SkillViewControllerLoadOptions,
    Router,
    buildSkillViewLayout,
} from '@sprucelabs/heartwood-view-controllers'
import StoryElementsCardViewController from '../viewControllers/StoryElementsCard.vc'

export default class GenerateSkillViewController extends AbstractSkillViewController {
    public static id = 'generate'

    protected elementsCardVc: StoryElementsCardViewController
    protected controlsCardVc: CardViewController

    private currentChallengeCardVc: CardViewController
    private familyMembersCardVc: CardViewController
    private router?: Router

    public constructor(options: ViewControllerOptions) {
        super(options)

        this.elementsCardVc = this.ElementsCardVc()
        this.currentChallengeCardVc = this.CurrentChallengeCardVc()
        this.familyMembersCardVc = this.FamilyMembersCardVc()
        this.controlsCardVc = this.ControlsCardVc()
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

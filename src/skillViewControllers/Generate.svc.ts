import {
    AbstractSkillViewController,
    ViewControllerOptions,
    SkillView,
    CardViewController,
    SkillViewControllerLoadOptions,
    Router,
    buildSkillViewLayout,
} from '@sprucelabs/heartwood-view-controllers'

export default class GenerateSkillViewController extends AbstractSkillViewController {
    public static id = 'generate'
    private storyElementsCardVc: CardViewController
    private currentChallengeCardVc: CardViewController
    private familyMembersCardVc: CardViewController
    protected controlsCardVc: CardViewController
    private router?: Router

    public constructor(options: ViewControllerOptions) {
        super(options)

        this.storyElementsCardVc = this.Controller('card', {
            id: 'storyElements',
            header: {
                title: 'Story Elements',
            },
        })

        this.currentChallengeCardVc = this.Controller('card', {
            id: 'currentChallenge',
            header: {
                title: 'Current Challenge',
            },
        })

        this.familyMembersCardVc = this.Controller('card', {
            id: 'familyMembers',
            header: {
                title: 'Family Members',
            },
        })

        this.controlsCardVc = this.Controller('card', {
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
                this.storyElementsCardVc.render(),
                this.currentChallengeCardVc.render(),
            ],
            rightCards: [
                this.familyMembersCardVc.render(),
                this.controlsCardVc.render(),
            ],
        })

        return skillView
    }
}

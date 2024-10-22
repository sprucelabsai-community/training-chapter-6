import {
    AbstractSkillViewController,
    ViewControllerOptions,
    SkillView,
    CardViewController,
    SkillViewControllerLoadOptions,
    Router,
} from '@sprucelabs/heartwood-view-controllers'

export default class RootSkillViewController extends AbstractSkillViewController {
    public static id = 'root'
    protected cardVc: CardViewController
    private router?: Router

    public constructor(options: ViewControllerOptions) {
        super(options)
        this.cardVc = this.CardVc()
    }

    private CardVc(): CardViewController {
        return this.Controller('card', {
            header: {
                image: 'https://s3.amazonaws.com/storybook.sprucelabs.ai/card-header-1.png',
            },
            body: {
                sections: [
                    {
                        buttons: [
                            {
                                id: 'values',
                                label: 'Family Values',
                                onClick:
                                    this.handleClickFamilyValues.bind(this),
                            },
                            {
                                id: 'members',
                                label: 'Family Members',
                                onClick:
                                    this.handleClickFamilyMembers.bind(this),
                            },
                            {
                                id: 'feedback',
                                label: 'Feedback',
                                onClick: this.handleClickFeedback.bind(this),
                            },
                            {
                                id: 'write',
                                label: 'Write Story',
                                type: 'primary',
                                onClick: this.handleClickWrite.bind(this),
                            },
                        ],
                    },
                ],
            },
        })
    }

    private async handleClickWrite() {
        await this.router?.redirect('eightbitstories.generate')
    }

    private async handleClickFamilyMembers() {
        await this.router?.redirect('eightbitstories.members')
    }

    private async handleClickFamilyValues() {
        await this.router?.redirect('eightbitstories.family')
    }

    public async load(options: SkillViewControllerLoadOptions) {
        const { router } = options

        this.router = router
    }

    private async handleClickFeedback() {
        const feedbackCardVc = this.Controller(
            'eightbitstories.feedback-card',
            {
                onSubmit: () => dialogVc.hide(),
            }
        )
        const dialogVc = this.renderInDialog(feedbackCardVc.render())
    }

    public async getIsLoginRequired() {
        return true
    }

    public render(): SkillView {
        return {
            layouts: [
                {
                    cards: [this.cardVc.render()],
                },
            ],
        }
    }
}

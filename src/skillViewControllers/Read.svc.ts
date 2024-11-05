import {
    AbstractSkillViewController,
    ViewControllerOptions,
    SkillView,
} from '@sprucelabs/heartwood-view-controllers'

export default class ReadSkillViewController extends AbstractSkillViewController {
    public static id = 'read'

    public constructor(options: ViewControllerOptions) {
        super(options)
    }

    public getTitle(): string | undefined {
        return 'Reading your story'
    }

    public getSubtitle(): string | undefined {
        return "You know it's gonna be good!"
    }

    public render(): SkillView {
        return {
            layouts: [
                {
                    cards: [],
                },
            ],
        }
    }
}

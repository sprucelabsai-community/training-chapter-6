import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
    CardViewController,
    FormViewController,
    buildForm,
} from '@sprucelabs/heartwood-view-controllers'
import { buildSchema } from '@sprucelabs/schema'

export default class CurrentChallengeCardViewController extends AbstractViewController<Card> {
    public static id = 'current-challenge-card'

    private cardVc: CardViewController
    protected formVc: FormViewController<CurrentChallengeFormSchema>

    public constructor(
        options: ViewControllerOptions & CurrentChallengeCardOptions
    ) {
        super(options)

        this.formVc = this.FormVc()
        this.cardVc = this.CardVc()
    }

    private FormVc() {
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

    public CardVc() {
        return this.Controller('card', {
            id: 'currentChallenge',
            header: {
                title: 'Current Challenge',
            },
            body: {
                sections: [
                    {
                        form: this.formVc.render(),
                    },
                ],
            },
        })
    }

    public getCurrentChallenge() {
        return this.formVc.getValue('currentChallenge')
    }

    public render() {
        return this.cardVc.render()
    }
}

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

export interface CurrentChallengeCardOptions {}

import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
    buildForm,
    CardViewController,
    FormViewController,
} from '@sprucelabs/heartwood-view-controllers'
import { SelectChoice, buildSchema } from '@sprucelabs/schema'

export default class StoryElementsCardViewController extends AbstractViewController<Card> {
    public static id = 'story-elements-card'
    protected formVc: FormViewController<StoryElementsFormSchema>
    protected cardVc: CardViewController

    public constructor(options: ViewControllerOptions) {
        super(options)

        this.formVc = this.FormVc()
        this.cardVc = this.CardVc()
    }

    private FormVc() {
        return this.Controller(
            'form',
            buildForm({
                schema: elementsFormSchema,
                shouldShowSubmitControls: false,
                sections: [
                    {
                        fields: [{ name: 'elements', renderAs: 'tags' }],
                    },
                ],
            })
        )
    }

    private CardVc(): CardViewController {
        return this.Controller('card', {
            id: 'storyElements',
            header: {
                title: 'Story Elements',
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

    public render() {
        return this.cardVc.render()
    }
}

const elements = {
    wizards: 'Wizards 🧙‍♂️',
    witches: 'Witches 🧙‍♀️',
    dinosaurs: 'Dinosaurs 🦕',
    magic: 'Magic 🪄',
    elves: 'Elves 🧝‍♂️',
    sports: 'Sports 🏀',
    hardLessons: 'Hard Lessons 😬',
}

const storyElementChoices: SelectChoice[] = Object.keys(elements).map((v) => ({
    value: v,
    label: elements[v as keyof typeof elements],
}))

const elementsFormSchema = buildSchema({
    id: 'storyElementsForm',
    fields: {
        elements: {
            type: 'select',
            isArray: true,
            isRequired: true,
            options: {
                choices: storyElementChoices,
            },
        },
    },
})

type StoryElementsFormSchema = typeof elementsFormSchema

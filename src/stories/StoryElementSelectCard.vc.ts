import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
    buildForm,
    CardViewController,
    FormViewController,
} from '@sprucelabs/heartwood-view-controllers'
import { SelectChoice, buildSchema } from '@sprucelabs/schema'

export default class StoryElementSelectCardViewController extends AbstractViewController<Card> {
    public static id = 'story-element-select-card'
    protected formVc: FormViewController<StoryElementsFormSchema>
    protected cardVc: CardViewController
    private onChangeHandler?: OnChangeHandler

    public constructor(
        options: ViewControllerOptions & StoryElementsCardOptions
    ) {
        super(options)

        const { onChange } = options

        this.onChangeHandler = onChange

        this.formVc = this.FormVc()
        this.cardVc = this.CardVc()
    }

    private FormVc() {
        return this.Controller(
            'form',
            buildForm({
                schema: elementsFormSchema,
                shouldShowSubmitControls: false,
                onChange: this.onChangeHandler,
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

    public getSelectedElements() {
        return this.formVc.getValue('elements') ?? []
    }

    public isValid() {
        return this.formVc.isValid()
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

type OnChangeHandler = () => void | Promise<void>

interface StoryElementsCardOptions {
    onChange?: OnChangeHandler
}

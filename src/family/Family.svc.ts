import {
    AbstractSkillViewController,
    ViewControllerOptions,
    SkillView,
    CardViewController,
    buildForm,
    FormViewController,
    SkillViewControllerLoadOptions,
    Router,
} from '@sprucelabs/heartwood-view-controllers'
import familySchema from '#spruce/schemas/eightbitstories/v2024_09_19/family.schema'
import { FamilySchema } from '../eightbitstories.types'

export default class FamilySkillViewController extends AbstractSkillViewController {
    public static id = 'family'
    protected cardVc: CardViewController
    protected formVc: FormViewController<FamilySchema>
    private router?: Router

    public constructor(options: ViewControllerOptions) {
        super(options)

        this.formVc = this.FormVc()
        this.cardVc = this.CardVc()
    }

    private FormVc(): any {
        return this.Controller(
            'form',
            buildForm({
                schema: familySchema,
                onCancel: this.handleCancelForm.bind(this),
                onSubmit: this.handleSubmit.bind(this),
                sections: [
                    {
                        fields: [
                            'name',
                            { name: 'values', renderAs: 'textarea' },
                        ],
                    },
                ],
            })
        )
    }

    private async handleSubmit() {
        const { name, values } = this.formVc.getValues()
        this.formVc.setIsBusy(true)

        try {
            const client = await this.connectToApi()
            await client.emitAndFlattenResponses(
                'eightbitstories.save-family::v2024_09_19',
                {
                    payload: {
                        family: {
                            name: name!,
                            values: values!,
                        },
                    },
                }
            )
            await this.redirectToRoot()
        } catch (err: any) {
            this.log.error(`Saving family failed`, err)
            await this.alert({
                message: err.message ?? `Failed to save family!`,
            })
        }

        this.formVc.setIsBusy(false)
    }

    private async handleCancelForm() {
        await this.redirectToRoot()
    }

    private async redirectToRoot() {
        await this.router?.redirect('eightbitstories.root')
    }

    public async load(options: SkillViewControllerLoadOptions) {
        const { router } = options
        this.router = router

        const client = await this.connectToApi()
        const [{ family }] = await client.emitAndFlattenResponses(
            'eightbitstories.get-family::v2024_09_19'
        )

        if (family) {
            await this.formVc.setValues(family)
        }
    }

    private CardVc(): CardViewController {
        return this.Controller('card', {
            header: {
                title: 'Your family',
                image: 'https://s3.amazonaws.com/storybook.sprucelabs.ai/values.jpeg',
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

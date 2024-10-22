import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
    CardViewController,
    buildForm,
    FormViewController,
} from '@sprucelabs/heartwood-view-controllers'
import publicFamilyMemberSchema from '#spruce/schemas/eightbitstories/v2024_09_19/publicFamilyMember.schema'
import {
    FamilyMemberSchema,
    PublicFamilyMember,
} from '../eightbitstories.types'
import SaveMemberStrategies, {
    MemberSaveStrategy,
    MemberStrategyOptions,
} from './FamilySaveStrategies'

export default class FamilyMemberFormCardViewController extends AbstractViewController<Card> {
    public static id = 'family-member-form-card'

    private cardVc: CardViewController

    protected formVc: FormViewController<FamilyMemberSchema>
    protected onCancelHandler?: OnCancelHandler
    protected onSubmitHandler?: OnSubmitHandler
    private familyMember?: PublicFamilyMember
    private familyStrategy: MemberSaveStrategy

    public constructor(
        options: ViewControllerOptions & FamilyMemberFormCardOptions
    ) {
        super(options)

        const { onCancel, onSubmit, familyMember } = options

        this.onCancelHandler = onCancel
        this.onSubmitHandler = onSubmit
        this.familyMember = familyMember

        this.formVc = this.FormVc()
        this.cardVc = this.CardVc()

        const strategyOptions: MemberStrategyOptions = {
            connectToApi: this.connectToApi,
            formVc: this.formVc,
        }

        this.familyStrategy = new SaveMemberStrategies[
            familyMember ? 'update' : 'create'
        ](strategyOptions)
    }

    private CardVc(): CardViewController {
        return this.Controller('card', {
            header: {
                title: 'Add Family Member!',
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

    private FormVc() {
        return this.Controller(
            'form',
            buildForm({
                schema: publicFamilyMemberSchema,
                onCancel: this.handleCancel.bind(this),
                onChange: this.handleChangeForm.bind(this),
                onSubmit: this.handleSubmit.bind(this),
                sections: [
                    {
                        fields: ['name', { name: 'bio', renderAs: 'textarea' }],
                    },
                ],
            })
        )
    }

    private async handleSubmit() {
        this.formVc.setIsBusy(true)
        try {
            await this.familyStrategy.save()
            await this.onSubmitHandler?.()
        } catch (err: any) {
            this.log.error(`failed to create family member`, err)
            await this.alert({
                message: err.message ?? 'Adding your family member failed!',
            })
        }

        this.formVc.setIsBusy(false)
    }

    private async handleChangeForm() {
        const name = this.formVc.getValue('name')
        this.cardVc.setHeaderTitle(`Add ${name || 'Family Member'}!`)
    }

    private async handleCancel() {
        await this.onCancelHandler?.()
    }

    public async load() {
        this.cardVc.setIsBusy(true)
        try {
            await this.familyStrategy.load(this.familyMember?.id)
        } catch (err: any) {
            this.log.error('Failed to get family member', err)
            await this.alert({
                message: err.message ?? 'Failed to get family member!',
            })
            await this.onCancelHandler?.()
        }
        this.cardVc.setIsBusy(false)
    }

    public render() {
        return this.cardVc.render()
    }
}

type OnCancelHandler = () => void | Promise<void>
type OnSubmitHandler = () => void | Promise<void>

export interface FamilyMemberFormCardOptions {
    onCancel?: OnCancelHandler
    onSubmit?: OnSubmitHandler
    familyMember?: PublicFamilyMember
}

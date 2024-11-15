import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
    CardViewController,
    FormViewController,
    buildForm,
} from '@sprucelabs/heartwood-view-controllers'
import { buildSchema, SelectChoice } from '@sprucelabs/schema'
import { PublicFamilyMember } from '../eightbitstories.types'

export default class FamilyMemberSelectCardViewController extends AbstractViewController<Card> {
    public static id = 'family-member-select-card'

    protected formVc: FormViewController<FamilyMembersFormSchema>
    protected cardVc: CardViewController

    private onChangeHandler?: () => void | Promise<void>

    public constructor(
        options: ViewControllerOptions & FamilyMemberCardOptions
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
                schema: familyMembersFormSchema,
                shouldShowSubmitControls: false,
                onChange: this.onChangeHandler,
                sections: [
                    {
                        fields: [{ name: 'familyMembers', renderAs: 'tags' }],
                    },
                ],
            })
        )
    }

    private CardVc(): CardViewController {
        return this.Controller('card', {
            id: 'familyMembers',
            header: {
                title: 'Family Members',
            },
            body: {
                isBusy: true,
                sections: [
                    {
                        form: this.formVc.render(),
                    },
                ],
            },
        })
    }

    public getSelectedFamilyMembers() {
        return this.formVc.getValue('familyMembers') ?? {}
    }

    public setFamilyMembers(familyMembers: PublicFamilyMember[]) {
        const choices: SelectChoice[] = familyMembers.map((f) => ({
            value: f.id,
            label: f.name,
        }))

        this.formVc.updateField('familyMembers', {
            fieldDefinition: {
                type: 'select',
                isArray: true,
                isRequired: true,
                options: {
                    choices,
                },
            },
        })
    }

    public setIsBusy(isBusy: boolean) {
        this.cardVc.setIsBusy(isBusy)
    }

    public isValid() {
        return this.formVc.isValid()
    }

    public render() {
        return this.cardVc.render()
    }
}

const familyMembersFormSchema = buildSchema({
    id: 'familyMembersForm',
    fields: {
        familyMembers: {
            type: 'select',
            isRequired: true,
            isArray: true,
            options: {
                choices: [] as SelectChoice[],
            },
        },
    },
})

type FamilyMembersFormSchema = typeof familyMembersFormSchema

export interface FamilyMemberCardOptions {
    onChange?: () => void | Promise<void>
}

import {
    ConnectToApi,
    FormViewController,
} from '@sprucelabs/heartwood-view-controllers'
import {
    FamilyMemberSchema,
    PublicFamilyMember,
} from '../eightbitstories.types'

class CreateStrategy implements MemberSaveStrategy {
    private connectToApi: ConnectToApi
    private formVc: FormViewController<FamilyMemberSchema>

    public constructor(options: MemberStrategyOptions) {
        const { connectToApi, formVc } = options
        this.connectToApi = connectToApi
        this.formVc = formVc
    }

    public async load(_familyMemberId?: string): Promise<void> {}
    public async save(): Promise<void> {
        const client = await this.connectToApi()
        const values = this.formVc.getValues()

        await client.emitAndFlattenResponses(
            'eightbitstories.create-family-member::v2024_09_19',
            {
                payload: {
                    familyMember: values as PublicFamilyMember,
                },
            }
        )
    }
}

class UpdateStrategy implements MemberSaveStrategy {
    private connectToApi: ConnectToApi
    private formVc: FormViewController<FamilyMemberSchema>
    private familyMemberId!: string

    public constructor(options: MemberStrategyOptions) {
        const { connectToApi, formVc } = options
        this.connectToApi = connectToApi
        this.formVc = formVc
    }

    public async load(familyMemberId?: string): Promise<void> {
        this.familyMemberId = familyMemberId!
        const client = await this.connectToApi()
        const [{ familyMember }] = await client.emitAndFlattenResponses(
            'eightbitstories.get-family-member::v2024_09_19',
            {
                target: {
                    familyMemberId: this.familyMemberId,
                },
            }
        )

        await this.formVc.setValues(familyMember)
    }
    public async save(): Promise<void> {
        const client = await this.connectToApi()
        const values = this.formVc.getValues()

        await client.emitAndFlattenResponses(
            'eightbitstories.update-family-member::v2024_09_19',
            {
                target: {
                    familyMemberId: this.familyMemberId,
                },
                payload: {
                    familyMember: values as PublicFamilyMember,
                },
            }
        )
    }
}

const SaveMemberStrategies = {
    create: CreateStrategy,
    update: UpdateStrategy,
}

export default SaveMemberStrategies

export interface MemberSaveStrategy {
    load(familyMemberId?: string): Promise<void>
    save(): Promise<void>
}
export interface MemberStrategyOptions {
    connectToApi: ConnectToApi
    formVc: FormViewController<FamilyMemberSchema>
}

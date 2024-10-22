import {
    AbstractStore,
    UniversalStoreOptions,
    PrepareOptions,
    PrepareResults,
    generateId,
} from '@sprucelabs/data-stores'
import {
    buildSchema,
    dropFields,
    makeFieldsOptional,
    SchemaValues,
    SchemaFieldNames,
} from '@sprucelabs/schema'
import { StoreSeedOptions } from '@sprucelabs/spruce-test-fixtures'
import familySchema from '#spruce/schemas/eightbitstories/v2024_09_19/family.schema'

export default class FamiliesStore extends AbstractStore<
    FullSchema,
    CreateSchema,
    UpdateSchema,
    DatabaseSchema
> {
    public name = 'Families'
    protected collectionName = 'families'

    protected createSchema = createSchema
    protected updateSchema = updateSchema
    protected fullSchema = fullSchema
    protected databaseSchema = databaseSchema

    public static Store(options: FamilyStoreOptions & UniversalStoreOptions) {
        return new this(options.db)
    }

    public async initialize(): Promise<void> {
        await this.db.syncUniqueIndexes(this.collectionName, [
            ['source.personId'],
        ])
    }

    protected async willCreate(
        values: CreateFamily
    ): Promise<Omit<DatabaseFamily, 'id'>> {
        return values
    }

    protected async willUpdate(values: UpdateFamily) {
        return values as Partial<DatabaseFamily>
    }

    protected async prepareRecord<
        IncludePrivateFields extends boolean,
        F extends SchemaFieldNames<FullSchema> = SchemaFieldNames<FullSchema>,
    >(
        record: DatabaseFamily,
        _options?: PrepareOptions<IncludePrivateFields, FullSchema, F>
    ) {
        return record as PrepareResults<FullSchema, IncludePrivateFields>
    }

    public async seed(
        options: StoreSeedOptions,
        custom?: {
            shouldSetFakedPersonAsSource?: boolean
        }
    ) {
        const { totalToSeed, TestClass } = options
        const { shouldSetFakedPersonAsSource = true } = custom ?? {}

        const personId = shouldSetFakedPersonAsSource
            ? TestClass.fakedPerson.id
            : generateId()

        await Promise.all(
            Array.from({ length: totalToSeed }).map(() =>
                this.createOne({
                    name: generateId(),
                    values: generateId(),
                    source: {
                        personId,
                    },
                })
            )
        )
    }
}

// The structure of the data you'll be returning from finds
const fullSchema = familySchema

// The values you will accept when creating a record
const createSchema = buildSchema({
    id: 'createFamily',
    fields: {
        ...dropFields(fullSchema.fields, ['id']),
    },
})

// The values you will accept when updating a record
const updateSchema = buildSchema({
    id: 'updateFamily',
    fields: {
        ...makeFieldsOptional(dropFields(fullSchema.fields, ['id', 'source'])),
    },
})

// The values you will actually save to the databases (in this case, makes id required)
const databaseSchema = buildSchema({
    id: 'databaseFamily',
    fields: {
        ...fullSchema.fields,
        id: {
            type: 'id',
            isRequired: true,
        },
    },
})

type FullSchema = typeof fullSchema
type CreateSchema = typeof createSchema
type UpdateSchema = typeof updateSchema
type DatabaseSchema = typeof databaseSchema

// type Family = SchemaValues<FullSchema>
type CreateFamily = SchemaValues<CreateSchema>
type UpdateFamily = SchemaValues<UpdateSchema>
type DatabaseFamily = SchemaValues<DatabaseSchema>
// type QueryFamily = Partial<Family>

type FamilyStoreOptions = UniversalStoreOptions

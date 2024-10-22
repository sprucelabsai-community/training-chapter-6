import { buildSchema, dropFields } from '@sprucelabs/schema'
import familyBuilder from '../../../../schemas/v2024_09_19/family.builder'

const saveFamilyEmitPayloadBuilder = buildSchema({
    id: 'saveFamilyEmitPayload',
    fields: {
        family: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: buildSchema({
                    id: 'createFamily',
                    fields: {
                        ...dropFields(familyBuilder.fields, ['id', 'source']),
                    },
                }),
            },
        },
    },
})

export default saveFamilyEmitPayloadBuilder

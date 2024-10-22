import { buildSchema } from '@sprucelabs/schema'
import familyBuilder from '../../../../schemas/v2024_09_19/family.builder'

const saveFamilyResponsePayloadBuilder = buildSchema({
    id: 'saveFamilyResponsePayload',
    fields: {
        family: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: familyBuilder,
            },
        },
    },
})

export default saveFamilyResponsePayloadBuilder

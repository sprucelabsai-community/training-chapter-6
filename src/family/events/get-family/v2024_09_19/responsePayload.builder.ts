import { buildSchema } from '@sprucelabs/schema'
import familyBuilder from '../../../../schemas/v2024_09_19/family.builder'

const getFamilyResponsePayloadBuilder = buildSchema({
    id: 'getFamilyResponsePayload',
    fields: {
        family: {
            type: 'schema',
            options: {
                schema: familyBuilder,
            },
        },
    },
})

export default getFamilyResponsePayloadBuilder

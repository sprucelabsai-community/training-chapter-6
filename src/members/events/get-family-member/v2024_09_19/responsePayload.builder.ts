import { buildSchema } from '@sprucelabs/schema'
import publicFamilyMemberBuilder from '../../../../schemas/v2024_09_19/publicFamilyMember.builder'

const getFamilyMemberResponsePayloadBuilder = buildSchema({
    id: 'getFamilyMemberResponsePayload',
    fields: {
        familyMember: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: publicFamilyMemberBuilder,
            },
        },
    },
})

export default getFamilyMemberResponsePayloadBuilder

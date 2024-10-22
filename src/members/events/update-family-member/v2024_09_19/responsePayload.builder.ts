import { buildSchema } from '@sprucelabs/schema'
import publicFamilyMemberBuilder from '../../../../schemas/v2024_09_19/publicFamilyMember.builder'

const updateFamilyMemberResponsePayloadBuilder = buildSchema({
    id: 'updateFamilyMemberResponsePayload',
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

export default updateFamilyMemberResponsePayloadBuilder

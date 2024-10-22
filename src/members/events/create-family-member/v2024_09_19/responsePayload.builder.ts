import { buildSchema } from '@sprucelabs/schema'
import publicFamilyMemberBuilder from '../../../../schemas/v2024_09_19/publicFamilyMember.builder'

const createFamilyMemberResponsePayloadBuilder = buildSchema({
    id: 'createFamilyMemberResponsePayload',
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

export default createFamilyMemberResponsePayloadBuilder

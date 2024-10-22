import { buildSchema } from '@sprucelabs/schema'
import publicFamilyMemberBuilder from '../../../../schemas/v2024_09_19/publicFamilyMember.builder'

const listFamilyMembersResponsePayloadBuilder = buildSchema({
    id: 'listFamilyMembersResponsePayload',
    fields: {
        familyMembers: {
            type: 'schema',
            isArray: true,
            isRequired: true,
            minArrayLength: 0,
            options: {
                schema: publicFamilyMemberBuilder,
            },
        },
    },
})

export default listFamilyMembersResponsePayloadBuilder

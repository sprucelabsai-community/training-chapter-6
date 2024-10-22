import { buildSchema, dropFields } from '@sprucelabs/schema'
import publicFamilyMemberBuilder from '../../../../schemas/v2024_09_19/publicFamilyMember.builder'

const createFamilyMemberEmitPayloadBuilder = buildSchema({
    id: 'createFamilyMemberEmitPayload',
    fields: {
        familyMember: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: buildSchema({
                    id: 'createFamilyMember',
                    fields: {
                        ...dropFields(publicFamilyMemberBuilder.fields, ['id']),
                    },
                }),
            },
        },
    },
})

export default createFamilyMemberEmitPayloadBuilder

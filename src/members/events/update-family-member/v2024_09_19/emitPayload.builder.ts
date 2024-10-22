import { buildSchema, dropFields, makeFieldsOptional } from '@sprucelabs/schema'
import publicFamilyMemberBuilder from '../../../../schemas/v2024_09_19/publicFamilyMember.builder'

const updateFamilyMemberEmitPayloadBuilder = buildSchema({
    id: 'updateFamilyMemberEmitPayload',
    fields: {
        familyMember: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: buildSchema({
                    id: 'updateFamilyMember',
                    fields: {
                        ...makeFieldsOptional(
                            dropFields(publicFamilyMemberBuilder.fields, ['id'])
                        ),
                    },
                }),
            },
        },
    },
})

export default updateFamilyMemberEmitPayloadBuilder

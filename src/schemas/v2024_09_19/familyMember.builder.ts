import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
    id: 'familyMember',
    name: 'Family Member',
    fields: {
        id: {
            type: 'id',
            isRequired: true,
        },
        name: {
            type: 'text',
            label: 'Name',
            isRequired: true,
        },
        bio: {
            type: 'text',
            label: 'Bio',
            isRequired: true,
        },
        source: {
            type: 'schema',
            isRequired: true,
            isPrivate: true,
            options: {
                schema: buildSchema({
                    id: 'familyMemberSource',
                    fields: {
                        personId: {
                            type: 'id',
                            isRequired: true,
                        },
                    },
                }),
            },
        },
    },
})

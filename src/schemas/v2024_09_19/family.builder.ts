import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
    id: 'family',
    name: 'Family',
    fields: {
        id: {
            type: 'id',
            isRequired: true,
        },
        name: {
            type: 'text',
            label: 'Family Name',
            isRequired: true,
        },
        values: {
            type: 'text',
            label: 'Family Values',
            isRequired: true,
        },
        source: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: buildSchema({
                    id: 'familySource',
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

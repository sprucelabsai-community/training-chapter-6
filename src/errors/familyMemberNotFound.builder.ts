import { buildErrorSchema } from '@sprucelabs/schema'

export default buildErrorSchema({
    id: 'familyMemberNotFound',
    name: 'Family member not found',
    fields: {
        familyMemberId: {
            type: 'id',
            isRequired: true,
        },
    },
})

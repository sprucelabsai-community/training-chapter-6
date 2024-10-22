import { buildSchema } from '@sprucelabs/schema'

const getFamilyMemberEmitTargetBuilder = buildSchema({
    id: 'getFamilyMemberEmitTarget',
    fields: {
        familyMemberId: {
            type: 'id',
            isRequired: true,
        },
    },
})

export default getFamilyMemberEmitTargetBuilder

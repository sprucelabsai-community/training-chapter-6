import { buildSchema } from '@sprucelabs/schema'

const didFailToGenerateStoryEmitTargetBuilder = buildSchema({
    id: 'didFailToGenerateStoryEmitTarget',
    fields: {
        personId: {
            type: 'id',
            isRequired: true,
        },
    },
})

export default didFailToGenerateStoryEmitTargetBuilder

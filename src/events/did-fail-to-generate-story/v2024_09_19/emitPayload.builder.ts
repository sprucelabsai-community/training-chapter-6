import { buildSchema } from '@sprucelabs/schema'

const didFailToGenerateStoryEmitPayloadBuilder = buildSchema({
    id: 'didFailToGenerateStoryEmitPayload',
    fields: {
        errorMessage: {
            type: 'text',
            isRequired: true,
        },
    },
})

export default didFailToGenerateStoryEmitPayloadBuilder

import { buildSchema } from '@sprucelabs/schema'

const submitFeedbackEmitPayloadBuilder = buildSchema({
    id: 'submitFeedbackEmitPayload',
    fields: {
        feedback: {
            type: 'text',
            isRequired: true,
        },
    },
})

export default submitFeedbackEmitPayloadBuilder

import { buildSchema } from '@sprucelabs/schema'

const submitFeedbackResponsePayloadBuilder = buildSchema({
    id: 'submitFeedbackResponsePayload',
    fields: {
        success: {
            type: 'boolean',
            isRequired: true,
        },
    },
})

export default submitFeedbackResponsePayloadBuilder

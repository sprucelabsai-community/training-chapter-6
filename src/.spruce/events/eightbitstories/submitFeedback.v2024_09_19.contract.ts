import '#spruce/permissions/permissions.types'
import submitFeedbackEmitTargetAndPayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/submitFeedbackEmitTargetAndPayload.schema'
import submitFeedbackResponsePayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/submitFeedbackResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const submitFeedbackEventContract = buildEventContract({
    eventSignatures: {
        'eightbitstories.submit-feedback::v2024_09_19': {
            isGlobal: true,
            emitPermissions: {"contractId":"eightbitstories.eightbitstories","permissionIdsAny":["can-submit-feedback"]},
            
            emitPayloadSchema: submitFeedbackEmitTargetAndPayloadSchema,
            responsePayloadSchema: submitFeedbackResponsePayloadSchema,
            
            
        }
    }
})
export default submitFeedbackEventContract

export type SubmitFeedbackEventContract = typeof submitFeedbackEventContract
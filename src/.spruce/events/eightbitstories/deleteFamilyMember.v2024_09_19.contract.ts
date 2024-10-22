import '#spruce/permissions/permissions.types'
import deleteFamilyMemberEmitTargetAndPayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/deleteFamilyMemberEmitTargetAndPayload.schema'
import deleteFamilyMemberResponsePayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/deleteFamilyMemberResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const deleteFamilyMemberEventContract = buildEventContract({
    eventSignatures: {
        'eightbitstories.delete-family-member::v2024_09_19': {
            isGlobal: true,
            emitPermissions: {"contractId":"eightbitstories.eightbitstories","permissionIdsAny":["can-manage-family"]},
            
            emitPayloadSchema: deleteFamilyMemberEmitTargetAndPayloadSchema,
            responsePayloadSchema: deleteFamilyMemberResponsePayloadSchema,
            
            
        }
    }
})
export default deleteFamilyMemberEventContract

export type DeleteFamilyMemberEventContract = typeof deleteFamilyMemberEventContract
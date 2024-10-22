import '#spruce/permissions/permissions.types'
import updateFamilyMemberEmitTargetAndPayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/updateFamilyMemberEmitTargetAndPayload.schema'
import updateFamilyMemberResponsePayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/updateFamilyMemberResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const updateFamilyMemberEventContract = buildEventContract({
    eventSignatures: {
        'eightbitstories.update-family-member::v2024_09_19': {
            isGlobal: true,
            emitPermissions: {"contractId":"eightbitstories.eightbitstories","permissionIdsAny":["can-manage-family"]},
            
            emitPayloadSchema: updateFamilyMemberEmitTargetAndPayloadSchema,
            responsePayloadSchema: updateFamilyMemberResponsePayloadSchema,
            
            
        }
    }
})
export default updateFamilyMemberEventContract

export type UpdateFamilyMemberEventContract = typeof updateFamilyMemberEventContract
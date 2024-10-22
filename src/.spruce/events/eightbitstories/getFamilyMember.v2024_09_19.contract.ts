import '#spruce/permissions/permissions.types'
import getFamilyMemberEmitTargetAndPayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/getFamilyMemberEmitTargetAndPayload.schema'
import getFamilyMemberResponsePayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/getFamilyMemberResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const getFamilyMemberEventContract = buildEventContract({
    eventSignatures: {
        'eightbitstories.get-family-member::v2024_09_19': {
            isGlobal: true,
            emitPermissions: {"contractId":"eightbitstories.eightbitstories","permissionIdsAny":["can-manage-family"]},
            
            emitPayloadSchema: getFamilyMemberEmitTargetAndPayloadSchema,
            responsePayloadSchema: getFamilyMemberResponsePayloadSchema,
            
            
        }
    }
})
export default getFamilyMemberEventContract

export type GetFamilyMemberEventContract = typeof getFamilyMemberEventContract
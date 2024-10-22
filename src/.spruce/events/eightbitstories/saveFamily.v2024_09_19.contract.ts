import '#spruce/permissions/permissions.types'
import saveFamilyEmitTargetAndPayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/saveFamilyEmitTargetAndPayload.schema'
import saveFamilyResponsePayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/saveFamilyResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const saveFamilyEventContract = buildEventContract({
    eventSignatures: {
        'eightbitstories.save-family::v2024_09_19': {
            isGlobal: true,
            emitPermissions: {"contractId":"eightbitstories.eightbitstories","permissionIdsAny":["can-manage-family"]},
            
            emitPayloadSchema: saveFamilyEmitTargetAndPayloadSchema,
            responsePayloadSchema: saveFamilyResponsePayloadSchema,
            
            
        }
    }
})
export default saveFamilyEventContract

export type SaveFamilyEventContract = typeof saveFamilyEventContract
import '#spruce/permissions/permissions.types'
import getFamilyResponsePayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/getFamilyResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const getFamilyEventContract = buildEventContract({
    eventSignatures: {
        'eightbitstories.get-family::v2024_09_19': {
            isGlobal: true,
            emitPermissions: {"contractId":"eightbitstories.eightbitstories","permissionIdsAny":["can-manage-family"]},
            
            
            responsePayloadSchema: getFamilyResponsePayloadSchema,
            
            
        }
    }
})
export default getFamilyEventContract

export type GetFamilyEventContract = typeof getFamilyEventContract
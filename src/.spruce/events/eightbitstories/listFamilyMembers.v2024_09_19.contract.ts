import '#spruce/permissions/permissions.types'
import listFamilyMembersResponsePayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/listFamilyMembersResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const listFamilyMembersEventContract = buildEventContract({
    eventSignatures: {
        'eightbitstories.list-family-members::v2024_09_19': {
            isGlobal: true,
            emitPermissions: {"contractId":"eightbitstories.eightbitstories","permissionIdsAny":["can-manage-family"]},
            
            
            responsePayloadSchema: listFamilyMembersResponsePayloadSchema,
            
            
        }
    }
})
export default listFamilyMembersEventContract

export type ListFamilyMembersEventContract = typeof listFamilyMembersEventContract
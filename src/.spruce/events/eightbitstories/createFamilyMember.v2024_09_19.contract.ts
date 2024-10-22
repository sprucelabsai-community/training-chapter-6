import '#spruce/permissions/permissions.types'
import createFamilyMemberEmitTargetAndPayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/createFamilyMemberEmitTargetAndPayload.schema'
import createFamilyMemberResponsePayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/createFamilyMemberResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const createFamilyMemberEventContract = buildEventContract({
    eventSignatures: {
        'eightbitstories.create-family-member::v2024_09_19': {
            isGlobal: true,
            emitPermissions: {"contractId":"eightbitstories.eightbitstories","permissionIdsAny":["can-manage-family"]},
            
            emitPayloadSchema: createFamilyMemberEmitTargetAndPayloadSchema,
            responsePayloadSchema: createFamilyMemberResponsePayloadSchema,
            
            
        }
    }
})
export default createFamilyMemberEventContract

export type CreateFamilyMemberEventContract = typeof createFamilyMemberEventContract
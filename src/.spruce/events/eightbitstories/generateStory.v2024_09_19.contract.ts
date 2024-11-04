import '#spruce/permissions/permissions.types'
import generateStoryEmitTargetAndPayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/generateStoryEmitTargetAndPayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const generateStoryEventContract = buildEventContract({
    eventSignatures: {
        'eightbitstories.generate-story::v2024_09_19': {
            isGlobal: true,
            emitPermissions: {"contractId":"eightbitstories.eightbitstories","permissionIdsAny":["can-generate-story"]},
            
            emitPayloadSchema: generateStoryEmitTargetAndPayloadSchema,
            
            
            
        }
    }
})
export default generateStoryEventContract

export type GenerateStoryEventContract = typeof generateStoryEventContract
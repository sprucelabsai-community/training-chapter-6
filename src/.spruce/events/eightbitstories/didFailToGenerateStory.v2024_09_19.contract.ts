import '#spruce/permissions/permissions.types'
import didFailToGenerateStoryEmitTargetAndPayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/didFailToGenerateStoryEmitTargetAndPayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const didFailToGenerateStoryEventContract = buildEventContract({
    eventSignatures: {
        'eightbitstories.did-fail-to-generate-story::v2024_09_19': {
            isGlobal: true,
            
            listenPermissions: {"contractId":"eightbitstories.eightbitstories","permissionIdsAny":["can-generate-story"]},
            emitPayloadSchema: didFailToGenerateStoryEmitTargetAndPayloadSchema,
            
            
            
        }
    }
})
export default didFailToGenerateStoryEventContract

export type DidFailToGenerateStoryEventContract = typeof didFailToGenerateStoryEventContract
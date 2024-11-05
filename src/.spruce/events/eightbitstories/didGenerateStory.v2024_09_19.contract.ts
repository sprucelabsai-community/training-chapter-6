import '#spruce/permissions/permissions.types'
import didGenerateStoryEmitTargetAndPayloadSchema from '#spruce/schemas/eightbitstories/v2024_09_19/didGenerateStoryEmitTargetAndPayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const didGenerateStoryEventContract = buildEventContract({
    eventSignatures: {
        'eightbitstories.did-generate-story::v2024_09_19': {
            isGlobal: true,
            
            listenPermissions: {"contractId":"eightbitstories.eightbitstories","permissionIdsAny":["can-generate-story"]},
            emitPayloadSchema: didGenerateStoryEmitTargetAndPayloadSchema,
            
            
            
        }
    }
})
export default didGenerateStoryEventContract

export type DidGenerateStoryEventContract = typeof didGenerateStoryEventContract
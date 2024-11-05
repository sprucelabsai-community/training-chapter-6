import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const didFailToGenerateStoryEmitPayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.DidFailToGenerateStoryEmitPayloadSchema  = {
	id: 'didFailToGenerateStoryEmitPayload',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'errorMessage': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didFailToGenerateStoryEmitPayloadSchema)

export default didFailToGenerateStoryEmitPayloadSchema

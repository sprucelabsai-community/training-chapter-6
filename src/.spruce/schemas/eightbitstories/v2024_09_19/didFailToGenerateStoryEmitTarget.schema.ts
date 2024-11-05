import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const didFailToGenerateStoryEmitTargetSchema: SpruceSchemas.Eightbitstories.v2024_09_19.DidFailToGenerateStoryEmitTargetSchema  = {
	id: 'didFailToGenerateStoryEmitTarget',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'personId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didFailToGenerateStoryEmitTargetSchema)

export default didFailToGenerateStoryEmitTargetSchema

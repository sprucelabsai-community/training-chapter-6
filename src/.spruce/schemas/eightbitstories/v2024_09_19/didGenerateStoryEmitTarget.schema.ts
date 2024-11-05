import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const didGenerateStoryEmitTargetSchema: SpruceSchemas.Eightbitstories.v2024_09_19.DidGenerateStoryEmitTargetSchema  = {
	id: 'didGenerateStoryEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(didGenerateStoryEmitTargetSchema)

export default didGenerateStoryEmitTargetSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const createFamilySchema: SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilySchema  = {
	id: 'createFamily',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** Family Name. */
	            'name': {
	                label: 'Family Name',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Family Values. */
	            'values': {
	                label: 'Family Values',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createFamilySchema)

export default createFamilySchema

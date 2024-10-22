import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const familySourceSchema: SpruceSchemas.Eightbitstories.v2024_09_19.FamilySourceSchema  = {
	id: 'familySource',
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

SchemaRegistry.getInstance().trackSchema(familySourceSchema)

export default familySourceSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const familyMemberSourceSchema: SpruceSchemas.Eightbitstories.v2024_09_19.FamilyMemberSourceSchema  = {
	id: 'familyMemberSource',
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

SchemaRegistry.getInstance().trackSchema(familyMemberSourceSchema)

export default familyMemberSourceSchema

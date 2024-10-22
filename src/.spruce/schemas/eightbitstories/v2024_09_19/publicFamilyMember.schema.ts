import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const publicFamilyMemberSchema: SpruceSchemas.Eightbitstories.v2024_09_19.PublicFamilyMemberSchema  = {
	id: 'publicFamilyMember',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: 'Public family member',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Bio. */
	            'bio': {
	                label: 'Bio',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(publicFamilyMemberSchema)

export default publicFamilyMemberSchema

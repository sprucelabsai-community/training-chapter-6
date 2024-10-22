import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const deleteFamilyMemberResponsePayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.DeleteFamilyMemberResponsePayloadSchema  = {
	id: 'deleteFamilyMemberResponsePayload',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'success': {
	                type: 'boolean',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteFamilyMemberResponsePayloadSchema)

export default deleteFamilyMemberResponsePayloadSchema

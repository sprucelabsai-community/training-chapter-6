import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const deleteFamilyMemberEmitTargetSchema: SpruceSchemas.Eightbitstories.v2024_09_19.DeleteFamilyMemberEmitTargetSchema  = {
	id: 'deleteFamilyMemberEmitTarget',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'familyMemberId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteFamilyMemberEmitTargetSchema)

export default deleteFamilyMemberEmitTargetSchema

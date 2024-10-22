import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getFamilyMemberEmitTargetSchema: SpruceSchemas.Eightbitstories.v2024_09_19.GetFamilyMemberEmitTargetSchema  = {
	id: 'getFamilyMemberEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(getFamilyMemberEmitTargetSchema)

export default getFamilyMemberEmitTargetSchema

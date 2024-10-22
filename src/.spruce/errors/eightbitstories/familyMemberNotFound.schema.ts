import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const familyMemberNotFoundSchema: SpruceErrors.Eightbitstories.FamilyMemberNotFoundSchema  = {
	id: 'familyMemberNotFound',
	namespace: 'Eightbitstories',
	name: 'Family member not found',
	    fields: {
	            /** . */
	            'familyMemberId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(familyMemberNotFoundSchema)

export default familyMemberNotFoundSchema

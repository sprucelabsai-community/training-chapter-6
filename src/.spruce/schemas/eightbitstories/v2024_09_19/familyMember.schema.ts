import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import familyMemberSourceSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/familyMemberSource.schema'

const familyMemberSchema: SpruceSchemas.Eightbitstories.v2024_09_19.FamilyMemberSchema  = {
	id: 'familyMember',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: 'Family Member',
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
	            /** . */
	            'source': {
	                type: 'schema',
	                isPrivate: true,
	                isRequired: true,
	                options: {schema: familyMemberSourceSchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(familyMemberSchema)

export default familyMemberSchema

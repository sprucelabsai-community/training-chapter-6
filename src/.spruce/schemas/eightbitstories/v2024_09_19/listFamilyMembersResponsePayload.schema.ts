import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import publicFamilyMemberSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/publicFamilyMember.schema'

const listFamilyMembersResponsePayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.ListFamilyMembersResponsePayloadSchema  = {
	id: 'listFamilyMembersResponsePayload',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'familyMembers': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: publicFamilyMemberSchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listFamilyMembersResponsePayloadSchema)

export default listFamilyMembersResponsePayloadSchema

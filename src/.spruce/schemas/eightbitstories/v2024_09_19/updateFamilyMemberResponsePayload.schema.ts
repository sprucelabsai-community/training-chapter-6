import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import publicFamilyMemberSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/publicFamilyMember.schema'

const updateFamilyMemberResponsePayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberResponsePayloadSchema  = {
	id: 'updateFamilyMemberResponsePayload',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'familyMember': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: publicFamilyMemberSchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateFamilyMemberResponsePayloadSchema)

export default updateFamilyMemberResponsePayloadSchema

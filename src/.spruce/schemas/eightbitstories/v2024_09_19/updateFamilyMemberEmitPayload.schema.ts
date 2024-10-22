import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import updateFamilyMemberSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/updateFamilyMember.schema'

const updateFamilyMemberEmitPayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberEmitPayloadSchema  = {
	id: 'updateFamilyMemberEmitPayload',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'familyMember': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: updateFamilyMemberSchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateFamilyMemberEmitPayloadSchema)

export default updateFamilyMemberEmitPayloadSchema

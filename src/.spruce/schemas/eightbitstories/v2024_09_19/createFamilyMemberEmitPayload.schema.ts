import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import createFamilyMemberSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/createFamilyMember.schema'

const createFamilyMemberEmitPayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilyMemberEmitPayloadSchema  = {
	id: 'createFamilyMemberEmitPayload',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'familyMember': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createFamilyMemberSchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createFamilyMemberEmitPayloadSchema)

export default createFamilyMemberEmitPayloadSchema

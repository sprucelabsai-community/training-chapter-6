import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import familySchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/family.schema'

const getFamilyResponsePayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.GetFamilyResponsePayloadSchema  = {
	id: 'getFamilyResponsePayload',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'family': {
	                type: 'schema',
	                options: {schema: familySchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getFamilyResponsePayloadSchema)

export default getFamilyResponsePayloadSchema

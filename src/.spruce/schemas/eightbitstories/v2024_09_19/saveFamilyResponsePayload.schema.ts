import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import familySchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/family.schema'

const saveFamilyResponsePayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.SaveFamilyResponsePayloadSchema  = {
	id: 'saveFamilyResponsePayload',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'family': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: familySchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(saveFamilyResponsePayloadSchema)

export default saveFamilyResponsePayloadSchema

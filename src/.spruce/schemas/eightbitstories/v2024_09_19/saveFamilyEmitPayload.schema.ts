import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import createFamilySchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/createFamily.schema'

const saveFamilyEmitPayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.SaveFamilyEmitPayloadSchema  = {
	id: 'saveFamilyEmitPayload',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'family': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createFamilySchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(saveFamilyEmitPayloadSchema)

export default saveFamilyEmitPayloadSchema

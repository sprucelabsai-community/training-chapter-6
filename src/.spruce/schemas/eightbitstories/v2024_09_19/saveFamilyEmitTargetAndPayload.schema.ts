import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import saveFamilyEmitPayloadSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/saveFamilyEmitPayload.schema'

const saveFamilyEmitTargetAndPayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.SaveFamilyEmitTargetAndPayloadSchema  = {
	id: 'saveFamilyEmitTargetAndPayload',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: saveFamilyEmitPayloadSchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(saveFamilyEmitTargetAndPayloadSchema)

export default saveFamilyEmitTargetAndPayloadSchema

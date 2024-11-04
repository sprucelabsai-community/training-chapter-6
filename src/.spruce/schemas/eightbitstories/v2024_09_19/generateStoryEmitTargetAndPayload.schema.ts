import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import generateStoryEmitPayloadSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/generateStoryEmitPayload.schema'

const generateStoryEmitTargetAndPayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.GenerateStoryEmitTargetAndPayloadSchema  = {
	id: 'generateStoryEmitTargetAndPayload',
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
	                options: {schema: generateStoryEmitPayloadSchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(generateStoryEmitTargetAndPayloadSchema)

export default generateStoryEmitTargetAndPayloadSchema

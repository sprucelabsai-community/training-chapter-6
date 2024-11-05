import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import didFailToGenerateStoryEmitTargetSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/didFailToGenerateStoryEmitTarget.schema'
import didFailToGenerateStoryEmitPayloadSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/didFailToGenerateStoryEmitPayload.schema'

const didFailToGenerateStoryEmitTargetAndPayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.DidFailToGenerateStoryEmitTargetAndPayloadSchema  = {
	id: 'didFailToGenerateStoryEmitTargetAndPayload',
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
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: didFailToGenerateStoryEmitTargetSchema_v2024_09_19,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: didFailToGenerateStoryEmitPayloadSchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didFailToGenerateStoryEmitTargetAndPayloadSchema)

export default didFailToGenerateStoryEmitTargetAndPayloadSchema

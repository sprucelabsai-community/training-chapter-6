import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import submitFeedbackEmitPayloadSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/submitFeedbackEmitPayload.schema'

const submitFeedbackEmitTargetAndPayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.SubmitFeedbackEmitTargetAndPayloadSchema  = {
	id: 'submitFeedbackEmitTargetAndPayload',
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
	                options: {schema: submitFeedbackEmitPayloadSchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(submitFeedbackEmitTargetAndPayloadSchema)

export default submitFeedbackEmitTargetAndPayloadSchema

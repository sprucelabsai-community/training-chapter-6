import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const submitFeedbackEmitPayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.SubmitFeedbackEmitPayloadSchema  = {
	id: 'submitFeedbackEmitPayload',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'feedback': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(submitFeedbackEmitPayloadSchema)

export default submitFeedbackEmitPayloadSchema

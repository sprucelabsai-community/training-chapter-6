import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const submitFeedbackResponsePayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.SubmitFeedbackResponsePayloadSchema  = {
	id: 'submitFeedbackResponsePayload',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'success': {
	                type: 'boolean',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(submitFeedbackResponsePayloadSchema)

export default submitFeedbackResponsePayloadSchema

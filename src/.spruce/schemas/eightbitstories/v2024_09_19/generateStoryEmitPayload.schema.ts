import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const generateStoryEmitPayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.GenerateStoryEmitPayloadSchema  = {
	id: 'generateStoryEmitPayload',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'storyElements': {
	                type: 'text',
	                isRequired: true,
	                isArray: true,
	                options: undefined
	            },
	            /** . */
	            'familyMembers': {
	                type: 'id',
	                isRequired: true,
	                isArray: true,
	                options: undefined
	            },
	            /** . */
	            'currentChallenge': {
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(generateStoryEmitPayloadSchema)

export default generateStoryEmitPayloadSchema

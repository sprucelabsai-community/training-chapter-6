import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import getFamilyMemberEmitTargetSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/getFamilyMemberEmitTarget.schema'

const getFamilyMemberEmitTargetAndPayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.GetFamilyMemberEmitTargetAndPayloadSchema  = {
	id: 'getFamilyMemberEmitTargetAndPayload',
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
	                options: {schema: getFamilyMemberEmitTargetSchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getFamilyMemberEmitTargetAndPayloadSchema)

export default getFamilyMemberEmitTargetAndPayloadSchema

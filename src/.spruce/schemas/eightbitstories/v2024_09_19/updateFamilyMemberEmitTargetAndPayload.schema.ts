import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import updateFamilyMemberEmitTargetSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/updateFamilyMemberEmitTarget.schema'
import updateFamilyMemberEmitPayloadSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/updateFamilyMemberEmitPayload.schema'

const updateFamilyMemberEmitTargetAndPayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberEmitTargetAndPayloadSchema  = {
	id: 'updateFamilyMemberEmitTargetAndPayload',
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
	                options: {schema: updateFamilyMemberEmitTargetSchema_v2024_09_19,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: updateFamilyMemberEmitPayloadSchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateFamilyMemberEmitTargetAndPayloadSchema)

export default updateFamilyMemberEmitTargetAndPayloadSchema

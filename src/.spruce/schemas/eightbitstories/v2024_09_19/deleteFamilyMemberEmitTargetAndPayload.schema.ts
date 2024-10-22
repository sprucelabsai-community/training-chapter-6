import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import deleteFamilyMemberEmitTargetSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/deleteFamilyMemberEmitTarget.schema'

const deleteFamilyMemberEmitTargetAndPayloadSchema: SpruceSchemas.Eightbitstories.v2024_09_19.DeleteFamilyMemberEmitTargetAndPayloadSchema  = {
	id: 'deleteFamilyMemberEmitTargetAndPayload',
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
	                options: {schema: deleteFamilyMemberEmitTargetSchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteFamilyMemberEmitTargetAndPayloadSchema)

export default deleteFamilyMemberEmitTargetAndPayloadSchema

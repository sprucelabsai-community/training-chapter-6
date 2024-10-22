import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import familySourceSchema_v2024_09_19 from '#spruce/schemas/eightbitstories/v2024_09_19/familySource.schema'

const familySchema: SpruceSchemas.Eightbitstories.v2024_09_19.FamilySchema  = {
	id: 'family',
	version: 'v2024_09_19',
	namespace: 'Eightbitstories',
	name: 'Family',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** Family Name. */
	            'name': {
	                label: 'Family Name',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Family Values. */
	            'values': {
	                label: 'Family Values',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'source': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: familySourceSchema_v2024_09_19,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(familySchema)

export default familySchema

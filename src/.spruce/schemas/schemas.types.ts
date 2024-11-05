/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'

import '@sprucelabs/spruce-event-utils'
import { SkillViewControllerId } from '@sprucelabs/heartwood-view-controllers'

declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface DidRegisterSkillViewsEmitTarget {
			
				
				'personId': string
		}

		interface DidRegisterSkillViewsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didRegisterSkillViewsEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DidRegisterSkillViewsEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface DidRegisterSkillViewsEmitPayload {
			
				/** View namespace. */
				'namespace': string
		}

		interface DidRegisterSkillViewsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didRegisterSkillViewsEmitPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** View namespace. */
			            'namespace': {
			                label: 'View namespace',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DidRegisterSkillViewsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface DidRegisterSkillViewsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitTarget
				
				'payload': SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitPayload
		}

		interface DidRegisterSkillViewsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didRegisterSkillViewsEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitPayloadSchema,}
			            },
			    }
		}

		interface DidRegisterSkillViewsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlEmitTarget {
			
				/** Skill View Id. */
				'skillViewId'?: (SkillViewControllerId)| undefined | null
		}

		interface GenerateUrlEmitTargetSchema extends SpruceSchema.Schema {
			id: 'generateUrlEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			importsWhenRemote: ['import { SkillViewControllerId } from \'@sprucelabs/heartwood-view-controllers\'',],
			    fields: {
			            /** Skill View Id. */
			            'skillViewId': {
			                label: 'Skill View Id',
			                type: 'raw',
			                options: {valueType: `SkillViewControllerId`,}
			            },
			    }
		}

		interface GenerateUrlEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlEmitPayload {
			
				/** Load args. */
				'args'?: (Record<string, any>)| undefined | null
		}

		interface GenerateUrlEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'generateUrlEmitPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Load args. */
			            'args': {
			                label: 'Load args',
			                type: 'raw',
			                options: {valueType: `Record<string, any>`,}
			            },
			    }
		}

		interface GenerateUrlEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitPayload| undefined | null
		}

		interface GenerateUrlEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'generateUrlEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitPayloadSchema,}
			            },
			    }
		}

		interface GenerateUrlEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlResponsePayload {
			
				/** Url. */
				'url': string
		}

		interface GenerateUrlResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'generateUrlResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Url. */
			            'url': {
			                label: 'Url',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GenerateUrlResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetActiveThemeEmitTarget {
			
				
				'organizationId': string
		}

		interface GetActiveThemeEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getActiveThemeEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetActiveThemeEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetActiveThemeEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeEmitTarget
		}

		interface GetActiveThemeEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getActiveThemeEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeEmitTargetSchema,}
			            },
			    }
		}

		interface GetActiveThemeEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetViewControllersEmitTarget {
			
				
				'namespace': string
		}

		interface GetViewControllersEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getViewControllersEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'namespace': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetViewControllersEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetViewControllersEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetSkillViewsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Heartwood.v2021_02_11.GetViewControllersEmitTarget
		}

		interface GetSkillViewsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillViewsEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.GetViewControllersEmitTargetSchema,}
			            },
			    }
		}

		interface GetSkillViewsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetSkillViewsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetSkillViewsResponsePayload {
			
				
				'id': string
				
				'ids': string[]
				
				'source'?: string| undefined | null
				
				'sourceUrl'?: string| undefined | null
				
				'theme'?: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Theme| undefined | null
		}

		interface GetSkillViewsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillViewsResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'ids': {
			                type: 'text',
			                isRequired: true,
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'source': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'sourceUrl': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'theme': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface GetSkillViewsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetSkillViewsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface ListViewsResult {
			
				
				'namespace': string
				/** Skill view ids. For now this is every view, but soon will be only skill views */
				'svcIds': string[]
				/** View ids. For now this is every view, but soon will be only views (not skill views) */
				'vcIds': string[]
		}

		interface ListViewsResultSchema extends SpruceSchema.Schema {
			id: 'listViewsResult',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'namespace': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Skill view ids. For now this is every view, but soon will be only skill views */
			            'svcIds': {
			                label: 'Skill view ids',
			                type: 'id',
			                isRequired: true,
			                hint: 'For now this is every view, but soon will be only skill views',
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** View ids. For now this is every view, but soon will be only views (not skill views) */
			            'vcIds': {
			                label: 'View ids',
			                type: 'id',
			                isRequired: true,
			                hint: 'For now this is every view, but soon will be only views (not skill views)',
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			    }
		}

		interface ListViewsResultEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.ListViewsResultSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface ListViewsResponsePayload {
			
				
				'views': SpruceSchemas.Heartwood.v2021_02_11.ListViewsResult[]
		}

		interface ListViewsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listViewsResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'views': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ListViewsResultSchema,}
			            },
			    }
		}

		interface ListViewsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.ListViewsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterDashboardCardsResponsePayload {
			
				
				'vcIds': string[]
		}

		interface RegisterDashboardCardsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerDashboardCardsResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'vcIds': {
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			    }
		}

		interface RegisterDashboardCardsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterDashboardCardsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterSkillViewsEmitPayload {
			
				
				'ids': string[]
				
				'source'?: string| undefined | null
				
				'sourceUrl'?: string| undefined | null
				
				'theme'?: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Theme| undefined | null
		}

		interface RegisterSkillViewsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillViewsEmitPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'ids': {
			                type: 'text',
			                isRequired: true,
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'source': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'sourceUrl': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'theme': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface RegisterSkillViewsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterSkillViewsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitPayload
		}

		interface RegisterSkillViewsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillViewsEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitPayloadSchema,}
			            },
			    }
		}

		interface RegisterSkillViewsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterSkillViewsResponsePayload {
			
				/** . Views that were registered. Will match the number of ids you sent. */
				'totalRegistered': number
		}

		interface RegisterSkillViewsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillViewsResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . Views that were registered. Will match the number of ids you sent. */
			            'totalRegistered': {
			                type: 'number',
			                isRequired: true,
			                hint: 'Views that were registered. Will match the number of ids you sent.',
			                options: undefined
			            },
			    }
		}

		interface RegisterSkillViewsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface UpsertThemeEmitTarget {
			
				
				'organizationId': string
		}

		interface UpsertThemeEmitTargetSchema extends SpruceSchema.Schema {
			id: 'upsertThemeEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpsertThemeEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface UpsertThemeEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitTarget
				
				'payload': SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitPayload
		}

		interface UpsertThemeEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'upsertThemeEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitPayloadSchema,}
			            },
			    }
		}

		interface UpsertThemeEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface Theme {
			
				
				'slug': string
				
				'name': string
				
				'props': SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemeProps
		}

		interface ThemeSchema extends SpruceSchema.Schema {
			id: 'theme',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Theme',
			    fields: {
			            /** . */
			            'slug': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'name': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'props': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemePropsSchema,}
			            },
			    }
		}

		interface ThemeEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.ThemeSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetActiveThemeResponsePayload {
			
				
				'theme'?: SpruceSchemas.Heartwood.v2021_02_11.Theme| undefined | null
		}

		interface GetActiveThemeResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getActiveThemeResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'theme': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface GetActiveThemeResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface UpsertThemeResponsePayload {
			
				
				'theme': SpruceSchemas.Heartwood.v2021_02_11.Theme
		}

		interface UpsertThemeResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'upsertThemeResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'theme': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface UpsertThemeResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface UpsertThemeEmitPayload {
			
				
				'theme': SpruceSchemas.Heartwood.v2021_02_11.Theme
		}

		interface UpsertThemeEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'upsertThemeEmitPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'theme': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface UpsertThemeEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface SaveFamilyEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Eightbitstories.v2024_09_19.SaveFamilyEmitPayload
		}

		interface SaveFamilyEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'saveFamilyEmitTargetAndPayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.SaveFamilyEmitPayloadSchema,}
			            },
			    }
		}

		interface SaveFamilyEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.SaveFamilyEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface CreateFamily {
			
				/** Family Name. */
				'name': string
				/** Family Values. */
				'values': string
		}

		interface CreateFamilySchema extends SpruceSchema.Schema {
			id: 'createFamily',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
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
			    }
		}

		interface CreateFamilyEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilySchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface SaveFamilyEmitPayload {
			
				
				'family': SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamily
		}

		interface SaveFamilyEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'saveFamilyEmitPayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'family': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilySchema,}
			            },
			    }
		}

		interface SaveFamilyEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.SaveFamilyEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface SaveFamilyResponsePayload {
			
				
				'family': SpruceSchemas.Eightbitstories.v2024_09_19.Family
		}

		interface SaveFamilyResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'saveFamilyResponsePayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'family': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.FamilySchema,}
			            },
			    }
		}

		interface SaveFamilyResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.SaveFamilyResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface GetFamilyResponsePayload {
			
				
				'family'?: SpruceSchemas.Eightbitstories.v2024_09_19.Family| undefined | null
		}

		interface GetFamilyResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getFamilyResponsePayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'family': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.FamilySchema,}
			            },
			    }
		}

		interface GetFamilyResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.GetFamilyResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface CreateFamilyMemberEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilyMemberEmitPayload
		}

		interface CreateFamilyMemberEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createFamilyMemberEmitTargetAndPayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilyMemberEmitPayloadSchema,}
			            },
			    }
		}

		interface CreateFamilyMemberEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilyMemberEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface CreateFamilyMember {
			
				/** Name. */
				'name': string
				/** Bio. */
				'bio': string
		}

		interface CreateFamilyMemberSchema extends SpruceSchema.Schema {
			id: 'createFamilyMember',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Bio. */
			            'bio': {
			                label: 'Bio',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CreateFamilyMemberEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilyMemberSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface CreateFamilyMemberEmitPayload {
			
				
				'familyMember': SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilyMember
		}

		interface CreateFamilyMemberEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createFamilyMemberEmitPayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMember': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilyMemberSchema,}
			            },
			    }
		}

		interface CreateFamilyMemberEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilyMemberEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface CreateFamilyMemberResponsePayload {
			
				
				'familyMember': SpruceSchemas.Eightbitstories.v2024_09_19.PublicFamilyMember
		}

		interface CreateFamilyMemberResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createFamilyMemberResponsePayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMember': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.PublicFamilyMemberSchema,}
			            },
			    }
		}

		interface CreateFamilyMemberResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilyMemberResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface SubmitFeedbackEmitPayload {
			
				
				'feedback': string
		}

		interface SubmitFeedbackEmitPayloadSchema extends SpruceSchema.Schema {
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

		interface SubmitFeedbackEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.SubmitFeedbackEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface SubmitFeedbackEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Eightbitstories.v2024_09_19.SubmitFeedbackEmitPayload
		}

		interface SubmitFeedbackEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'submitFeedbackEmitTargetAndPayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.SubmitFeedbackEmitPayloadSchema,}
			            },
			    }
		}

		interface SubmitFeedbackEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.SubmitFeedbackEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface SubmitFeedbackResponsePayload {
			
				
				'success': boolean
		}

		interface SubmitFeedbackResponsePayloadSchema extends SpruceSchema.Schema {
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

		interface SubmitFeedbackResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.SubmitFeedbackResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface GetFamilyMemberEmitTarget {
			
				
				'familyMemberId': string
		}

		interface GetFamilyMemberEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getFamilyMemberEmitTarget',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMemberId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetFamilyMemberEmitTargetEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.GetFamilyMemberEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface GetFamilyMemberEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Eightbitstories.v2024_09_19.GetFamilyMemberEmitTarget
		}

		interface GetFamilyMemberEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getFamilyMemberEmitTargetAndPayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.GetFamilyMemberEmitTargetSchema,}
			            },
			    }
		}

		interface GetFamilyMemberEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.GetFamilyMemberEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface DeleteFamilyMemberEmitTarget {
			
				
				'familyMemberId': string
		}

		interface DeleteFamilyMemberEmitTargetSchema extends SpruceSchema.Schema {
			id: 'deleteFamilyMemberEmitTarget',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMemberId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DeleteFamilyMemberEmitTargetEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.DeleteFamilyMemberEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface DeleteFamilyMemberEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Eightbitstories.v2024_09_19.DeleteFamilyMemberEmitTarget
		}

		interface DeleteFamilyMemberEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteFamilyMemberEmitTargetAndPayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.DeleteFamilyMemberEmitTargetSchema,}
			            },
			    }
		}

		interface DeleteFamilyMemberEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.DeleteFamilyMemberEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface DeleteFamilyMemberResponsePayload {
			
				
				'success': boolean
		}

		interface DeleteFamilyMemberResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteFamilyMemberResponsePayload',
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

		interface DeleteFamilyMemberResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.DeleteFamilyMemberResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface ListFamilyMembersResponsePayload {
			
				
				'familyMembers': SpruceSchemas.Eightbitstories.v2024_09_19.PublicFamilyMember[]
		}

		interface ListFamilyMembersResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listFamilyMembersResponsePayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMembers': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.PublicFamilyMemberSchema,}
			            },
			    }
		}

		interface ListFamilyMembersResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.ListFamilyMembersResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface DidGenerateStoryEmitTarget {
			
				
				'personId': string
		}

		interface DidGenerateStoryEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didGenerateStoryEmitTarget',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DidGenerateStoryEmitTargetEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.DidGenerateStoryEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface DidGenerateStoryEmitPayload {
			
				
				'storyId': string
		}

		interface DidGenerateStoryEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didGenerateStoryEmitPayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'storyId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DidGenerateStoryEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.DidGenerateStoryEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface DidGenerateStoryEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Eightbitstories.v2024_09_19.DidGenerateStoryEmitTarget
				
				'payload': SpruceSchemas.Eightbitstories.v2024_09_19.DidGenerateStoryEmitPayload
		}

		interface DidGenerateStoryEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didGenerateStoryEmitTargetAndPayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.DidGenerateStoryEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.DidGenerateStoryEmitPayloadSchema,}
			            },
			    }
		}

		interface DidGenerateStoryEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.DidGenerateStoryEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface UpdateFamilyMemberEmitTarget {
			
				
				'familyMemberId': string
		}

		interface UpdateFamilyMemberEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateFamilyMemberEmitTarget',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMemberId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpdateFamilyMemberEmitTargetEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface UpdateFamilyMember {
			
				/** Name. */
				'name'?: string| undefined | null
				/** Bio. */
				'bio'?: string| undefined | null
		}

		interface UpdateFamilyMemberSchema extends SpruceSchema.Schema {
			id: 'updateFamilyMember',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                options: undefined
			            },
			            /** Bio. */
			            'bio': {
			                label: 'Bio',
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface UpdateFamilyMemberEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface UpdateFamilyMemberEmitPayload {
			
				
				'familyMember': SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMember
		}

		interface UpdateFamilyMemberEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateFamilyMemberEmitPayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMember': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberSchema,}
			            },
			    }
		}

		interface UpdateFamilyMemberEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface UpdateFamilyMemberEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberEmitTarget
				
				'payload': SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberEmitPayload
		}

		interface UpdateFamilyMemberEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateFamilyMemberEmitTargetAndPayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberEmitPayloadSchema,}
			            },
			    }
		}

		interface UpdateFamilyMemberEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface UpdateFamilyMemberResponsePayload {
			
				
				'familyMember': SpruceSchemas.Eightbitstories.v2024_09_19.PublicFamilyMember
		}

		interface UpdateFamilyMemberResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateFamilyMemberResponsePayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMember': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.PublicFamilyMemberSchema,}
			            },
			    }
		}

		interface UpdateFamilyMemberResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface GenerateStoryEmitPayload {
			
				
				'storyElements': string[]
				
				'familyMembers': string[]
				
				'currentChallenge'?: string| undefined | null
		}

		interface GenerateStoryEmitPayloadSchema extends SpruceSchema.Schema {
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

		interface GenerateStoryEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.GenerateStoryEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface GenerateStoryEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Eightbitstories.v2024_09_19.GenerateStoryEmitPayload
		}

		interface GenerateStoryEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'generateStoryEmitTargetAndPayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.GenerateStoryEmitPayloadSchema,}
			            },
			    }
		}

		interface GenerateStoryEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.GenerateStoryEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface DidFailToGenerateStoryEmitTarget {
			
				
				'personId': string
		}

		interface DidFailToGenerateStoryEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didFailToGenerateStoryEmitTarget',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DidFailToGenerateStoryEmitTargetEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.DidFailToGenerateStoryEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface DidFailToGenerateStoryEmitPayload {
			
				
				'errorMessage': string
		}

		interface DidFailToGenerateStoryEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didFailToGenerateStoryEmitPayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'errorMessage': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DidFailToGenerateStoryEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.DidFailToGenerateStoryEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface DidFailToGenerateStoryEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Eightbitstories.v2024_09_19.DidFailToGenerateStoryEmitTarget
				
				'payload': SpruceSchemas.Eightbitstories.v2024_09_19.DidFailToGenerateStoryEmitPayload
		}

		interface DidFailToGenerateStoryEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didFailToGenerateStoryEmitTargetAndPayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.DidFailToGenerateStoryEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.DidFailToGenerateStoryEmitPayloadSchema,}
			            },
			    }
		}

		interface DidFailToGenerateStoryEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.DidFailToGenerateStoryEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface PublicFamilyMember {
			
				
				'id': string
				/** Name. */
				'name': string
				/** Bio. */
				'bio': string
		}

		interface PublicFamilyMemberSchema extends SpruceSchema.Schema {
			id: 'publicFamilyMember',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: 'Public family member',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Bio. */
			            'bio': {
			                label: 'Bio',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface PublicFamilyMemberEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.PublicFamilyMemberSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface GetFamilyMemberResponsePayload {
			
				
				'familyMember': SpruceSchemas.Eightbitstories.v2024_09_19.PublicFamilyMember
		}

		interface GetFamilyMemberResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getFamilyMemberResponsePayload',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMember': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.PublicFamilyMemberSchema,}
			            },
			    }
		}

		interface GetFamilyMemberResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.GetFamilyMemberResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface FamilyMemberSource {
			
				
				'personId': string
		}

		interface FamilyMemberSourceSchema extends SpruceSchema.Schema {
			id: 'familyMemberSource',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface FamilyMemberSourceEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.FamilyMemberSourceSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface FamilyMember {
			
				
				'id': string
				/** Name. */
				'name': string
				/** Bio. */
				'bio': string
				
				'source': SpruceSchemas.Eightbitstories.v2024_09_19.FamilyMemberSource
		}

		interface FamilyMemberSchema extends SpruceSchema.Schema {
			id: 'familyMember',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: 'Family Member',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Bio. */
			            'bio': {
			                label: 'Bio',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'source': {
			                type: 'schema',
			                isPrivate: true,
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.FamilyMemberSourceSchema,}
			            },
			    }
		}

		interface FamilyMemberEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.FamilyMemberSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface FamilySource {
			
				
				'personId': string
		}

		interface FamilySourceSchema extends SpruceSchema.Schema {
			id: 'familySource',
			version: 'v2024_09_19',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface FamilySourceEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.FamilySourceSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2024_09_19 {

		
		interface Family {
			
				
				'id': string
				/** Family Name. */
				'name': string
				/** Family Values. */
				'values': string
				
				'source': SpruceSchemas.Eightbitstories.v2024_09_19.FamilySource
		}

		interface FamilySchema extends SpruceSchema.Schema {
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
			                options: {schema: SpruceSchemas.Eightbitstories.v2024_09_19.FamilySourceSchema,}
			            },
			    }
		}

		interface FamilyEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2024_09_19.FamilySchema> {}

	}

}

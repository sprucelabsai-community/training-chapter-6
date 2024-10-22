import { default as SchemaEntity } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'





export declare namespace SpruceErrors.Eightbitstories {

	
	export interface FamilyMemberNotFound {
		
			
			'familyMemberId': string
	}

	export interface FamilyMemberNotFoundSchema extends SpruceSchema.Schema {
		id: 'familyMemberNotFound',
		namespace: 'Eightbitstories',
		name: 'Family member not found',
		    fields: {
		            /** . */
		            'familyMemberId': {
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		    }
	}

	export type FamilyMemberNotFoundEntity = SchemaEntity<SpruceErrors.Eightbitstories.FamilyMemberNotFoundSchema>

}





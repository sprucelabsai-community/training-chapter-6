import { SpruceErrors } from "#spruce/errors/errors.types"
import { ErrorOptions as ISpruceErrorOptions} from "@sprucelabs/error"

export interface FamilyMemberNotFoundErrorOptions extends SpruceErrors.Eightbitstories.FamilyMemberNotFound, ISpruceErrorOptions {
	code: 'FAMILY_MEMBER_NOT_FOUND'
}

type ErrorOptions =  | FamilyMemberNotFoundErrorOptions 

export default ErrorOptions

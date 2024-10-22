import { SchemaError } from '@sprucelabs/schema'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'

export default async (_event: SpruceEvent): SpruceEventResponse => {
    if (!process.env.FEEDBACK_PHONE) {
        throw new SchemaError({
            code: 'MISSING_PARAMETERS',
            parameters: ['env.FEEDBACK_PHONE'],
            friendlyMessage: `You have to set FEEDBACK_PHONE in your skill's .env to boot!`,
        })
    }
}

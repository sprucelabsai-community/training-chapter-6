import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'

import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent
): SpruceEventResponse<ResponsePayload> => {
    const { stores, source } = event
    const { personId } = source

    const families = await stores.getStore('families')
    const match = await families.findOne({
        'source.personId': personId,
    })

    return {
        family: match,
    }
}

type ResponsePayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.GetFamilyResponsePayload

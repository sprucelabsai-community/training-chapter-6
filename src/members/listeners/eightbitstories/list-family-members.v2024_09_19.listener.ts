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

    const familyMembers = await stores.getStore('familyMembers')
    const all = await familyMembers.find({
        //@ts-ignore
        'source.personId': personId,
    })

    return {
        familyMembers: all,
    }
}

type ResponsePayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.ListFamilyMembersResponsePayload

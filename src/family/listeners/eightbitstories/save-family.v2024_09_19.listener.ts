import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { stores, payload, source } = event
    const { family } = payload
    const { name, values } = family
    const { personId } = source

    const families = await stores.getStore('families')
    const created = await families.upsertOne(
        {
            'source.personId': personId,
        },
        {
            name,
            values,
            source: {
                personId: personId!,
            },
        }
    )

    return {
        family: created,
    }
}

type EmitPayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.SaveFamilyEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.SaveFamilyResponsePayload

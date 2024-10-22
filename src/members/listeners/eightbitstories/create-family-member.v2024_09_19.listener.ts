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
    const { personId } = source
    const { familyMember } = payload
    const { name, bio } = familyMember

    const familyMembers = await stores.getStore('familyMembers')
    const created = await familyMembers.createOne({
        name,
        bio,
        source: {
            personId: personId!,
        },
    })

    return {
        familyMember: created,
    }
}

type EmitPayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilyMemberEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilyMemberResponsePayload

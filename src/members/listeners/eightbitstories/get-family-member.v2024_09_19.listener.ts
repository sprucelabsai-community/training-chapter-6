import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import SpruceError from '#spruce/../errors/SpruceError'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { target, stores, source } = event
    const { familyMemberId } = target
    const { personId } = source

    const familyMembers = await stores.getStore('familyMembers')
    const match = await familyMembers.findOne({
        id: familyMemberId,
        //@ts-ignore
        'source.personId': personId,
    })

    if (!match) {
        throw new SpruceError({
            code: 'FAMILY_MEMBER_NOT_FOUND',
            familyMemberId,
        })
    }

    return {
        familyMember: match,
    }
}

type EmitPayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.GetFamilyMemberEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.GetFamilyMemberResponsePayload

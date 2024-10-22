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
    const { personId } = source
    const { familyMemberId } = target

    const familyMembers = await stores.getStore('familyMembers')
    const totalDeleted = await familyMembers.delete({
        id: familyMemberId,
        //@ts-ignore
        'source.personId': personId,
    })
    if (totalDeleted === 0) {
        throw new SpruceError({
            code: 'FAMILY_MEMBER_NOT_FOUND',
            familyMemberId,
        })
    }

    return {
        success: true,
    }
}

type EmitPayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.DeleteFamilyMemberEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.DeleteFamilyMemberResponsePayload

import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { PublicFamilyMember } from '../../../eightbitstories.types'
import SpruceError from '../../../errors/SpruceError'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { target, stores, payload, log, source } = event
    const { personId } = source
    const { familyMemberId } = target
    const { familyMember } = payload

    const familyMembers = await stores.getStore('familyMembers')
    let match: PublicFamilyMember | undefined

    try {
        match = await familyMembers.updateOne(
            {
                id: familyMemberId,
                'source.personId': personId,
            },
            {
                ...familyMember,
            }
        )
    } catch (err: any) {
        log.error(
            'failed to update family member',
            familyMemberId,
            JSON.stringify(familyMember),
            err
        )
    }

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
    SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberResponsePayload

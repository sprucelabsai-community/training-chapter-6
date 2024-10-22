import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { payload, source, connectToApiAsSkill } = event
    const { feedback } = payload
    const { personId } = source

    const client = await connectToApiAsSkill()

    const [{ person }] = await client.emitAndFlattenResponses(
        'get-person::v2020_12_25',
        {
            target: {
                personId,
            },
        }
    )

    await client.emitAndFlattenResponses('send-message::v2020_12_25', {
        target: {
            phone: process.env.FEEDBACK_PHONE,
        },
        payload: {
            message: {
                body: 'Feedback Alert!! {{fromName}} gave you some feedback about 8-bit Stories: {{feedback}}',
                classification: 'transactional',
                context: {
                    feedback,
                    fromName: person.casualName,
                },
            },
        },
    })

    return {
        success: true,
    }
}

type EmitPayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.SubmitFeedbackEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.SubmitFeedbackResponsePayload

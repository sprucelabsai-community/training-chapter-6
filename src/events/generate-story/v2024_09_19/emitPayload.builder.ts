import { buildSchema } from '@sprucelabs/schema'

const generateStoryEmitPayloadBuilder = buildSchema({
    id: 'generateStoryEmitPayload',
    fields: {
        storyElements: {
            type: 'text',
            isArray: true,
            isRequired: true,
        },
        familyMembers: {
            type: 'id',
            isArray: true,
            isRequired: true,
        },
        currentChallenge: {
            type: 'text',
        },
    },
})

export default generateStoryEmitPayloadBuilder

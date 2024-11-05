import { EventFeatureListener } from '@sprucelabs/spruce-event-utils'

const listeners: EventFeatureListener[] = [
    {
        eventName: 'did-boot',
        eventNamespace: 'skill',
        version: 'v2024_09_19',
        callback: require('../../listeners/skill/did-boot.v2024_09_19.listener').default,
        isGlobal: require('../../listeners/skill/did-boot.v2024_09_19.listener').isGlobal,
    },
    {
        eventName: 'get-family',
        eventNamespace: 'eightbitstories',
        version: 'v2024_09_19',
        callback: require('../../family/listeners/eightbitstories/get-family.v2024_09_19.listener').default,
        isGlobal: require('../../family/listeners/eightbitstories/get-family.v2024_09_19.listener').isGlobal,
    },
    {
        eventName: 'save-family',
        eventNamespace: 'eightbitstories',
        version: 'v2024_09_19',
        callback: require('../../family/listeners/eightbitstories/save-family.v2024_09_19.listener').default,
        isGlobal: require('../../family/listeners/eightbitstories/save-family.v2024_09_19.listener').isGlobal,
    },
    {
        eventName: 'submit-feedback',
        eventNamespace: 'eightbitstories',
        version: 'v2024_09_19',
        callback: require('../../family/listeners/eightbitstories/submit-feedback.v2024_09_19.listener').default,
        isGlobal: require('../../family/listeners/eightbitstories/submit-feedback.v2024_09_19.listener').isGlobal,
    },
    {
        eventName: 'create-family-member',
        eventNamespace: 'eightbitstories',
        version: 'v2024_09_19',
        callback: require('../../members/listeners/eightbitstories/create-family-member.v2024_09_19.listener').default,
        isGlobal: require('../../members/listeners/eightbitstories/create-family-member.v2024_09_19.listener').isGlobal,
    },
    {
        eventName: 'delete-family-member',
        eventNamespace: 'eightbitstories',
        version: 'v2024_09_19',
        callback: require('../../members/listeners/eightbitstories/delete-family-member.v2024_09_19.listener').default,
        isGlobal: require('../../members/listeners/eightbitstories/delete-family-member.v2024_09_19.listener').isGlobal,
    },
    {
        eventName: 'get-family-member',
        eventNamespace: 'eightbitstories',
        version: 'v2024_09_19',
        callback: require('../../members/listeners/eightbitstories/get-family-member.v2024_09_19.listener').default,
        isGlobal: require('../../members/listeners/eightbitstories/get-family-member.v2024_09_19.listener').isGlobal,
    },
    {
        eventName: 'list-family-members',
        eventNamespace: 'eightbitstories',
        version: 'v2024_09_19',
        callback: require('../../members/listeners/eightbitstories/list-family-members.v2024_09_19.listener').default,
        isGlobal: require('../../members/listeners/eightbitstories/list-family-members.v2024_09_19.listener').isGlobal,
    },
    {
        eventName: 'update-family-member',
        eventNamespace: 'eightbitstories',
        version: 'v2024_09_19',
        callback: require('../../members/listeners/eightbitstories/update-family-member.v2024_09_19.listener').default,
        isGlobal: require('../../members/listeners/eightbitstories/update-family-member.v2024_09_19.listener').isGlobal,
    },
    {
        eventName: 'generate-story',
        eventNamespace: 'eightbitstories',
        version: 'v2024_09_19',
        callback: require('../../stories/listeners/eightbitstories/generate-story.v2024_09_19.listener').default,
        isGlobal: require('../../stories/listeners/eightbitstories/generate-story.v2024_09_19.listener').isGlobal,
    },
]

export default listeners

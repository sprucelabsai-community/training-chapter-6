import { buildPermissionContract } from '@sprucelabs/mercury-types'

const eightbitstoriesPermissions = buildPermissionContract({
    id: 'eightbitstories',
    name: '8-bit Stories',
    description: '',
    requireAllPermissions: false,
    permissions: [
        {
            id: 'can-submit-feedback',
            name: 'Can submit feedback',
            defaults: {
                loggedIn: {
                    default: true,
                },
            },
        },
        {
            id: 'can-manage-family',
            name: 'Can manage family',
            description:
                'Can this person manage their family name, values, members, etc.',
            defaults: {
                loggedIn: {
                    default: true,
                },
            },
        },
        {
            id: 'can-generate-story',
            name: 'Can generate bedtime story',
            defaults: {
                loggedIn: {
                    default: true,
                },
            },
        },
    ],
})

export default eightbitstoriesPermissions

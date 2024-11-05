import {
    eventFaker,
    fake,
    SpruceSchemas,
} from '@sprucelabs/spruce-test-fixtures'
import { generateId } from '@sprucelabs/test-utils'
import { Family, PublicFamilyMember } from '../../eightbitstories.types'

export default class EventFaker {
    public async fakeDidFailToGenerateStory(
        cb?: (targetAndPayload: DidFailTargetAndPayload) => void
    ) {
        await eventFaker.on(
            'eightbitstories.did-fail-to-generate-story::v2024_09_19',
            (targetAndPayload) => {
                cb?.(targetAndPayload)
            }
        )
    }
    public async fakeDidGenerateStory(
        cb?: (targetAndPayload: DidGenerateTargetAndPayload) => void
    ) {
        await eventFaker.on(
            'eightbitstories.did-generate-story::v2024_09_19',
            (targetAndPayload) => {
                cb?.(targetAndPayload)
            }
        )
    }
    public async fakeGenerateStory(
        cb?: (targetAndPayload: GenerateStoryTargetAndPayload) => void
    ) {
        await eventFaker.on(
            'eightbitstories.generate-story::v2024_09_19',
            (targetAndPayload) => {
                cb?.(targetAndPayload)
            }
        )
    }
    public async fakeUpdateFamilyMember(
        cb?: (targetAndPayload: UpdateFamilyMemberTargetAndPayload) => void
    ) {
        await eventFaker.on(
            'eightbitstories.update-family-member::v2024_09_19',
            (targetAndPayload) => {
                cb?.(targetAndPayload)
                return {
                    familyMember: this.generatePublicFamilyMemberValues(),
                }
            }
        )
    }

    public async fakeGetFamilyMember(
        cb?: (
            targetAndPayload: GetFamilyMemberTargetAndPayload
        ) => void | PublicFamilyMember
    ) {
        await eventFaker.on(
            'eightbitstories.get-family-member::v2024_09_19',
            (targetAndPayload) => {
                return {
                    familyMember:
                        cb?.(targetAndPayload) ??
                        this.generatePublicFamilyMemberValues(),
                }
            }
        )
    }
    public async fakeDeleteFamilyMember(
        cb?: (targetAndPayload: DeleteFamilyMemberTargetAndPayload) => void
    ) {
        await eventFaker.on(
            'eightbitstories.delete-family-member::v2024_09_19',
            (targetAndPayload) => {
                cb?.(targetAndPayload)
                return {
                    success: true,
                }
            }
        )
    }
    public async fakeCreateFamilyMember(
        cb?: (targetAndPayload: CreateFamilyMemberTargetAndPayload) => void
    ) {
        await eventFaker.on(
            'eightbitstories.create-family-member::v2024_09_19',
            (targetAndPayload) => {
                cb?.(targetAndPayload)
                return {
                    familyMember: this.generatePublicFamilyMemberValues(),
                }
            }
        )
    }

    public async fakeListFamilyMembers(cb?: () => void | PublicFamilyMember[]) {
        await eventFaker.on(
            'eightbitstories.list-family-members::v2024_09_19',
            () => {
                return {
                    familyMembers: cb?.() ?? [],
                }
            }
        )
    }

    public generatePublicFamilyMemberValues(): PublicFamilyMember {
        return {
            id: generateId(),
            name: generateId(),
            bio: generateId(),
        }
    }

    public async fakeGetFamily(cb?: () => void | Family) {
        await eventFaker.on('eightbitstories.get-family::v2024_09_19', () => {
            return {
                family: cb?.() ?? this.generateFamilyRecordValues(),
            }
        })
    }

    public async fakeSaveFamily(
        cb?: (targetAndPayload: SaveFamilyTargetAndPayload) => void
    ) {
        await eventFaker.on(
            'eightbitstories.save-family::v2024_09_19',
            (targetAndPayload) => {
                cb?.(targetAndPayload)
                return {
                    family: this.generateFamilyRecordValues(),
                }
            }
        )
    }

    public generateFamilyRecordValues(): Family {
        return {
            id: generateId(),
            name: generateId(),
            values: generateId(),
            source: {
                personId: generateId(),
            },
        }
    }

    public async fakeGetPerson(
        cb?: (targetAndPayload: GetPersonTargetAndPayload) => void
    ) {
        await eventFaker.on('get-person::v2020_12_25', (targetAndPayload) => {
            cb?.(targetAndPayload)
            return {
                person: fake.getPerson(),
            }
        })
    }
    public async fakeSendMessage(
        cb?: (targetAndPayload: SendMessageTargetAndPayload) => void
    ) {
        await eventFaker.on('send-message::v2020_12_25', (targetAndPayload) => {
            cb?.(targetAndPayload)
            return {
                message: {
                    id: generateId(),
                    body: generateId(),
                    dateCreated: Date.now(),
                    classification: 'transactional' as const,
                    target: {},
                    source: {},
                },
            }
        })
    }

    public async fakeSubmitFeedback(
        cb?: (targetAndPayload: SubmitFeedbackTargetAndPayload) => void
    ) {
        await eventFaker.on(
            'eightbitstories.submit-feedback::v2024_09_19',
            (targetAndPayload) => {
                cb?.(targetAndPayload)
                return {
                    success: true,
                }
            }
        )
    }
}

type SubmitFeedbackTargetAndPayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.SubmitFeedbackEmitTargetAndPayload

export type SendMessageTargetAndPayload =
    SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitTargetAndPayload

export type GetPersonTargetAndPayload =
    SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitTargetAndPayload

export type SaveFamilyTargetAndPayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.SaveFamilyEmitTargetAndPayload

export type CreateFamilyMemberTargetAndPayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.CreateFamilyMemberEmitTargetAndPayload

export type DeleteFamilyMemberTargetAndPayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.DeleteFamilyMemberEmitTargetAndPayload

export type GetFamilyMemberTargetAndPayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.GetFamilyMemberEmitTargetAndPayload

export type UpdateFamilyMemberTargetAndPayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.UpdateFamilyMemberEmitTargetAndPayload

export type GenerateStoryTargetAndPayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.GenerateStoryEmitTargetAndPayload

export type DidGenerateTargetAndPayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.DidGenerateStoryEmitTargetAndPayload

export type DidFailTargetAndPayload =
    SpruceSchemas.Eightbitstories.v2024_09_19.DidFailToGenerateStoryEmitTargetAndPayload

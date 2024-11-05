import { SpruceSchemas } from '@sprucelabs/mercury-types'

export default class StoryGeneratorImpl implements StoryGenerator {
    public static Class?: new () => StoryGenerator

    public static Generator() {
        return new (this.Class ?? this)()
    }

    public async generate(_options: StoryGeneratorGenerateOptions) {
        return ''
    }
}

export interface StoryGenerator {
    generate(options: StoryGeneratorGenerateOptions): Promise<string>
}

export type StoryGeneratorGenerateOptions =
    SpruceSchemas.Eightbitstories.v2024_09_19.GenerateStoryEmitPayload

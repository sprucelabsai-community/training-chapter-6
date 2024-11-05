import FamilySkillViewController from '../../family/Family.svc'
import MembersSkillViewController from '../../members/Members.svc'
import RootSkillViewController from '../../skillViewControllers/Root.svc'
import GenerateSkillViewController from '../../stories/Generate.svc'
import ReadSkillViewController from '../../stories/Read.svc'
import FeedbackCardViewController from '../../feedback/FeedbackCard.vc'
import FamilyMemberFormCardViewController from '../../members/FamilyMemberFormCard.vc'
import CurrentChallengeCardViewController from '../../stories/CurrentChallengeCard.vc'
import FamilyMemberSelectCardViewController from '../../stories/FamilyMemberSelectCard.vc'
import StoryElementSelectCardViewController from '../../stories/StoryElementSelectCard.vc'

import '@sprucelabs/heartwood-view-controllers'

const vcs = {
    FamilySkillViewController,
    MembersSkillViewController,
    RootSkillViewController,
    GenerateSkillViewController,
    ReadSkillViewController,
    FeedbackCardViewController,
    FamilyMemberFormCardViewController,
    CurrentChallengeCardViewController,
    FamilyMemberSelectCardViewController,
    StoryElementSelectCardViewController,
}

export const pluginsByName = {
}

type LoadOptions<Args extends Record<string,any>[]> = Args[0]['args'] extends Record<string, any> ? Args[0]['args'] : Record<never, any>

declare module '@sprucelabs/heartwood-view-controllers/build/types/heartwood.types' {
	interface SkillViewControllerMap {
		'eightbitstories.family': FamilySkillViewController
		'eightbitstories.members': MembersSkillViewController
		'eightbitstories.root': RootSkillViewController
		'eightbitstories.generate': GenerateSkillViewController
		'eightbitstories.read': ReadSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'eightbitstories.family': LoadOptions<Parameters<FamilySkillViewController['load']>>
		'eightbitstories.members': LoadOptions<Parameters<MembersSkillViewController['load']>>
		'eightbitstories.root': LoadOptions<Parameters<RootSkillViewController['load']>>
		'eightbitstories.generate': LoadOptions<Parameters<GenerateSkillViewController['load']>>
		'eightbitstories.read': LoadOptions<Parameters<ReadSkillViewController['load']>>
	}

	interface ViewControllerMap {
		'eightbitstories.feedback-card': FeedbackCardViewController
		'eightbitstories.family-member-form-card': FamilyMemberFormCardViewController
		'eightbitstories.current-challenge-card': CurrentChallengeCardViewController
		'eightbitstories.family-member-select-card': FamilyMemberSelectCardViewController
		'eightbitstories.story-element-select-card': StoryElementSelectCardViewController
		'eightbitstories.family': FamilySkillViewController
		'eightbitstories.members': MembersSkillViewController
		'eightbitstories.root': RootSkillViewController
		'eightbitstories.generate': GenerateSkillViewController
		'eightbitstories.read': ReadSkillViewController
	}

    interface ViewControllerOptionsMap {
		'eightbitstories.feedback-card': ConstructorParameters<typeof FeedbackCardViewController>[0]
		'eightbitstories.family-member-form-card': ConstructorParameters<typeof FamilyMemberFormCardViewController>[0]
		'eightbitstories.current-challenge-card': ConstructorParameters<typeof CurrentChallengeCardViewController>[0]
		'eightbitstories.family-member-select-card': ConstructorParameters<typeof FamilyMemberSelectCardViewController>[0]
		'eightbitstories.story-element-select-card': ConstructorParameters<typeof StoryElementSelectCardViewController>[0]
	}

	interface ViewControllerPlugins {
	}
}

//@ts-ignore
if(typeof heartwood === 'function') { 
	//@ts-ignore
	heartwood(vcs, pluginsByName) 
}

export default vcs

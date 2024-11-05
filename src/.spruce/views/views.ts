import FamilySkillViewController from '../../family/Family.svc'
import MembersSkillViewController from '../../members/Members.svc'
import GenerateSkillViewController from '../../stories/Generate.svc'
import ReadSkillViewController from '../../stories/Read.svc'
import RootSkillViewController from '../../skillViewControllers/Root.svc'
import FeedbackCardViewController from '../../feedback/FeedbackCard.vc'
import FamilyMemberFormCardViewController from '../../members/FamilyMemberFormCard.vc'
import StoryElementsCardViewController from '../../stories/StoryElementsCard.vc'

import '@sprucelabs/heartwood-view-controllers'

const vcs = {
    FamilySkillViewController,
    MembersSkillViewController,
    GenerateSkillViewController,
    ReadSkillViewController,
    RootSkillViewController,
    FeedbackCardViewController,
    FamilyMemberFormCardViewController,
    StoryElementsCardViewController,
}

export const pluginsByName = {
}

type LoadOptions<Args extends Record<string,any>[]> = Args[0]['args'] extends Record<string, any> ? Args[0]['args'] : Record<never, any>

declare module '@sprucelabs/heartwood-view-controllers/build/types/heartwood.types' {
	interface SkillViewControllerMap {
		'eightbitstories.family': FamilySkillViewController
		'eightbitstories.members': MembersSkillViewController
		'eightbitstories.generate': GenerateSkillViewController
		'eightbitstories.read': ReadSkillViewController
		'eightbitstories.root': RootSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'eightbitstories.family': LoadOptions<Parameters<FamilySkillViewController['load']>>
		'eightbitstories.members': LoadOptions<Parameters<MembersSkillViewController['load']>>
		'eightbitstories.generate': LoadOptions<Parameters<GenerateSkillViewController['load']>>
		'eightbitstories.read': LoadOptions<Parameters<ReadSkillViewController['load']>>
		'eightbitstories.root': LoadOptions<Parameters<RootSkillViewController['load']>>
	}

	interface ViewControllerMap {
		'eightbitstories.feedback-card': FeedbackCardViewController
		'eightbitstories.family-member-form-card': FamilyMemberFormCardViewController
		'eightbitstories.story-elements-card': StoryElementsCardViewController
		'eightbitstories.family': FamilySkillViewController
		'eightbitstories.members': MembersSkillViewController
		'eightbitstories.generate': GenerateSkillViewController
		'eightbitstories.read': ReadSkillViewController
		'eightbitstories.root': RootSkillViewController
	}

    interface ViewControllerOptionsMap {
		'eightbitstories.feedback-card': ConstructorParameters<typeof FeedbackCardViewController>[0]
		'eightbitstories.family-member-form-card': ConstructorParameters<typeof FamilyMemberFormCardViewController>[0]
		'eightbitstories.story-elements-card': ConstructorParameters<typeof StoryElementsCardViewController>[0]
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

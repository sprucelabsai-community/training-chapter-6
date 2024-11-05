import MembersSkillViewController from '../../members/Members.svc'
import FamilySkillViewController from '../../family/Family.svc'
import GenerateSkillViewController from '../../skillViewControllers/Generate.svc'
import ReadSkillViewController from '../../skillViewControllers/Read.svc'
import RootSkillViewController from '../../skillViewControllers/Root.svc'
import FeedbackCardViewController from '../../feedback/FeedbackCard.vc'
import FamilyMemberFormCardViewController from '../../members/FamilyMemberFormCard.vc'
import StoryElementsCardViewController from '../../viewControllers/StoryElementsCard.vc'

import '@sprucelabs/heartwood-view-controllers'

const vcs = {
    MembersSkillViewController,
    FamilySkillViewController,
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
		'eightbitstories.members': MembersSkillViewController
		'eightbitstories.family': FamilySkillViewController
		'eightbitstories.generate': GenerateSkillViewController
		'eightbitstories.read': ReadSkillViewController
		'eightbitstories.root': RootSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'eightbitstories.members': LoadOptions<Parameters<MembersSkillViewController['load']>>
		'eightbitstories.family': LoadOptions<Parameters<FamilySkillViewController['load']>>
		'eightbitstories.generate': LoadOptions<Parameters<GenerateSkillViewController['load']>>
		'eightbitstories.read': LoadOptions<Parameters<ReadSkillViewController['load']>>
		'eightbitstories.root': LoadOptions<Parameters<RootSkillViewController['load']>>
	}

	interface ViewControllerMap {
		'eightbitstories.feedback-card': FeedbackCardViewController
		'eightbitstories.family-member-form-card': FamilyMemberFormCardViewController
		'eightbitstories.story-elements-card': StoryElementsCardViewController
		'eightbitstories.members': MembersSkillViewController
		'eightbitstories.family': FamilySkillViewController
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

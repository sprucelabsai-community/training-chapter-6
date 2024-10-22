import {
    interactor,
    ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { generateId } from '@sprucelabs/test-utils'
import { PublicFamilyMember } from '../../../eightbitstories.types'
import FamilyMemberFormCardViewController, {
    FamilyMemberFormCardOptions,
} from '../../../members/FamilyMemberFormCard.vc'

export default class SpyFamilyMemberFormCard extends FamilyMemberFormCardViewController {
    private memberFromConstructor?: PublicFamilyMember
    private wasLoaded = false

    public constructor(
        options: ViewControllerOptions & FamilyMemberFormCardOptions
    ) {
        super(options)
        this.memberFromConstructor = options.familyMember
    }

    public getFormVc() {
        return this.formVc
    }

    public getMemberPassedToConstructor() {
        return this.memberFromConstructor
    }

    public getWasLoaded(): boolean {
        return this.wasLoaded
    }

    public async fillOutForm() {
        const values = {
            name: generateId(),
            bio: generateId(),
        }

        await this.formVc.setValues(values)
        return values
    }

    public async load() {
        this.wasLoaded = true
        await super.load()
    }

    public async submit() {
        await interactor.submitForm(this.formVc)
    }

    public async fillOutFormAndSubmit() {
        await this.fillOutForm()
        await this.submit()
    }

    public async invokeCancelHandler() {
        await this.onCancelHandler?.()
    }

    public async invokeSubmitHandler() {
        await this.onSubmitHandler?.()
    }
}

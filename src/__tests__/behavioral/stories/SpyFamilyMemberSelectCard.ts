import FamilyMemberSelectCardViewController from '../../../stories/FamilyMemberSelectCard.vc'

export default class SpyFamilyMemberSelectCard extends FamilyMemberSelectCardViewController {
    public getFormVc() {
        return this.formVc
    }

    public getCardVc() {
        return this.cardVc
    }
}

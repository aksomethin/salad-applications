import { connect } from '../../../connect'
import { RootStore } from '../../../Store'
import { Account } from './components'

const mapStoreToProps = (store: RootStore): any => ({
  profile: store.profile.currentProfile,
  isUpdating: store.profile.isUpdating,
  onSend: store.profile.updateUsername,
})

export const AccountContainer = connect(mapStoreToProps, Account)

import { connect } from '../../connect'
import { RootStore } from '../../Store'
import { SettingsPage, MenuItem, MenuButton } from '../../components'
import { ReferralSettingsContainer } from './referral-views'
import { VaultListContainer } from '../vault-views'
import { AccountContainer } from './account-views'

const mapStoreToProps = (store: RootStore): any => {
  const menuItems: MenuItem[] = [
    { url: '/account/summary', text: 'Account', component: AccountContainer },
    { url: '/account/referrals', text: 'Referrals', component: ReferralSettingsContainer },
    { url: '/account/reward-vault', text: 'Reward Vault', component: VaultListContainer },
  ]

  const buttons: MenuButton[] = [
    { text: 'Log out', onClick: store.auth.logout },
    { text: 'Send Bug', onClick: store.ui.openNewBug },
  ]

  return {
    pageTitle: 'Account',
    onClose: () => store.ui.hideModal(),
    menuItems: menuItems,
    menuButtons: buttons,
  }
}

export const AccountSettingsContainer = connect(mapStoreToProps, SettingsPage)

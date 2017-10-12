import { observable } from 'mobx';

class AccountStore {
  @observable current = {
    id: localStorage.getItem('__CCM_ACCOUNT_ID')
  }
}


export default new AccountStore();
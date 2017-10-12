import { observable, action } from 'mobx';

const apiURL = `http://${process.env.REACT_APP_SERVER_URL}/api`

class AuthStore {
  @observable token = localStorage.getItem('__CCM_AUTH_TOKEN');
  @observable isAuthenticated = !(localStorage.getItem('__CCM_AUTH_TOKEN') === null);

  _saveSession(token, account) {
    this.token = token;
    localStorage.setItem('__CCM_AUTH_TOKEN', token)
    localStorage.setItem('__CCM_ACCOUNT_ID', account.id)
  }
  
  @action.bound
  async signup({ username, password }) {
    return fetch(`${apiURL}/account.create`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then(handleError)
    .then(res => res.json())
    .then(res => this._saveSession(res.token, res.account))
  }

  @action.bound
  async login({username, password}) {
    return fetch(`${apiURL}/account.login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then(handleError)
    .then(res => res.json())
    .then(res => {
      this._saveSession(res.token, res.account)
    })
  }
}



function handleError(res) {
  if (!res.ok) throw Error(res.status)
  return res
}

export default new AuthStore();
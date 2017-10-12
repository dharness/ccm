import { observable, action } from 'mobx';

const apiURL = 'http://138.197.151.119/api';

class AuthStore {
  @observable token = localStorage.getItem('__CCM_AUTH_TOKEN');
  @observable isAuthenticated = !(localStorage.getItem('__CCM_AUTH_TOKEN') === null);

  _saveToken(token) {
    this.token = token;
    localStorage.setItem('__CCM_AUTH_TOKEN', token)
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
    .then(({ token }) => this._saveToken(token) )
  }

  @action.bound
  async login({username, password}) {
    console.log(this)
    return fetch(`${apiURL}/account.login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then(handleError)
    .then(res => res.json())
    .then(({ token }) => this._saveToken(token) )
  }
}



function handleError(res) {
  if (!res.ok) throw Error(res.status)
  return res
}

export default new AuthStore();
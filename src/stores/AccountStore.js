import { observable, action } from 'mobx';

const apiURL = 'http://138.197.151.119/api';

class AccountStore {
  @observable token = localStorage.getItem('CCM_AUTH_TOKEN');
  
  @action signup({ username, password }) {
    return fetch(`${apiURL}/account.create`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then(handleError)
    .then(res => res.json())
    .then(({ token }) => token )
  }

  @action async login({username, password}) {
    return fetch(`${apiURL}/account.login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then(handleError)
    .then(res => res.json())
    .then(({ token }) => token )
  }
}



function handleError(res) {
  if (!res.ok) throw Error(res.status)
  return res
}

export default new AccountStore();
import { observable, action } from 'mobx';

const baseURL = 'http://138.197.151.119';

class AccountStore {
  @observable token = '';
  
  @action create({username, password}) {
    return fetch(`${baseURL}/accounts/signup`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then(handleError)
    .then(res => res.json())
  }
}

function handleError(res) {
  if (!res.ok) throw Error(res.status)
  return res
}

export default new AccountStore();
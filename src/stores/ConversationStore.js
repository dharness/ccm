import { observable, action } from 'mobx';
import auth from './Auth';


const MOCK_DATA = [];
const apiURL = 'http://138.197.151.119/api';

class ConversationStore {
	@observable all = [];
	@observable _activeConversationId = 0;

	load() {
    return fetch(`${apiURL}/conversations.list`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'token': auth.token
			}
		})
		.then(handleError)
		.then(res => res.json())
		.then(res => {
			this.all = res.conversations
		})
	}

	get activeConversationId() {
		return this._activeConversationId;
	}

	set activeConversationId(newId) {
		this._activeConversationId = newId;
	}
}

function handleError(res) {
  if (!res.ok) throw Error(res.status)
  return res
}

export default new ConversationStore();
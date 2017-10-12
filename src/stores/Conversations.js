import { observable } from 'mobx';
import auth from './Auth';
import accounts from './Accounts';
import messageBroker from './../services/MessageBroker'

const apiURL = `http://${process.env.REACT_APP_SERVER_URL}/api`;

class ConversationStore {
	@observable all = {};
	@observable _activeConversationId = null;

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
			const all = {}
			res.conversations.forEach(convo => {
				all[convo.id] = convo
			})
			this._activeConversationId = res.conversations[0].id
			this.all = all
		})
	}

	get current() {
		return this.all[this._activeConversationId]
	}

	addMessage(message) {
		messageBroker.sendMessage(message)
		this.current.messages = [...this.current.messages, message]
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
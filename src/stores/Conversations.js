import { observable } from 'mobx';
import auth from './Auth';
import account from './Accounts';
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
			res.conversations.forEach((convo, i) => {
				const conversationId = convo.members
				.filter(memberId => memberId !== account.current.id)
				.join('')
				convo.id = conversationId
				all[conversationId] = convo
				if (i === 0)
					this._activeConversationId = conversationId
			})
			this.all = all
		})
	}

	get current() {
		return this.all[this._activeConversationId]
	}

	addMessage(message) {
		this.current.messages = [...this.current.messages, message]
	}

	sendMessage(message) {
		messageBroker.sendMessage(message)
		this.addMessage(message)
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
import { observable, action } from 'mobx';
import MOCK_MESSAGES from './MOCK_MESSAGES'


class MessagesStore {
	@observable messageMap = {
    0: MOCK_MESSAGES.slice(0, 9),
    1: MOCK_MESSAGES.slice(20, 23),
    3: MOCK_MESSAGES,
    4: [],
    5: [],
    6: [],
  };

	@action getMessagesById(id) {
		return this.messageMap[id] || [];
	}
}

export default new MessagesStore();
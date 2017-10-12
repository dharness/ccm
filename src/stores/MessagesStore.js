import { observable, action } from 'mobx';
import MOCK_MESSAGES from './MOCK_MESSAGES'


class MessagesStore {
	@observable _messageMap = {
    0: MOCK_MESSAGES.slice(0, 9),
    1: MOCK_MESSAGES.slice(10, 19),
    2: MOCK_MESSAGES.slice(20, 23),
    3: MOCK_MESSAGES,
    4: [],
    5: [],
    6: [],
  };

  get messageMap () {
    return this._messageMap;
  }
  
  @action addMessage(conversationId, message) {
    this._messageMap[conversationId] = this._messageMap[conversationId].concat([message])
  }
}

export default new MessagesStore();
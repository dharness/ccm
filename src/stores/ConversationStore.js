import { observable, action } from 'mobx';


const MOCK_DATA = [
	{ id: 0, name: 'Naila Nur', lastActive: '1 minute', preview: 'yah i think so' },
	{ id: 1, name: '(519) 619-0770', lastActive: '13 minutes', preview: 'ive stopped studying a...' },
	{ id: 2, name: '+1 650-741-8697', lastActive: '1 hour', preview: 'https://www.sketchappsources.com...' },
	{ id: 3, name: '(519) 902-0012', lastActive: '14 hours', preview: 'lvl 14' },
	{ id: 4, name: 'Heather Booker', lastActive: 'Sep 14', preview: ':ok_hand: phew' },
	{ id: 5, name: 'Dan (Bidvine)', lastActive: '', preview: '' },
	{ id: 6, name: 'Sarah Swanson', lastActive: '', preview: '' },
];

class ConversationStore {
	@observable conversationList = MOCK_DATA;
	@observable _activeConversationId = 0;

	get all() {
		return this.conversationList;
	}

	get activeConversationId() {
		return this._activeConversationId;
	}

	set activeConversationId(newId) {
		this._activeConversationId = newId;
	}
}

export default new ConversationStore();
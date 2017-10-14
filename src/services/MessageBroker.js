import conversations from './../stores/Conversations'
const SOCKET_URL = `ws://${process.env.REACT_APP_SERVER_URL}`


class MessageBroker {

  connect(token) {
    this.client = new WebSocket(`${SOCKET_URL}?token=${token}`);
    
    this.client.onmessage = this.handleMessage
    this.client.onerror = err => console.log(err);
  }

  handleMessage({ data: rawData }) {
    const message = JSON.parse(rawData)
    conversations.receiveMessage(message)
  }

  sendMessage(message) {
    this.client.send(JSON.stringify(message))
  }

}

export default new MessageBroker()
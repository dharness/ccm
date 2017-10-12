import auth from './../stores/Auth'
const SOCKET_URL = `ws://${process.env.REACT_APP_SERVER_URL}`


class MessageBroker {

  constructor() {
    const { token } = auth
    this.client = new WebSocket(`${SOCKET_URL}?token=${token}`);
    this.client.onopen = () => {
      console.log(process.env)
    };
    this.client.onmessage = () => {
      console.log('onmessage')
    };

    // client.onerror = err => reject(err);
  }

  sendMessage(message) {
    this.client.send(JSON.stringify(message))
  }

}

export default new MessageBroker()
import React, { Component } from 'react'
import Header from './Header'
import MessageBuilder from './MessageBuilder'
import Messages from './Messages/Messages'
import styles from './../../styles/Conversation.css'
import { observer, inject } from 'mobx-react';
import messageBroker from './../../services/MessageBroker'


@inject('auth', 'account', 'conversations')
@observer class Conversation extends Component {

  componentDidMount() {
    messageBroker.connect(this.props.auth.token)
  }

  sendMessage(messageText) {
    const from = this.props.account.current.id;
    const to = this.props.conversations.current.id

    const messageToSend = {
      from,
      to,
      data: {
        type: 'text',
        body: messageText
      }
    }
    this.props.conversations.sendMessage(messageToSend)
  }

  render () {
    const currentConversation = this.props.conversations.current || {}
    return (
      <div className={styles.container}>
        <Header name={'Naila Nur'} phoneNumber={'(226) 224-8403'}/>
        <Messages messageList={currentConversation.messages} />
        <MessageBuilder onSubmit={this.sendMessage.bind(this)}/>
      </div>
    )
  }

}

export default Conversation
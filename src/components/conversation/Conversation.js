import React, { Component } from 'react'
import Header from './Header'
import MessageBuilder from './MessageBuilder'
import Messages from './Messages/Messages'
import styles from './../../styles/Conversation.css'
import { observer, inject } from 'mobx-react';


@inject('account', 'conversations')
@observer class Conversation extends Component {

  sendMessage(messageText) {
    const messageToSend = {
      from: this.props.account.current.id,
      to: this.props.conversations.current.id,
      data: {
        type: 'text',
        body: messageText
      }
    }
    this.props.conversations.addMessage(messageToSend)
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
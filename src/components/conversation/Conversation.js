import React, { Component } from 'react'
import Header from './Header'
import MessageBuilder from './MessageBuilder'
import Messages from './Messages/Messages'
import styles from './../../styles/Conversation.css'
import { observer } from 'mobx-react'


@observer(['messages', 'conversations'])
class Conversation extends Component {

  sendMessage(message) {
    const { activeConversationId } = this.props.conversations;
    this.props.messages.addMessage(activeConversationId, {fromId: 1, body: message})
  }

  render () {
    const { activeConversationId } = this.props.conversations;
    return (
      <div className={styles.container}>
        <Header name={'Naila Nur'} phoneNumber={'(226) 224-8403'}/>
        <Messages messageList={this.props.messages.messageMap[activeConversationId]} />
        <MessageBuilder onSubmit={this.sendMessage.bind(this)}/>
      </div>
    )
  }

}

export default Conversation
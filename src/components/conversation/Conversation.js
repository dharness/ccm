import React, { Component } from 'react'
import Header from './Header'
import MessageBuilder from './MessageBuilder'
import Messages from './Messages/Messages'
import styles from './Conversation.css'
import { observer } from 'mobx-react'


@observer(['messages', 'conversations'])
class Conversation extends Component {

  render () {
    const { activeConversationId } = this.props.conversations;
    return (
      <div className={styles.container}>
        <Header name={'Naila Nur'} phoneNumber={'(226) 224-8403'}/>
        <Messages messageList={this.props.messages.getMessagesById(activeConversationId)} />
        <MessageBuilder />
      </div>
    )
  }

}

export default Conversation
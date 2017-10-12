import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './../../../styles/Messages.css'
import BaseMessage from './BaseMessage'
import { observer, inject } from 'mobx-react';


@inject('account')
@observer class Messages extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView();
    window.node = node;
  }

  render () {
    return (
      <div className={styles.container}>
        {this.props.messageList && this.props.messageList.map((message, i) => {
          return (
            <BaseMessage
              key={i}
              isSent={message.from === this.props.account.current.id}
              messageBody={message.data.body}
            />)
        })}
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    )
  }
}

export default Messages
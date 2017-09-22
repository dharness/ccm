import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './Messages.css'
import BaseMessage from './BaseMessage'


class Messages extends Component {

  constructor() {
    super();
  }

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
        {this.props.messageList.map((messageData, i) => {
          return (
            <BaseMessage
              key={i}
              isSent={messageData.fromId === 1}
              messageBody={messageData.body}
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
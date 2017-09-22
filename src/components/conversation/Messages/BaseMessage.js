import React, { Component } from 'react'
import styles from './BaseMessage.css'

class BaseMessage extends Component {

  render () {
    return (
      <div className={styles.container}>
        <div className={this.props.isSent ? styles.bubbleSent : styles.bubble}>
          {this.props.messageBody}
        </div>
      </div>
    )
  }
}

export default BaseMessage
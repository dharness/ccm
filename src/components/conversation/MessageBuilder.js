import React, { Component } from 'react'
import styles from './MessageBuilder.css'
import PaperclipIcon from './../../assets/images/paperclip.svg'
import MicrophoneIcon from './../../assets/images/microphone.svg'

class MessageBuilder extends Component {
  render () {
    return (
      <div className={styles.container}>
        <PaperclipIcon className={styles.paperclipIcon}/>
        <input
          type="text"
          className={styles.textField}
          placeholder="Send a message"
        />
        <MicrophoneIcon className={styles.microphoneIcon}/>
      </div>
    )
  }
}

export default MessageBuilder
import React, { Component } from 'react'
import styles from './ConversationPreview.css';
import Avatar from 'react-avatar';

export default class ConversationPreview extends Component {
  
  handleClick() {
    this.props.onClick(this.props.id);
  }

  render() {
      return (
        <div
          onClick={this.handleClick.bind(this)}
          className={this.props.isActive ? styles.activeConversationPreview : styles.conversationPreview}>
        <Avatar
          className={styles.avatar}
          name="Naila"
          color="#01BCD4"
          round={true}
          size={45}
          textSizeRatio={2.5}
        />
        <div className={styles.infoWrapper}>
          <div className={styles.infoHeader}>
            <div className={styles.infoName}>{this.props.name}</div>
            <div className={styles.infoLastActive}>{this.props.lastActive}</div>
          </div>
          <div className={styles.previewText}>
            {this.props.preview}
          </div>
        </div>
      </div>
    )
  }
}
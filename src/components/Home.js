import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';
import Conversation from './conversation/Conversation';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Sidebar />
        <Conversation />
      </div>
    );
  }
}

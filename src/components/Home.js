import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar';
import Conversation from './conversation/Conversation';
import { observer, inject } from 'mobx-react'
import styles from './../styles/Home.css';

@inject('auth')
@observer class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        {
          !this.props.auth.isAuthenticated &&
          <Redirect to={{
            pathname: '/'
          }}/>
        }
        <Sidebar />
        <Conversation />
      </div>
    );
  }
}

export default Home
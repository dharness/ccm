import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar';
import Conversation from './conversation/Conversation';
import { observer } from 'mobx-react'
import styles from './../styles/Home.css';

@observer(['auth'])
class Home extends Component {
  render() {
    console.log(this.props.auth.isAuthenticated)
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
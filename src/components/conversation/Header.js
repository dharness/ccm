import React, { Component } from 'react'
import styles from './../../styles/Header.css'
import MenuIcon from './../../assets/images/menu.svg'

class Header extends Component {
  render () {
    return (
      <div className={styles.header}>
        <div className={styles.name}>
          {this.props.name} • {this.props.phoneNumber}
        </div>
        <MenuIcon className={styles.menuIcon}/>
      </div>
    )
  }
}

export default Header
import React, { Component } from 'react'
import MenuIcon from './../../assets/images/menu.svg'
import SearchIcon from './../../assets/images/search.svg'
import XIcon from './../../assets/images/x.svg'
import ConversationPreview from './ConversationPreview'
import styles from './../../styles/Sidebar.css';
import { observer, inject } from 'mobx-react';


const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.searchWrapper}>
        <SearchIcon className={styles.searchIcon} />
        <input
          value={props.searchInput}
          onChange={props.onSeachInputChange}
          placeholder="Search..."
          className={styles.searchField}
          type="text"
        />
        { props.searchInput.length > 0 &&
          <XIcon
            className={styles.xIcon}
            onClick={props.onSearchInputClear}
          />
        }
      </div>
      <MenuIcon className={styles.menuIcon} />
    </div>
  )
}

@inject('conversations')
@observer class Sidebar extends Component {

  constructor() {
    super();
    this.state = {
      searchInput: ''
    };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSearchInputClear = this.handleSearchInputClear.bind(this);
  }

  componentDidMount() {
    this.props.conversations.load()
  }

  handleSearchInputChange(e) {
    this.setState({
      searchInput: e.target.value
    });
  }

  handleSearchInputClear() {
    this.setState({ searchInput: '' });
  }

  handleConversationSelected(i) {
    this.props.conversations.activeConversationId = i;
  }

  render () {
    const { activeConversationId } = this.props.conversations;
    return (
      <div className={styles.container}>
        <Header
          onSearchInputClear={this.handleSearchInputClear}
          onSeachInputChange={this.handleSearchInputChange}
          searchInput={this.state.searchInput}
        />
        {Object.keys(this.props.conversations.all).map((key, i) => {
          const c = this.props.conversations.all[key];
          c.name = c.id
          return <ConversationPreview
              {...c}
              id={c.id}
              key={i}
              onClick={this.handleConversationSelected.bind(this)}
              isActive={c.id === activeConversationId}
            />
        })}
      </div>
    )
  }
}

export default Sidebar
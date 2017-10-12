import React, { Component } from 'react'
import MenuIcon from './../../assets/images/menu.svg'
import SearchIcon from './../../assets/images/search.svg'
import XIcon from './../../assets/images/x.svg'
import ConversationPreview from './ConversationPreview'
import styles from './../../styles/Sidebar.css';
import { observer } from 'mobx-react';


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

@observer(['conversations'])
class Sidebar extends Component {

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
    console.log(this.props.conversations.all)
    const { activeConversationId } = this.props.conversations;
    return (
      <div className={styles.container}>
        <Header
          onSearchInputClear={this.handleSearchInputClear}
          onSeachInputChange={this.handleSearchInputChange}
          searchInput={this.state.searchInput}
        />
        {this.props.conversations.all.map((c, i) => {
          c.name = c.id
          return <ConversationPreview
              {...c}
              id={i}
              key={i}
              onClick={this.handleConversationSelected.bind(this)}
              isActive={i === activeConversationId}
            />
        })}
      </div>
    )
  }
}

export default Sidebar
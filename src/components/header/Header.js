import React, { Component } from 'react'
//import UserHeader from './components/UserHeader'
import Menu from './components/Menu'
import jumpTo,{go} from '../../modules/Navigation'
//import Auth from '../../modules/Auth'
import device, { size } from '../../modules/mediaQuery'
import MediaQuery from 'react-responsive'
import styles  from './stylesheets/header.module.sass'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      isToggle: false
    }
  }
  handleChange = (v) => {
    this.setState({
      input: v
    })
  }
  handleSuggest = (v) => {
    this.setState({
      input: v
    })
  }
  handleToggle = () => {
    this.setState(prevState => {
      return {
        isToggle: !prevState.isToggle
      }
    })
  }
  closeToggle = () => {
    this.setState({
      isToggle: false
    })
  }
  render() {
    const {getAllPosts } = this.props
    let visibility = "show"
    if (this.state.isToggle) {
      visibility = "show"
    }

    return (
      <div className={styles.outbox}>
        {/* larger than 768px */}
        <MediaQuery query={device.min.tablet}>
          {/* top user header */}
          <div className={styles.user_header}>
            {/* <UserHeader
              user_token={user_token}
            /> */}
          </div>
          {/* menu header */}
          <div className={styles.content}>
            <div className={styles.left}>
              {/* logo */}
              <div className={styles.logo}
                onClick={() => {
                  getAllPosts()
                  jumpTo('/dashboard')
                }}
              >
                Product Hunt
              </div>
            </div>
            <div className={styles.mid}>
              <Menu
                //departments={departments}
                //getProductsByCategory={getProductsByCategory}
                getAllPosts={getAllPosts}
              />
            </div>
            <div className={styles.right}>
              
            </div>
          </div>
        </MediaQuery>
        {/* smaller than 768px */}
        <MediaQuery query={device.max.tablet}>
          <div className={styles.content}>
            <div className={`${styles.toggle_outbox}`}>
              {/* toggle content */}
              <div id="toggle" className={styles[`${visibility}`]}>
                <div className={styles.toggle_content}>
                  <div className={styles.side_title}>
                    MENU
                    <div
                      className={styles.side_title_close}
                      onClick={this.closeToggle}
                    >
                      x
                    </div>
                  </div>               
                  {/* <div className={styles.side_title}>
                    CATEGORY
                  </div> */}
                  <Menu
                    //departments={departments}
                    //getProductsByCategory={getProductsByCategory}
                    getAllPosts={getAllPosts}
                  />
                  {/* <div className={styles.side_title}>
                    CART
                  </div> */}
                  {/* <div
                    className={styles.side_content}
                    onClick={() => jumpTo('/bag')}
                  >
                    Shopping Bag
                  </div>
                  <div className={styles.side_title}>
                    USER
                  </div>
                  <div
                    className={styles.side_content}
                    onClick={() => jumpTo('/login')}
                  >
                    Login
                  </div> */}
                  {/* <div
                    className={styles.side_content}
                    onClick={() => { Auth.logout(); go('/dashboard') }}
                  >
                    Logout
                  </div> */}
                </div>

              </div>
              {/* toggle icon */}
              <div className={`${styles.toggle_icon} ${styles[`${visibility}`]}`} onClick={this.handleToggle}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
              </div>
            </div>
            {/* logo */}
            <div className={styles.logo}
              onClick={() => {
                getAllPosts()
                jumpTo('/dashboard')
              }}
            >
              Product Hunt
            </div>
          </div>
        </MediaQuery>
      </div >
    )
  }
}
import React, { Component } from 'react'
import HeaderContainer from '../../components/header/headerContainer'
import posts from './components/post'
import LoadingAnimation from '../../components/loadingAnimation'
//import Filter from './components/Filter'
import styles from './stylesheets/dashboard.module.sass'


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.posts) {
      this.props.getAllPosts()
    }
  }
  render() {
    const { posts } = this.props
    let pClass = [
      styles.fontde,
      styles.greyfont,
      styles.small_font
    ]
    pClass = pClass.join(' ')
    let h3Class = [
      styles.fontde,
      styles.medium_font
    ]
    h3Class = h3Class.join(' ')
    let voteClass = [
      styles.small_font,
      styles.votecount
    ] 
    voteClass = voteClass.join(' ')
    let votetagClass = [
      styles.small_font,
      styles.voteclass
    ] 
    votetagClass = votetagClass.join(' ')
    return (
      <div className={styles.outbox}>
        <div className={styles.maincontent}>
        <div className={styles.main}>
          <div className={styles.header}>
              Today
          </div>
         <Post />
        </div>
      </div>
    )
  }
}
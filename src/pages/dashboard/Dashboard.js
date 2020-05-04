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
    return (
      <div className={styles.outbox}>
        <div className={styles.maincontent}>
        <div className={styles.main}>
          <div className={styles.header}>
              Today
          </div>
          <div className={styles.box}>
            <ul>
            <li>
              <a href="">
              <div className={styles.item}>
                  <div className={styles.itemicon}>
                    <img src="https://ph-files.imgix.net/cd4a0d8a-5d22-4d07-80f9-14a39e3ac9f4?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2" width="120" height="100" />
                  </div>
                  <div className={styles.itemdesc}>
                    <h3 className={styles.itemdescheader}>
                    Pearlii
                    </h3>
                    <p>Free, fast dental check-ups using AI image processing</p>
                    <div className={styles.meta}>
                      <div className={styles.metaaction}>
                        <span>
                        Comments:&nbsp;139
                      </span>
                      </div>
                      <div className={styles.metainfo}>
                        Android
                      </div>
                  </div>
                  </div>
                  <div className ={styles.itemright}>
                        <span className={styles.voteclass}>
                              Votes:
                        </span>
                  </div>
                  
              </div>
              </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
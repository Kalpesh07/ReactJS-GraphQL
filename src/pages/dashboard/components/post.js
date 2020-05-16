import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../stylesheets/post.module.sass'

export default function Post({ name, tagline, image,commentcount,votescount }) {
  return (
    <div className={styles.box}>
    <ul>
    <li>
      <a href="">
      <div className={styles.item}>
          <div className={styles.itemicon}>
            {/* <img
              src="https://ph-files.imgix.net/cd4a0d8a-5d22-4d07-80f9-14a39e3ac9f4?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
              width="120"
              height="100" /> */}
              <img src={image} width="120" height="100" />
          </div>
          <div className={styles.itemdesc}>
            <h3 className={styles.h3Class}>
            {name}
            </h3>
            <p className={styles.pClass}>{tagline}</p>
            <div className={styles.meta}>
              <div className={styles.metaaction}>
                <span>
                Comments:&nbsp;{commentcount}
              </span>
              </div>
              <div className={styles.metainfo}>
                Android
              </div>
          </div>
          </div>
          <div className ={styles.itemright}>
            <span className={styles.votetagClass}>
                      Votes:
                </span>
                <span className={styles.voteClass}>
                  {votescount}
            </span>
          </div>
          
      </div>
      </a>
    </li>
    </ul>
    </div>
  );
}
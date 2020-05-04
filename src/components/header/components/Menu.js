import React from 'react'
import styles from '../stylesheets/menu.module.sass'
//import DropList from './DropList'
import jumpTo from '../../../modules/Navigation'
export default function Menu({
  getAllPosts
}) {
  return (
    <div className={styles.outbox}>
      {/* all product */}
      <div className={styles.tag}
        onClick={() => {
          getAllPosts()
          jumpTo('/dashboard')
        }}
      >
        All Product
      </div>
    </div>
  )
}
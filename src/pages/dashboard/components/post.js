import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../stylesheets/post.module.sass'

export default function Post({ title, color, price, image }) {
  return (
    // <Card
    //   border="primary"
    //   className={`${styles.card} p-2`}
    //   style={{ height: '100%' }}
    // >
    //   <Card.Img className={styles.image} variant="top" src={image} />
    //   <Card.Body>
    //     <Card.Title className={styles.title}>{title}</Card.Title>
    //     <Card.Subtitle className="mb-2 text-muted">
    //       <div className={styles.subtitle}>
    //         {price}
    //       </div>
    //     </Card.Subtitle>
    //     <Card.Text className={styles.color}>
    //       {color}
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
    <div className={styles.box}>
    <ul>
    <li>
      <a href="">
      <div className={styles.item}>
          <div className={styles.itemicon}>
            <img src="https://ph-files.imgix.net/cd4a0d8a-5d22-4d07-80f9-14a39e3ac9f4?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2" width="120" height="100" />
          </div>
          <div className={styles.itemdesc}>
            <h3 className={h3Class}>
            Pearlii
            </h3>
            <p className={pClass}>Free, fast dental check-ups using AI image processing</p>
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
            <span className={votetagClass}>
                      Votes:
                </span>
                <span className={voteClass}>
                  369
            </span>
          </div>
          
      </div>
      </a>
      </li>
    </ul>
    </div>
  </div>
  )
}
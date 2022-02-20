import React from 'react'
import styles from './MenuPages.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
export default function MenuPages() {
  return (
    <div className={styles.menuPages_container}>
        <span><FontAwesomeIcon icon={faSortUp} size="2x" /></span>
        <div className={styles.menuPages}>MenuPages</div>
    </div>
  )
}

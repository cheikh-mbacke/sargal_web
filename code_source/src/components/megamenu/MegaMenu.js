import React from 'react'
import styles from './MegaMenu.module.css'

export default function MegaMenu() {
    return (
        <div className={styles.megamenu}>
            <div>
                <div className={styles.rowContainer}>

                    <div>
                        <div className={styles.megamenu_wrap}>
                            <h3 className={styles.megamenu_title}>shop pages</h3>
                            <span className={styles.megamenu_title_bar}></span>
                            <ul className={styles.megamenu_list}>
                                <li><a href="/">shop 5 column</a></li>
                                <li><a href="/">shop 4 column</a></li>
                                <li><a href="/">shop 3 column</a></li>
                                <li><a href="/">shop 2 column</a></li>
                                <li><a href="/">shop 1 column</a></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className={styles.megamenu_wrap}>
                            <h3 className={styles.megamenu_title}>product pages</h3>
                            <span className={styles.megamenu_title_bar}></span>
                            <ul className={styles.megamenu_list}>
                                <li><a href="/">product single tab</a></li>
                                <li><a href="/">product single grid</a></li>
                                <li><a href="/">product single video</a></li>
                                <li><a href="/">product single simple</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={styles.megamenu_wrap}>
                            <h3 className={styles.megamenu_title}>user action</h3>
                            <span className={styles.megamenu_title_bar}></span>
                            <ul className={styles.megamenu_list}>
                                <li><a href="/">wishlist</a></li>
                                <li><a href="/">compare</a></li>
                                <li><a href="/">checkout</a></li>
                                <li><a href="/">order history</a></li>
                                <li><a href="/">order invoice</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={styles.megamenu_wrap}>
                            <h3 className={styles.megamenu_title}>other pages</h3>
                            <span className={styles.megamenu_title_bar}></span>
                            <ul className={styles.megamenu_list}>
                                <li><a href="/">all Category</a></li>
                                <li><a href="/">brand list</a></li>
                                <li><a href="/">brand single</a></li>
                            </ul>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

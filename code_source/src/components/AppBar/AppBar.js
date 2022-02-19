import React from 'react'
import styles from './AppBar.module.css'
import sargal_logo from '../../assets/images/sargal.png'
import user from '../../assets/images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'


export default function AppBar() {
    return (
        <>
            <nav className={styles.navBarContainer}>
                <div className={styles.container}>
                    <a className={styles.brand} href="/">
                        <img className={styles.brand__img} src={sargal_logo} alt="logo de sargal" />
                    </a>

                    <div className={styles.px}>
                        <div>
                            <a href="/" className={styles.user_link}>
                                <img src={user} className={styles.user_img} />
                                <span className={styles.user_text} >Se joindre</span>
                            </a>
                        </div>
                    </div>

                    <div className={styles.px}>
                        <div className={styles.search__container}>
                            <input
                                className={styles.search__input}
                                type='search' name='q'
                                placeholder='recherche ...'
                                aria-label='Recherche dans le contenu du site'
                            />
                            <span className={styles.search__loop}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </span>
                        </div>
                    </div>

                    <div className={styles.px}>
                        <div className={styles.widgets}>
                            <p className={styles.widget_container + " " + styles.widget_container__mr}>
                                <sup className={styles.widget_notif} aria-label="quantité de produits aimés">0</sup>
                                <FontAwesomeIcon icon={faHeart} />
                            </p>
                            <p className={styles.widget_container}>
                                <sup className={styles.widget_notif} aria-label="quantité de produits ajoutés au panier">9+</sup>
                                <FontAwesomeIcon icon={faBasketShopping} />
                            </p>
                        </div>
                    </div>

                    <div>
                        <span>PRIX TOTAL</span><br />
                        <strong>&euro;345.00</strong>
                    </div>
                </div>
                <div className={styles.barre}></div>
                <div className={styles.onglets}>
                    <ul className={styles.onglets_list}>
                        <li>
                            <a href='/'>
                                Accueil&nbsp;&nbsp;<FontAwesomeIcon icon={faAngleDown} />
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                Boutique&nbsp;&nbsp;<FontAwesomeIcon icon={faAngleDown} />
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                Pages&nbsp;&nbsp;<FontAwesomeIcon icon={faAngleDown} />
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                Authentic&nbsp;&nbsp;<FontAwesomeIcon icon={faAngleDown} />
                            </a>
                        </li>
                    </ul>
                    <ul className={styles.onglets_contact}>
                        <li>
                            <p className={styles.onglets_contact_p1}><FontAwesomeIcon icon={faMobileScreenButton} size="2x" /></p>
                            <p>
                                Contactez-nous <br />
                                <strong>(+221 77 127 83 76)</strong>
                            </p>
                        </li>
                        <li>
                            <p className={styles.onglets_contact_p1}><FontAwesomeIcon icon={faAt} size="2x" /></p>
                            <p>
                                Envoyez nous un mail <br />
                                <strong>mbackecheikhouna7@gmail.com</strong>
                            </p>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

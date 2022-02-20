import React from 'react'
import styles from './MenuProducts.module.css'

export default function MenuProducts() {
    return (
        <div className={styles.megamenu}>
            <div>
                <div className={styles.rowContainer}>
                    <div>
                        <div className={styles.megamenu_wrap}>
                            <h3 className={styles.megamenu_title}>Légumes</h3>
                            <span className={styles.megamenu_title_bar}></span>
                            <ul className={styles.megamenu_list}>
                                <li><a href="#">carrot</a></li>
                                <li><a href="#">broccoli</a></li>
                                <li><a href="#">asparagus</a></li>
                                <li><a href="#">cauliflower</a></li>
                                <li><a href="#">eggplant</a></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className={styles.megamenu_wrap}>
                            <h3 className={styles.megamenu_title}>Fruits</h3>
                            <span className={styles.megamenu_title_bar}></span>
                            <ul className={styles.megamenu_list}>
                                <li><a href="#">Apple</a></li>
                                <li><a href="#">orange</a></li>
                                <li><a href="#">banana</a></li>
                                <li><a href="#">strawberrie</a></li>
                                <li><a href="#">watermelon</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={styles.megamenu_wrap}>
                            <h3 className={styles.megamenu_title}>Dairy Farms</h3>
                            <span className={styles.megamenu_title_bar}></span>
                            <ul className={styles.megamenu_list}>
                                <li><a href="#">Butter</a></li>
                                <li><a href="#">Cheese</a></li>
                                <li><a href="#">Milk</a></li>
                                <li><a href="#">Eggs</a></li>
                                <li><a href="#">cream</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={styles.megamenu_wrap}>
                            <h3 className={styles.megamenu_title}>Seafoods</h3>
                            <span className={styles.megamenu_title_bar}></span>
                            <ul className={styles.megamenu_list}>
                                <li><a href="#">Lobster</a></li>
                                <li><a href="#">Octopus</a></li>
                                <li><a href="#">Shrimp</a></li>
                                <li><a href="#">Halabos</a></li>
                                <li><a href="#">Maeuntang</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={styles.megamenu_wrap}>
                            <h3 className={styles.megamenu_title}>Diet Foods</h3>
                            <span className={styles.megamenu_title_bar}></span>
                            <ul className={styles.megamenu_list}>
                                <li><a href="#">Salmon</a></li>
                                <li><a href="#">Avocados</a></li>
                                <li><a href="#">Leafy Greens</a></li>
                                <li><a href="#">Boiled Potatoes</a></li>
                                <li><a href="#">Cottage Cheese</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.rowContainer}>
                    <div>
                        <div className={styles.megamenu_wrap}>
                            <h3 className={styles.megamenu_title}>Fast Foods</h3>
                            <span className={styles.megamenu_title_bar}></span>
                            <ul className={styles.megamenu_list}>
                                <li><a href="#">burger</a></li>
                                <li><a href="#">milkshake</a></li>
                                <li><a href="#">sandwich</a></li>
                                <li><a href="#">doughnut</a></li>
                                <li><a href="#">pizza</a></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className={styles.megamenu_wrap}>
                            <h3 className={styles.megamenu_title}>Drinks</h3>
                            <span className={styles.megamenu_title_bar}></span>
                            <ul className={styles.megamenu_list}>
                                <li><a href="#">cocktail</a></li>
                                <li><a href="#">hard soda</a></li>
                                <li><a href="#">shampain</a></li>
                                <li><a href="#">Wine</a></li>
                                <li><a href="#">barley</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={styles.megamenu_wrap}>
                            <h3 className={styles.megamenu_title}>Meats</h3>
                            <span className={styles.megamenu_title_bar}></span>
                            <ul className={styles.megamenu_list}>
                                <li><a href="#">Meatball</a></li>
                                <li><a href="#">Sausage</a></li>
                                <li><a href="#">Poultry</a></li>
                                <li><a href="#">chicken</a></li>
                                <li><a href="#">Cows</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={styles.megamenu_wrap}>
                            <h3 className={styles.megamenu_title}>Fishes</h3>
                            <span className={styles.megamenu_title_bar}></span>
                            <ul className={styles.megamenu_list}>
                                <li><a href="#">scads</a></li>
                                <li><a href="#">pomfret</a></li>
                                <li><a href="#">groupers</a></li>
                                <li><a href="#">anchovy</a></li>
                                <li><a href="#">mackerel</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={styles.megamenu_wrap}>
                            <h3 className={styles.megamenu_title}>Dry Foods</h3>
                            <span className={styles.megamenu_title_bar}></span>
                            <ul className={styles.megamenu_list}>
                                <li><a href="#">noodles</a></li>
                                <li><a href="#">Powdered milk</a></li>
                                <li><a href="#">nut &amp; yeast</a></li>
                                <li><a href="#">almonds</a></li>
                                <li><a href="#">pumpkin</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

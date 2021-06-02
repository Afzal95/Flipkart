import React from 'react'
import  styles from '../CSS/Navbar.module.css'
const Navbar =() =>{
    return(
        <div>
            <div className={styles.bluenavtop}>
                <img className={styles.flipkartlogo} alt="flipkart-logo" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"/>
               <input  className={styles.searchbox}  type="text" placeholder="Search for products brands and more"/>
                <a className={styles.atag}>My Account</a>
                <a className={styles.atag}>More</a>
                <img className={styles.carticon} alt="cart-icon" src="https://image.flaticon.com/icons/png/512/1170/1170678.png"/>
            </div>
        </div>
    )
}
export {Navbar}
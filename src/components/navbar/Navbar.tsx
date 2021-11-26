import React from 'react';
import styles from "./Navbar.module.css";
import {useWindowDimensions} from "../../hooks/useWindowDimensions";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// function FontAwesomeIcon(props: { icon: any, size: string, className: string }) {
//     return null;
// }

const Navbar = () => {
    const {width} = useWindowDimensions();

    //if on mobile, display hamburger menu
    const getMobileMenu = () => {
        if (width <= 768) {
            return (
                <FontAwesomeIcon icon={faBars} size="lg" className={styles.navMobileMenu}/>
            );
        }
        return null;
    }
    return (
        <nav className={styles.navbar}>
            {getMobileMenu()}
            <strong>SuperForum</strong>
        </nav>
    );
}
export default Navbar;

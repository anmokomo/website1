import React, {useState} from 'react';
import ReactModal from 'react-modal';
import styles from "../../App.module.css";
import {useWindowDimensions} from "../../hooks/useWindowDimensions";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SideBarMenus from "../sidebar/SideBarMenus";

// function FontAwesomeIcon(props: { icon: any, size: string, className: string }) {
//     return null;
// }

const Navbar = () => {
    const {width} = useWindowDimensions();
    const [showMenu, setShowMenu] = useState(false);
    //if on mobile, display hamburger menu
    const getMobileMenu = () => {
        if (width <= 768) {
            return (
                <FontAwesomeIcon
                    onClick={onClickToggle}
                    icon={faBars}
                    size="lg"
                    className="nav-mobile-menu"
                />
            );
        }
        return null;
    }
    const onClickToggle = (e: React.MouseEvent<Element, MouseEvent>) => {
        setShowMenu(!showMenu);
    };
    const onRequestClose = (
        e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
    ) => {
        setShowMenu(false);
    };

    return (
        <React.Fragment>
            <ReactModal
                className={styles.mobileMenu}
                isOpen={showMenu}
                onRequestClose={onRequestClose}
                shouldCloseOnOverlayClick={true}
            >
                <SideBarMenus />
            </ReactModal>
            <nav>
                {getMobileMenu()}
                <strong>SuperForum</strong>
            </nav>
        </React.Fragment>
    );
}
export default Navbar;

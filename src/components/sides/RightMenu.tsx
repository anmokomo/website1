import React from 'react';
import styles from "./RightMenu.module.css";
import {useWindowDimensions} from "../../hooks/useWindowDimensions";

export const RightMenu = () => {
    const { width } = useWindowDimensions()
    if (width <= 768) {
        return null
    }
    return (
        <div className={styles.leftmenu}>Right Menu</div>
    )
}


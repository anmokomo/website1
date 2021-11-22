import React from 'react';
import styles from "./Rightmenu.module.css";
import {useWindowDimensions} from "../../hooks/useWindowDimensions";

export const Rightmenu = () => {
    const { width } = useWindowDimensions()
    if (width <= 768) {
        return null
    }
    return (
        <div className={styles.leftmenu}>Left Menu</div>
    )
}


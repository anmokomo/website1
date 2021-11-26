import React from 'react';
import styles from "./Sidebar.module.css";
import {useWindowDimensions} from "../../hooks/useWindowDimensions";

export const Sidebar = () => {
    const { width } = useWindowDimensions()
    if (width <= 768) {
        return null
    }
    return (
        <div className={styles.sidebar}>Sidebar</div>
    );
}



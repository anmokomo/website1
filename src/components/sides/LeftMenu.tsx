import React, {useEffect, useState} from 'react';
import styles from "./LeftMenu.module.css";
import {useWindowDimensions} from "../../hooks/useWindowDimensions";
import {getCategories} from "../../services/DataService";
import Category  from "../../models/Category";

export const LeftMenu = () => {
    const { width } = useWindowDimensions()
    const [categories, setCategories] = useState<JSX.Element>(
        <div>Left Menu</div>
    );

    useEffect(() => {
        getCategories()
            .then((categories: Array<Category>) => {
                const cats = categories.map((cat: Category) => {
                    return <li key={cat.id}>{cat.name}</li>;
                });
                setCategories(<ul className="category">{cats}</ul>);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (width <= 768) {
        return null
    }

    return (
        <div className={styles.leftmenu}>
            <div>Left Menu</div>
            <div>Categories</div>
            <div>{categories}</div>
        </div>

    )
}


export default LeftMenu;

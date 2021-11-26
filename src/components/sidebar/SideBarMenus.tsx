import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/AppState";
import {UserProfileSetType} from "../../store/user/UserReducer";
import {useEffect} from "react";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";

const SideBarMenus = () => {
    const user = useSelector((state: AppState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: UserProfileSetType,
            payload: {
                id: 1,
                userName: "testUser",
            },
        });
    }, [dispatch]);

    return (
        <>
            <ul>
                <FontAwesomeIcon icon={faUser} />
                <span className="menu-name">{user?.userName}</span>
            </ul>
        </>
    );
};

export default SideBarMenus

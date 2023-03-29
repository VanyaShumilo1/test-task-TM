import React, {useEffect} from 'react';
import styles from '../styles/UserItem.module.scss'
import {Link} from "react-router-dom";

const UserItem = ({event, ...props}) => {

    const {title, description, startDate, endDate} = event


    return (
        <div className={styles.UserItem}>
            <div>
                {title}
            </div>
            <div>{description}</div>
            <div>{new Date(startDate).toLocaleString().split(',')[0]}</div>
            <div>{new Date(endDate).toLocaleString().split(',')[0]}</div>
        </div>
    );
};

export default UserItem;
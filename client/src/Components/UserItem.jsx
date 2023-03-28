import React from 'react';
import styles from '../styles/UserItem.module.scss'

const UserItem = ({user, ...props}) => {

    const {firstName, lastName, email, phoneNumber} = user

    return (
        <div className={styles.UserItem}>
            <div>{firstName} {lastName}</div>
            <div>{email}</div>
            <div>{phoneNumber}</div>
        </div>
    );
};

export default UserItem;
import React, {useEffect} from 'react';
import styles from '../styles/UserItem.module.scss'
import {Link} from "react-router-dom";

const UserItem = ({user, events, ...props}) => {

    const usersEvents = events.filter(item => item.user === user._id)

    const {firstName, lastName, email, phoneNumber} = user


    return (
        <div className={styles.UserItem}>
            <div>
                <Link to={`/${user._id}`}>{firstName} {lastName}</Link>
            </div>
            <div>{email}</div>
            <div>{phoneNumber}</div>
            <div>{usersEvents.length}</div>
            <div>
                {
                usersEvents.length > 0
                    ? new Date(usersEvents[0]?.startDate).toLocaleString().split(',')[0]
                    : "-"
            }
            </div>
        </div>
    );
};

export default UserItem;
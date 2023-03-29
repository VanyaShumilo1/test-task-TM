import React from 'react';
import styles from "../styles/Home.module.scss";

const UsersTableHeader = () => {
    return (
        <div className={styles.table__header}>
            <div>Name</div>
            <div>Email</div>
            <div>Phone number</div>
            <div>Events count</div>
            <div>Upcoming event</div>
        </div>
    );
};

export default UsersTableHeader;
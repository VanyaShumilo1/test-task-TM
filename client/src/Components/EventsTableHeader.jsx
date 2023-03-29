import React from 'react';
import styles from "../styles/Home.module.scss";

const EventsTableHeader = () => {
    return (
        <div className={styles.table__header}>
            <div>Title</div>
            <div>Description</div>
            <div>Start Date</div>
            <div>End Date</div>
        </div>
    );
};

export default EventsTableHeader;
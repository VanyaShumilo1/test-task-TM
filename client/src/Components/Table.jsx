import React from 'react';
import styles from '../styles/Table.module.scss'

const Table = ({children, ...props}) => {
    return (
        <div {...props} className={styles.table}>
            {children}
        </div>
    );
};

export default Table;
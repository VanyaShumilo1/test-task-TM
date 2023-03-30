import React from 'react';
import styles from "../../styles/PagesButton.module.scss";

const PageButton = ({children, ...props}) => {
    return (
        <button {...props} className={[styles.pagesButton, props.className].join(' ')}>
            {children}
        </button>
    );
};

export default PageButton;
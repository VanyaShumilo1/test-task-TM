import React from 'react';
import styles from "../../styles/LinkBtn.module.scss";
import {Link} from "react-router-dom";

const LinkBtn = ({to, children, ...props}) => {
    return (
        <div {...props} className={styles.linkBtn}>
            <Link to={to}>{children}</Link>
        </div>
    );
};

export default LinkBtn;
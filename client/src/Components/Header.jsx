import React from 'react';
import styles from '../styles/Header.module.scss'
import Container from "./Container.jsx";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.header__links}>
                    <div>
                        <Link to={'/'}>Home</Link>
                    </div>
                    <div className={styles.addUserBtn}>
                        <Link to={'/adduser'}>Add user</Link>
                    </div>
                </div>

            </Container>
        </div>

    );
};

export default Header;
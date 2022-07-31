import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

function Header({ id }) {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <Link to="/">
                    <div className={styles.logo}>
                        <img src="images/logo.png" alt="vconnect logo" />
                    </div>
                </Link>
                <Link to={`/profile/${id}`}>
                    <div className={styles.profile}>
                        <img src="images/profile.jpg" alt="profile" />
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header
import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/useGlobalContext";

function Header({ id }) {
    const { user } = useGlobalContext();
    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <Link to="/">
                    <div className={styles.logo}>
                        <img src='/images/logo.png' alt="vconnect logo" />
                    </div>
                </Link>
                <div className={styles.authButtons}>
                    <Link to='/auth'>
                        <button>Logout</button>
                    </Link>
                    <Link to={`/profile/${user.id}`}>
                        <div className={styles.profile}>
                            <img src='/images/profile.jpg' alt="profile" />
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
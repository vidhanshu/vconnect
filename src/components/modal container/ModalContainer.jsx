import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./style.module.scss";

function ModalContainer({ children }) {
    return (
        ReactDOM.createPortal(
            <div className={styles.ModalContainer}>
                {children}
            </div>
            ,
            document.getElementById('portal')
        )
    )
}

export default ModalContainer



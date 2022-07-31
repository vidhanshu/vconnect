import Header from "../header/Header";
import styles from "./style.module.scss";

function WebsiteLayout(props) {
    return (
        <div >
            <Header />
            <div className={`${styles.websiteLayoutContainer} ${props.className}`}>
                {
                    props.children
                }
            </div>
        </div>
    )
}

export default WebsiteLayout
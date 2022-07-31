import styles from "./style.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Section, WebsiteLayout } from "../../components";
import { USERS } from "../../constant/constant";

function SearchUser() {
    const [results, setResults] = useState(USERS);
    return (
        <WebsiteLayout>
            <Section className={styles.searchUserContainer}>
                <div className={styles.searchUser}>
                    <input type="text" placeholder="search user" />
                    <button>search</button>
                </div>
                <div className={styles.results}>
                    {
                        results.length > 0
                            ? results.map(result => (
                                <div key={result.id} className={styles.result}>
                                    <div className={styles.flex_1}>
                                        <img src={result.avatar} alt="avatar" />
                                    </div>
                                    <div className={styles.flex_1}>
                                        <p>{result.country}</p>
                                    </div>
                                    <div className={styles.flex_1}>
                                        <img src={result.country_flag} alt="avatar" />
                                    </div>
                                    <div className={styles.flex_1}>
                                        <Link to={`/profile/${result.id}`}>
                                            <p className={styles.resultName}>{result.name}</p>
                                        </Link>
                                    </div>
                                </div>
                            ))
                            : <p className={styles.noUserText}> -_- No results -_- </p>
                    }
                </div>
            </Section>
        </WebsiteLayout>
    )
}

export default SearchUser
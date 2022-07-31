import React from "react";
import styles from "./style.module.scss";
import { Section } from "../../components";

function Auth() {
  const [isLogin, setIsLogin] = React.useState(true);
  return (
    <div className={styles.authContainer}>
      {isLogin
        ? <Section className={styles.formContainer}>
          <div className={styles.auth}>
            <h1 className={styles.logo}><img src="/images/logo.png" alt="" />Connect</h1>
          </div>
          <form className={styles.form}>
            <h2>Sign In</h2>
            <div className={styles.formGroup}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="email">Email</label>
                    </td>
                    <td>
                      <input type="email" id="email" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="password">Password</label>
                    </td>
                    <td>
                      <input type="password" id="password" />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <button className={styles.btn}>Sign In</button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Don't have an account <span onClick={() => setIsLogin(false)} className={styles.link}>register here</span></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </Section>
        : <Section className={styles.formContainer}>
          <div className={styles.auth}>
            <h1 className={styles.logo}><img src="/images/logo.png" alt="" />Connect</h1>
          </div>
          <form className={styles.form}>
            <h2>Sign Up</h2>
            <div className={styles.formGroup}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="name">Name</label>
                    </td>
                    <td>
                      <input type="name" id="name" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="email">Email</label>
                    </td>
                    <td>
                      <input type="email" id="email" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="password">Password</label>
                    </td>
                    <td>
                      <input type="password" id="password" />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <button className={styles.btn}>Sign Up</button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Already have an account <span onClick={() => setIsLogin(true)} className={styles.link}>sign here</span></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </Section>}
    </div>
  )
}

export default Auth
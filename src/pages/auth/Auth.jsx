import React from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../api/user";
import { Section } from "../../components";
import { useGlobalContext } from "../../context/useGlobalContext";

function Auth() {
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  const { setLoading, setUser } = useGlobalContext();

  const handleLogin = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    const user = await login({email, password});
    setLoading(false);
    if (user) {
      setUser(user);
      localStorage.setItem('auth', JSON.stringify(user));
      return window.location.href = '/';
    }
    alert("Login failed");
  }

  const handleRegister = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    const user = await register({ name, email, password, country });
    setLoading(false);
    if (user) {
      localStorage.setItem('auth', JSON.stringify(user));
      return window.location.href = '/';
    }
    alert('Something went wrong!')
  }

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
                      <input value={email} type="email" id="email" onChange={(evt) => setEmail(evt.target.value)} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="password">Password</label>
                    </td>
                    <td>
                      <input value={password} type="password" id="password" onChange={(evt) => setPassword(evt.target.value)} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <button onClick={handleLogin} className={styles.btn}>Sign In</button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Don't have an account? <span onClick={() => setIsLogin(false)} className={styles.link}>register here</span></p>
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
                      <input value={name} type="name" id="name" onChange={(evt) => setName(evt.target.value)} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="email">Email</label>
                    </td>
                    <td>
                      <input value={email} type="email" id="email" onChange={(evt) => setEmail(evt.target.value)} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="password">Password</label>
                    </td>
                    <td>
                      <input value={password} type="password" id="password" onChange={(evt) => setPassword(evt.target.value)} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="country">Country</label>
                    </td>
                    <td>
                      <input value={country} type="country" id="country" onChange={evt => setCountry(evt.target.value)} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <button onClick={handleRegister} className={styles.btn}>Sign Up</button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Already have an account? <span onClick={() => setIsLogin(true)} className={styles.link}>sign here</span></p>
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
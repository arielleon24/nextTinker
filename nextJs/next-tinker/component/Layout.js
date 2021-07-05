import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a href='/' className={styles.navlink}>Welcome to PaoPower</a>
          <ul className={styles.navmenu}>
            <li className={styles.navitem}>
              <a href='/login' className={styles.navlink}>Login</a>
            </li>
            {/* <li className={styles.navitem}>
              <a className={styles.navlink}>Register</a>
            </li> */}
            <li className={styles.navitem}>
              <a href='/about' className={styles.navlink}>About</a>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      {/*footer*/}
    </>
  );
}

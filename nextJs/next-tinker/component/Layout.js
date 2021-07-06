import styles from "../styles/Layout.module.css";
import data from '../component/data.json'
import Index from '../pages/index'
import { useState } from "react";

export default function Layout({ children }) {

  const [eng, setEng] = useState(true)
  
  const changeBoolean = () => {
    if(eng === true) {
      setEng(false)
    } else 
    {
      setEng(true)
    }
  }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a href='/' className={styles.navlink}>{eng ? data.eng.nav : data.fr.nav}</a>
          <ul className={styles.navmenu}>
            <li className={styles.navitem}>
              <a href='/login' className={styles.navlink}>Login</a>
            </li>
            {/* <li className={styles.navitem}>
              <a className={styles.navlink}>Register</a>
            </li> */}
            <li className={styles.navitem}>
              <button type="submit" onClick={changeBoolean} className={styles.navlink}>{eng? "FR": "ENG"}</button>
            </li>
          </ul>
        </nav>
      </header>
      <Index eng={eng} />
      {/*footer*/}
    </>
  );
}

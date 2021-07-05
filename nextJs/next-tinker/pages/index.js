import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PaoPower registration form</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to PaoPower's registration form
        </h1>

        <p className={styles.description}>
          Got an account? Please <a className={styles.aTag} href="/login">Login</a>
        </p>
        <form className={styles.form}>
          <div>
            <p className={styles.description}>Please fill the form to create an account</p>

            <label><b className={styles.description}>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" id="username" required />

            <label><b className={styles.description}>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required />

            <label><b className={styles.description}>Password</b></label>
            <input type="text" placeholder="Enter Password" name="password" id="password" required />

            <button type="submit" className={styles.registerbtn}><h1>Register</h1></button>

          </div>
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

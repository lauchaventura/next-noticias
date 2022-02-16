import Head from 'next/head'
import { Toolbar } from '../components/Toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='page-container'>

      <Toolbar />
      <div className={styles.main}>
        <h1>Next.js news App</h1>

        <h3>Yoir uns nadasjdakl asd asrasd</h3>
      </div>
    </div>
  )
}

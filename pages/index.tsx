import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Project Design & Development</title>
        <meta name="description" content="A cool web project design & development class I'm taking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Web Project Design & Development</h1>
      <p> Stylings to come later!</p>
      <p>Assignment 1: <a href="/assignment1/index.html">Formatting Text</a> </p>
    </div>
  )
}

export default Home

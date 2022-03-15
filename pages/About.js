import React from 'react'
import Script from 'next/script'
import styles from '../styles/About.module.css'
import Head from 'next/head'

const About = () => {
  return (
    <div className={styles.container}>
        <Head>
          <title>About Us | Kamal's</title>
        </Head>
        {/* <Script src="\script.js" strategy='lazyOnload'></Script> */}
        <h1>This is about page</h1>
    </div>
  )
}

export default About
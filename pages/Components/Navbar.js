import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <header>
    <nav className={styles.nav}>
      <ul>
        <Link href="/"><li>Home</li></Link>
        <Link href="/About"><li>About Us</li></Link>
        <Link href="/Works"><li>Works and Services</li></Link>
        <Link href="/Blog"><li>Blogs</li></Link>
        <Link href="/Contact"><li>Contact Us</li></Link>
        <Link href="/BOC"><li>Board of Control</li></Link>
      </ul>
    </nav>
  </header>
  )
}

export default Navbar
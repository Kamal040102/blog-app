import React from 'react'
import styles from "../styles/Blog.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import BlogCard from './Components/BlogCard'
import Head from 'next/head'

const Blog = () => {
  return (
    <div className="container py-5 d-flex align-items-center flex-column col-12">
        <Head>
            <title>Blogs | Kamal's</title>
        </Head>
        <div className={styles.header}>
            <h2>Our Recent Blogs</h2>
        </div>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
    </div>
  );
}

export default Blog
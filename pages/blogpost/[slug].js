import { useRouter } from "next/router";
import Head from 'next/head'
import styles from "../../styles/Blogpost.module.css"

const blog = () => {
    const router = useRouter()
    const {slug} = router.query

    return (
        <div className={styles.container}>
            <Head>
                <title>{slug} Blog | Kamal's</title>
                <meta name="description" content={`This is ${slug} Blog and talks more and more about ${slug} in very detail so that you get a bunch of information about ${slug} and be happy.`}/>
            </Head>
            <h1>This is {slug} Blog</h1>
        </div>
    )
}

export default blog
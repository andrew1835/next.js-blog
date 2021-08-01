import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, my name is Andrew and I'm a programmer. I'm also someone who loves film, television, literature, philosophy, and more. This blog may dive into my thoughts on coding from time-to-time, but I also hope to intersperse it with my personal philosophies on life and what it means to exist (hopefully without being too pretentious). </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Link href="/posts/first-post"><a>First Post</a></Link>
      </section>
    </Layout>
  )
}
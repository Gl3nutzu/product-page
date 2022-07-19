import Head from 'next/head'  
import Header from '../components/header'
import Content from '../components/content'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sneakers</title>
        <meta name="description" content="Landing page for product." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Content />
    </div>
  )
}

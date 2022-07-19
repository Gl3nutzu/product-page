import Head from 'next/head'  
import Content from '../components/content'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sneakers</title>
        <meta name="description" content="Landing page for product." />
      </Head>
      <Content />
    </div>
  )
}

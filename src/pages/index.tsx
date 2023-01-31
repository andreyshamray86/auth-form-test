import Head from 'next/head'
import MainPage from '@/components/pages/Main/main.page'

export default function Home() {
  return (
    <>
      <Head>
        <title>Martians Login</title>
        <meta name="description" content="evil martians login form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </>
  )
}

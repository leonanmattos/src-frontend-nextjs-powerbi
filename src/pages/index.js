import Head from 'next/head'
import Login from './login'

export default function App() {
  return (
    <div>
      <Head>
        <title>Power Bi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Login />
      </main>
    </div>
  )
}

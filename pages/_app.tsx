import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tell me lu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
        <div>
          <Component {...pageProps} />
        </div>
    </>
  )
}

export default MyApp

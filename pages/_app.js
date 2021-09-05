import Layout from '../comps/Layout'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  let login = true
  return (
    <>
      {login ? (<div>
        <Component {...pageProps} />
      </div>) :
        (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}



    </>

  )
}

export default MyApp

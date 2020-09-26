// import App from 'next/app'
import Head from "next/head"

//@ts-ignore
function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8"/>
      <meta
        name="viewport"
        // eslint-disable-next-line max-len
        content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
      />      
    </Head>
    <Component {...pageProps} />
  </>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp

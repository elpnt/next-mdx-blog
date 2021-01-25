import { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import '../styles/globals.css'
import 'prism-themes/themes/prism-dracula.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp

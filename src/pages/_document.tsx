import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* AOS (Animate On Scroll) */}
         <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
         <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
      </body>
    </Html>
  )
}

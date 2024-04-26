import { Head, Html, Main, NextScript } from 'next/document.js'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#d4d4d8"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#18181b"
        />
        <meta name="description" content="Vladislav Iakovlev's website" />
        <link rel="mask-icon" href="/icons/mask-icon.svg" color="#16a34a" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
      </Head>
      <body className="touch-pan-y bg-zinc-300 [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] dark:bg-zinc-900 dark:text-zinc-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

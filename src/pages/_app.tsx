import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '@/components/Nav';

export default function App({ Component, pageProps }) {
  return (
    <div className="m-8 text-gray-800">
      <Head>
        <link rel="stylesheet" href="//rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
        <title>Web Audio Issues</title>
      </Head>

      <Link href="/">
        <h1 className="text-gray-800 text-2xl inline-block hover:underline cursor-pointer">
          Web Audio Issues
        </h1>
      </Link>

      <nav className="mb-16 md:mb-8">
        <Nav />
      </nav>
      <div className="flex flex-col h-full w-full lg:w-1/2">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

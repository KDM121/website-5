import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Support</title>
        <meta name="description" content="Projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/c23e024fba.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <main>
        <Navbar />
        <div className="min-h-screen bg-base-100"></div>
        <Footer />
      </main>
    </>
  );
}

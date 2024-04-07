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
        <title>Kieran McDonnell</title>
        <meta name="description" content="Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/c23e024fba.js" crossorigin="anonymous"></script>
      </Head>
  <main>
    <Navbar/>
  <div className="hero min-h-screen bg-gradient-to-b from-base-100 to-slate-800">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div>
      <h1 className="text-5xl font-extrabold">Hello,</h1>
      <p className="pt-6 text-lg pb-2 font-bold">Welcome to my website.</p>
      <p className="pb-2">This serves as a landing page to access:</p>
      <li>The documentation that I have written including compose files and system deployment</li>
      <li>To access various online services that I self-host - most of which can be found in the documentation</li>
      <li>As a homepage for the few projects that I have created to learn different languages and systems </li>
    </div>
  </div>
</div>
<Footer/>
  </main>
  </>
  );
}

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
        <script
          src="https://kit.fontawesome.com/c23e024fba.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <main>
        <Navbar />
        <div className="min-h-screen bg-base-100 flex justify-center pt-24 px-8">
          <div className="flex-col lg:flex-row-reverse">
            <div>
              <h1 className="text-5xl font-extrabold text-center text-secondary">
                Welcome,
              </h1>
              <p className="pt-6 text-lg font-bold text-center text-secondary">
                You either came here by mistake or you don't know where you are.
              </p>
              <p className=" text-lg pb-8 font-bold text-center text-secondary">
                I'm guessing you are going to be looking for one of these pages?
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mx-auto justify-center">
              <div className="card w-96 bg-primary shadow-xl border-8 border border-secondary">
                <figure className="px-10 pt-10">
                  <img
                    src="projects.png"
                    alt="Project Image"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Projects</h2>
                  <p>A dashboard for the projects that i run in my homelab</p>
                  <div className="card-actions">
                    <a
                      className="btn btn-secondary text-primary"
                      href="projects"
                    >
                      Projects
                    </a>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-primary shadow-xl border-8 border border-secondary">
                <figure className="px-10 pt-10">
                  <img
                    src="documents.png"
                    alt="Document Image"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Documents</h2>
                  <p>
                    Documentation that i have written to refer to from previous
                    projects that i have run and from stuff i still run in my
                    homelab
                  </p>
                  <div className="card-actions">
                    <a
                      className="btn btn-secondary text-primary"
                      href="https://docs.kieranmcdonnell.com"
                    >
                      Documentation
                    </a>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-primary shadow-xl border-8 border border-secondary">
                <figure className="px-10 pt-10">
                  <img
                    src="support.png"
                    alt="Support Image"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Support</h2>
                  <p>Go here to download the agent to get remote support</p>
                  <div className="card-actions">
                    <a
                      className="btn btn-secondary text-primary"
                      href="/support"
                    >
                      Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="pt-6 text-lg font-bold text-center text-secondary pb-4">
                Hopefully you needed one of these three, otherwise...
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

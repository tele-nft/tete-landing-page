import Head from "next/head";

import Terms from "../components/termservices";
import type, { NextPage } from "next";
import Header from "../components/header";
import Footer from "../components/footer";

const Term: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gun Hunter NFT</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <Header baseURL="/" />
      <Terms />
      <Footer />
    </div>
  );
};

export default Term;

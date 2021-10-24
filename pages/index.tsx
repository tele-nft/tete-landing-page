import Head from 'next/head';

import Ecosystem from '../components/ecosystem';
import Features from '../components/features';
import Header from '../components/header';
import Heros from '../components/heros';
import Introduction from '../components/introduction';
import TokenMetrics from '../components/token-metrics';
import CoreTeam from '../components/core-team';
import Footer from '../components/footer';
import RoadMap from '../components/road-map';
import PartnerFeature from 'components/partner-feature';

import type, { NextPage } from 'next';

const Home: NextPage = () => {
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

      <Header />
      <Introduction />
      <Ecosystem />
      <Features />
      <Heros />
      <TokenMetrics />
      <RoadMap />
      <CoreTeam />
      {/* <PartnerFeature /> */}
      <Footer />
    </div>
  );
};

export default Home;

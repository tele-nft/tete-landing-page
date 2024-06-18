import Banner from "components/banner";
import Comments from "components/comments";
import Footer from "components/footer";
import Heros from "components/heros";
import Introduction from "components/introduction";

import RoadMap from "components/road-map";
import { NextPage } from "next";
import { Container } from "reactstrap";

import Header from "../components/header";
import FAQ from "components/FAQ";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Introduction />
      <Comments />
      <RoadMap />
      <Heros />
      <FAQ />
      <Footer />
    </Container>
  );
};

export default Home;

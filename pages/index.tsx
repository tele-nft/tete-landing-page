import Banner from "components/banner";
import Comments from "components/comments";
import Footer from "components/footer";
import Heros from "components/heros";
import Introduction from "components/introduction";
import Resources from "components/resources";
import RoadMap from "components/road-map";
import { NextPage } from "next";
import { Container } from "reactstrap";

import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Introduction />
      <Comments />
      <RoadMap />
      <Heros />
      <Resources />
      <Footer />
    </Container>
  );
};

export default Home;

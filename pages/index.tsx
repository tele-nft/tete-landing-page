import Banner from "components/banner";
import Comments from "components/comments";
import Heros from "components/heros";
import Introduction from "components/introduction";
import RoadMap from "components/road-map";
import { NextPage } from "next";
import FAQ from "components/FAQ";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <Introduction />
      <Comments />
      <RoadMap />
      <Heros />
      <FAQ />
    </>
  );
};

export default Home;

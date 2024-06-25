import React from "react";
import {
  Auctions_categories,
  Feature_collections,
  NewseLatter,
  Partners,
  Top_collection,
} from "../../components/component";
import Meta from "../../components/Meta";
import Hero_4 from "../../components/hero_4";
import CoverflowCarousel from "../../components/coverflowCarousel";

const Home_4 = () => {
  return (
    <>
      <Hero_4 />
      <CoverflowCarousel />
      <Top_collection />
      <Auctions_categories />
      <NewseLatter bgWhite={true} />
      <Feature_collections />
      <Partners />
    </>
  );
};

export default Home_4;

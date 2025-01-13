import HeroSlide from "@/utils/HeroSlide";
import ItemList from "@/utils/ItemList";
import React from "react";
import Banner from "./Banner";
import ItemsFilters from "@/utils/ItemsFilter";
import Review from "./Review";
import NewsLetter from "@/utils/NewsLetter";
import { AccordionSample } from "@/utils/Accordion";
const Home: React.FunctionComponent = () => {
  return (
    <>
      <div className="w-full h-auto md:h-[80vh] py-16 bg-pink">
        <HeroSlide />
      </div>
      <ItemList />
      <Banner />
      <ItemsFilters />
      <Review />
      <AccordionSample />
      <NewsLetter />
    </>
  );
};

export default Home;

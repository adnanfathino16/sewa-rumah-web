import React from "react";

// import layouts
import Layouts from "../components/Layouts/Layouts";
// import components
import Banner from "../components/Fragments/Banner";
import HouseList from "../components/Fragments/HouseList";

const Home = () => {
  return (
    <Layouts>
      <div className="min-h-[1800px]">
        <Banner />
        <HouseList />
      </div>
    </Layouts>
  );
};

export default Home;

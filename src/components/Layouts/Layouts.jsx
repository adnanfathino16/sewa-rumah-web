import React from "react";

// import components
import Header from "../Fragments/Header";
import Footer from "../Fragments/Footer";

const Layouts = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layouts;

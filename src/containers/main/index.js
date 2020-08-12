import React from "react";
import { Navbar } from "../../components";
import { SectionOne, SectionTwo, SectionThree, SectionFour } from "../Home/";
import "../../styles/common/layout.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export default App;

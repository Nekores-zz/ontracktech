import React from "react";
import { Navbar } from "../../components";
import { SectionOne, SectionTwo } from "../Home/";
import "../../styles/common/layout.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default App;

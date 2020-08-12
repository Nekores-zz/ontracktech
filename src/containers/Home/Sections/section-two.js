//jshint esversion:6

import React, { Component } from "react";
import { Button } from "../../../components";

class SectionTwo extends Component {
  render() {
    return (
      <section className="banking-smarter">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>
                We work with <br />
                companies of all types.
              </h2>
              <p>From mobile apps handling image manipulation to social networks we have you covered.</p>
              <Button text="Start now" variant="btn-light" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionTwo;

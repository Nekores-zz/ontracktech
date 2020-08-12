//jshint esversion:6

import React, { Component } from "react";
import { Button } from "../../../components";

class SectionTwo extends Component {
  render() {
    return (
      <section class="banking-smarter">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h2>
                We work with <br />
                companies of all types.
              </h2>
              <p>From mobile apps handling image manipulation to social networks we have you covered.</p>
              <Button text="Start now" icon={<img src="images/icons/right-arrow.svg" class="ml-2" alt="arrow" />} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionTwo;

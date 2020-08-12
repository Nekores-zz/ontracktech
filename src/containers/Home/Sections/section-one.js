//jshint esversion:6

import React, { Component } from "react";
import "../../../styles/containers/home.css";
import homeVector from "../../../assets/images/home-vector.svg";
import { Button } from "../../../components";

class SectionOne extends Component {
  render() {
    return (
      <section class="section-bank-aproch">
        <div class="container h-100">
          <div class="row align-items-center h-100">
            <div class="col-md-6 order-2 order-sm-1">
              <img src={homeVector} class="img-fluid banking-aproch" alt="banking-aproch" />
            </div>
            <div class="col-md-6 order-1 order-sm-2">
              <div class="heading-content">
                <h1 class="">Fueling your product smarter and simpler way.</h1>
                <p class="pt-3">
                  Ontracktech.io allows entrepreneurs to have their MVP professionally built for discounted rates (or completely
                  free) with support finding users, finding investors, and improving your product.
                </p>
                <h2 class="finin-title mt-4">Subscribe us and get exciting benefits!</h2>
                <div class="pt-4">
                  <Button text="Join us" icon={<img src="images/icons/right-arrow.svg" class="ml-2" alt="arrow" />}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionOne;

//jshint esversion:6

import React, { Component } from "react";
import "../../../styles/containers/home.css";
import homeVector from "../../../assets/images/home-vector.svg";
import { Button } from "../../../components";

class SectionOne extends Component {
  render() {
    return (
      <section className="section-bank-aproch">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-md-6 order-2 order-sm-1">
              <img src={homeVector} className="img-fluid banking-aproch" alt="banking-aproch" />
            </div>
            <div className="col-md-6 order-1 order-sm-2">
              <div className="heading-content">
                <h1 className="">Fueling your product smarter and simpler way.</h1>
                <p className="pt-3">
                  Ontracktech.io allows entrepreneurs to have their MVP professionally built for discounted rates (or completely
                  free) with support finding users, finding investors, and improving your product.
                </p>
                <h2 className="finin-title mt-4">Subscribe us and get exciting benefits!</h2>
                <div className="pt-4">
                  <Button
                    variant="btn-dark"
                    text="Join us"
                    icon={<img src="images/icons/right-arrow.svg" className="ml-2" alt="arrow" />}
                  />
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

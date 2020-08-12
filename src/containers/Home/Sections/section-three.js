import React, { Component } from "react";
import vector3 from "../../../assets/images/section-three-vector3.svg";

class SectionThree extends Component {
  render() {
    return (
      <section class="approach">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="approach-content">
                <h2 class="pt-2">Approach.</h2>
                <h3 class="pt-2">Analyze your idea to refine the ideal functions</h3>
                <p class="pt-3">
                  Our expert team analyzes every project to see if it is something we are capable of helping with. Applications
                  are carefully reviewed to ensure we are able to help take you to the next level.
                </p>
                <p class="pt-0">
                  Our team will analyze your idea to refine the ideal functions to produce an MVP and take this product to the
                  next stage.
                </p>
              </div>
            </div>
            <div class="col-md-5 offset-md-2">
              <div class="approach-image">
                <img src="images/saving-account.png" class="img-fluid" alt="saving account" />
              </div>
            </div>
          </div>
          <div class="row mt100">
            <div class="col-md-5 order-4 order-sm-3">
              <div class="saving-hard-img">
                <img src="images/saving-hard.png" class="img-fluid" alt="saving-hard" />
              </div>
            </div>
            <div class="col-md-5 offset-md-2 order-3 order-sm-4">
              <div class="approach-content saving-hard-content saving-ac">
                <h2 class="pt-4">What next.</h2>
                <h3 class="pt-3">We will refine your idea and push towards</h3>
                <p class="pt-3">
                  After developing your MVP we will help find you your initial beta users if you do not have some ready. After
                  receiving extensive user feedback we will refine your idea and push towards building V1.
                </p>
              </div>
            </div>
          </div>
          <div class="row mt100">
            <div class="col-md-5">
              <div class="approach-content">
                <h2 class="pt-4">How it works.</h2>
                <h3 class="pt-3">This generally will cover building your MVP</h3>
                <p class="pt-3">
                  We cover the majority (or all) development costs in exchange for an equity stake in your company. This
                  generally will cover building your MVP and possibly V1 of your idea as well.
                </p>
              </div>
            </div>
            <div class="col-md-5 offset-md-2">
              <div class="approach-image">
                <img src={vector3} class="img-fluid" alt="invest" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionThree;

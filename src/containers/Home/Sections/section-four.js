import React, { Component } from "react";

class SectionFour extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <section className="about-more">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="about-content">
                  <h3>More about us & our services.</h3>
                  <p className="mt-4">
                    Many entreprenuers spend endless time and money on building features that their users dont really need. What
                    features actually benefit the user or are they just “cool to have”?
                  </p>
                  <img src="images/security.png" className="img-fluid mt-2 security-img" alt="security" />
                </div>
              </div>
              <div className="col-md-2" />
              <div className="col-md-6 hidden-xs">
                <div className="about-cards">
                  <ul className="list-unstyled">
                    <li className="media">
                      <img className="mr-4 img-fluid" src="images/icons/icon-security.png" alt="Plan" />
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Plan</h5>
                        <p className="mt-3">
                          Many entreprenuers spend endless time and money on building features that their users dont really
                          need.
                        </p>
                      </div>
                    </li>
                    <li className="media my-4">
                      <img className="mr-4 img-fluid" src="images/icons/icon-card.png" alt="Teams" />
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Team</h5>
                        <p className="mt-3">
                          Are you out of your element and need new people involved to take you to the next level?
                        </p>
                      </div>
                    </li>
                    <li className="media">
                      <img className="mr-4" src="images/icons/icon-banking.png" alt="Manage" />
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Manage</h5>
                        <p className="mt-3">
                          Ask yourself the serious questions. Where do you want the product in 1 year? 5 years? 10 years? What
                          is the endgame for the product?
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SectionFour;

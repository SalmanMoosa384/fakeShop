import React from "react";

export const Feature = () => {
  return (
    <>
      <div className="section section-margin">
        <div className="container">
          <div className="feature-wrap">
            <div className="row row-cols-lg-4 row-cols-xl-auto row-cols-sm-2 row-cols-1 justify-content-between mb-n5">
              <div
                className="col mb-5 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="feature">
                  <div className="icon text-primary align-self-center">
                    <img src="theme/assets/images/feature-icon-2.webp" />
                  </div>
                  <div className="content">
                    <h5 className="title">Free Shipping</h5>
                    <p>Free shipping on all order</p>
                  </div>
                </div>
              </div>
              <div
                className="col mb-5 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="feature">
                  <div className="icon text-primary align-self-center">
                    <img src="theme/assets/images/feature-icon-3.png" />
                  </div>
                  <div className="content">
                    <h5 className="title">Support 24/7</h5>
                    <p>Support 24 hours a day</p>
                  </div>
                </div>
              </div>
              <div
                className="col mb-5 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="feature">
                  <div className="icon text-primary align-self-center">
                    <img src="theme/assets/images/feature-icon-4.png" />
                  </div>
                  <div className="content">
                    <h5 className="title">Money Return</h5>
                    <p>Back guarantee under 5 days</p>
                  </div>
                </div>
              </div>
              <div
                className="col mb-5 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <div className="feature">
                  <div className="icon text-primary align-self-center">
                    <img src="theme/assets/images/feature-icon-1.png" />
                  </div>
                  <div className="content">
                    <h5 className="title">Order Discount</h5>
                    <p>Onevery order over $150</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;

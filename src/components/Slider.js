import React from "react";

export const Slider = () => {
  return (
    <>
      <div className="section">
        <div className="hero-slider">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="hero-slide-item-two swiper-slide swiper-slide-duplicate-active">
                <div className="hero-slide-bg">
                  <img
                    src="https://template.hasthemes.com/destry/destry/assets/images/slider/slide-2.jpg"
                    alt=""
                  />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="hero-slide-content col-lg-8 col-xl-6 col-12 text-lg-center text-left">
                      <h2 className="title">
                        Fashion New <br />
                        Collection
                      </h2>
                      <p>Up to 70% off selected Product</p>
                    </div>
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

export default Slider;

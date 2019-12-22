import React, { Component } from "react";
import Slider from "react-slick";

import './slider.scss';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <Slider {...settings}>
                  <div>
                    <div className="slider__img-wrap">
                      <img src="1.jpg" alt="" />
                    </div>
                  </div>

                  <div>
                    <div className="slider__img-wrap mt">
                      <img src="2.png" alt="" />
                    </div>
                  </div>

                  <div>
                    <div className="slider__img-wrap">
                      <img src="3.jpg" alt="" />
                    </div>
                  </div>

                  <div>
                    <div className="slider__img-wrap">
                      <img src="4.png" alt="" />
                    </div>
                  </div>

                  <div>
                    <div className="slider__img-wrap mt">
                      <img src="5.png" alt="" />
                    </div>
                  </div>

                  <div>
                    <div className="slider__img-wrap">
                      <img src="6.png" alt="" />
                    </div>
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
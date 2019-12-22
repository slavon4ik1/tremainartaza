import React from "react";
import SimpleSlider from '../slider';

import "./certificate.scss";

function Certificate() {
  return (
    <section className="certeficate">
      <SimpleSlider/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="certeficate__img-wrap">
              <img src="1.jpg" alt="" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="certeficate__img-wrap">
              <img src="2.png" alt="" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="certeficate__img-wrap">
              <img src="3.jpg" alt="" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="certeficate__img-wrap">
              <img src="4.png" alt="" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="certeficate__img-wrap">
              <img src="5.png" alt="" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="certeficate__img-wrap">
              <img src="6.png" alt="" />
            </div>
          </div>
          <div className="col-12">
            <h2>We Work For You.</h2>
            <div className="col-12">
              <div className="certeficate__text-wrap">
                <p>
                  Employment laws are complicated, and they're changing every
                  day. We bring clarity, direction, and sense to employment
                  disputes.
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="certeficate__text-wrap">
                <p>
                  Every day, we advocate for individuals - employees and
                  entrepreneurs. We work to secure fair treatment in the
                  workplace, and get results inside and outside of the
                  courtroom. Job problems are stressful enough. Let us help you
                  navigate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificate;

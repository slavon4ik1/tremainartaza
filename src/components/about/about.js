import React from "react";

import "./about.scss";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="about__wrap">
              <div className="about__wrap-img">
                <img src="about.jpg" alt="about" />
              </div>
              <h3>About</h3>
              <p>
                Find out about our mission, our methods, and the results of our
                years of advocacy.
              </p>
              <a href="index.html">Learn More&nbsp;→</a>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="about__wrap">
              <div className="about__wrap-img">
                <img src="talk.jpg" alt="about" />
              </div>
              <h3>About</h3>
              <p>
                Find out about our mission, our methods, and the results of our
                years of advocacy.
              </p>
              <a href="index.html">Learn More&nbsp;→</a>
            </div>
          </div>
          <div className="col-12">
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

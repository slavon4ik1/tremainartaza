import React from 'react';

import './footer.scss';


function Footer() {
  return (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer__info text-center">
            <a href="#header" id="top">Back to top</a>
            <p>TREMAIN ARTAZA PLLC, 13140 COIT ROAD, DALLAS, TX, 75240, UNITED STATES(469) 573-0229 <br/>
              <a className="footer__link" href="index.html">INFO@TREMAINARTAZA.COM</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;

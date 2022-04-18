import React from "react";

function Footer() {
  return (
    <footer className="ps-footer ps-footer--1">
      <div className="container">
        <div className="ps-footer__middle">
          <div className="ps-footer--contact">
            <h5 className="ps-footer__title">Need help?</h5>
            <div className="ps-footer__fax">
              <i className="icon-telephone" />
              0020 500 – MYMEDI – 000
            </div>
            <p className="ps-footer__work">
              Monday – Friday: 9:00 - 20:00
              <br />
              Saturday: 11:00 – 15:00
            </p>
            <p>
              <a
                className="ps-footer__email"
                href="http://nouthemes.net/cdn-cgi/l/email-protection#d9bab6b7adb8baad99bca1b8b4a9b5bcf7bab6b4"
              >
                <i className="icon-envelope" />
                <span
                  className="__cf_email__"
                  data-cfemail="a2c1cdccd6c3c1d6e2c7dac3cfd2cec78cc1cdcf"
                >
                  contact@contact.com
                </span>
              </a>
            </p>
          </div>
        </div>
        <div className="ps-footer--bottom">
          <div className="row">
            <div className="col-12 col-md-6">
              <p>
                Copyright © {new Date().getFullYear()} kadismile. All Rights
                Reserved
              </p>
            </div>
            <div className="col-12 col-md-6 text-right">
              <img src="img/payment.png" alt="" />
              <img
                className="payment-light"
                src="img/payment-light.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

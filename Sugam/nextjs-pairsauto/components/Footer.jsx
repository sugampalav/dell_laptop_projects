import React from "react";
import Button from "../elements/Button";
import { Link } from "next/link";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the PairsAuto newsletter to receive our best deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>
              Address&nbsp;<i className="fas fa-map-marked-alt"></i>
            </h2>
            <Link href="/">
              <a>3370 32 Street NE, Calgary, AB, T1Y 6B9</a>
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>
              Contact Us&nbsp;<i className="fas fa-at"></i>
            </h2>
            <Link href="/">
              <a>+1 (403) 800-1806</a>
            </Link>
            <Link href="/">
              <a>info@pairsauto.com</a>
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>
              Timing&nbsp;<i className="far fa-clock"></i>
            </h2>
            <Link href="/">
              <a>Mon-Sat: 9:30 am – 6:30 pm, Sun: 12 pm - 5 pm</a>
            </Link>
          </div>
        </div>
      </div>
      <section className="footer-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10025.58723631775!2d-113.9876!3d51.082684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ace9b12ac2cac71!2sPairs%20Auto!5e0!3m2!1sen!2sin!4v1639397866376!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="location"
        ></iframe>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link href="/" className="social-logo">
              <a>PAIRSAUTO</a>
            </Link>
          </div>
          <small className="website-rights">PAIRSAUTO © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              href={{
                pathname: "https://www.facebook.com/PairsAuto",
              }}
              target="_blank"
              aria-label="Facebook"
            >
              <a>
                <i className="fab fa-facebook-f" />
              </a>
            </Link>
            <Link
              className="social-icon-link instagram"
              href={{
                pathname: "https://www.instagram.com/pairsauto/",
              }}
              target="_blank"
              aria-label="Instagram"
            >
              <a>
                <i className="fab fa-instagram" />
              </a>
            </Link>
            <Link
              className="social-icon-link youtube"
              href={{
                pathname:
                  "https://www.youtube.com/channel/UCmhuM4ESgFY_5PXb8vFTbsw/featured",
              }}
              target="_blank"
              aria-label="Youtube"
            >
              <a>
                <i className="fab fa-youtube" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

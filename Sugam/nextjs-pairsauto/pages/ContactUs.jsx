import React from "react";

import { Formik, Field, Form } from "formik";
import { Row, Col, Stack } from "react-bootstrap";
import CheckBox from "../elements/CheckBox";

const ContactUs = () => {
  const onSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
    console.log("Form data", values);
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="title">
          <h1>Contact Us</h1>
        </div>

        <form action="/api/form" method="post">
          <fieldset>
            <legend>Get in touch</legend>

            <div className="sub-title">Personal Details:</div>
            <div className="resp">
              <label className="input">
                <input
                  className="input__field"
                  type="text"
                  id="first"
                  name="first"
                  placeholder=" "
                  required
                />
                <span className="input__label">First Name</span>
              </label>

              <label className="input">
                <input
                  className="input__field"
                  type="text"
                  id="last"
                  name="last"
                  placeholder=" "
                />
                <span className="input__label">Last Name</span>
              </label>
            </div>

            <div className="resp">
              <label className="input">
                <input
                  className="input__field"
                  type="text"
                  id="mobile"
                  name="mobile"
                  maxLength="20"
                  placeholder=" "
                  required
                />
                <span className="input__label">Mobile Number</span>
              </label>

              <label className="input">
                <input
                  className="input__field"
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                />
                <span className="input__label">E-mail</span>
              </label>
            </div>

            <div className="sub-title">Car Details:</div>
            <div className="resp">
              <label className="input">
                <input
                  className="input__field"
                  type="year"
                  id="caryear"
                  name="caryear"
                  placeholder=" "
                />
                <span className="input__label">Car Year</span>
              </label>

              <label className="input">
                <input
                  className="input__field"
                  type="year"
                  id="makemodel"
                  name="makemodel"
                  placeholder=" "
                />
                <span className="input__label">Make - Model</span>
              </label>
            </div>

            <div className="sub-title">Service Required:</div>
            <div className="grid-container">
              <div className="disp-flex">
                <CheckBox name="Oil Change" value="required" />
                <span>Oil Change</span>
              </div>
              <div className="disp-flex">
                <CheckBox name="Tire Change" value="Tire Change" />
                <span>Tire Change</span>
              </div>
              <div className="disp-flex">
                <CheckBox name="AC recharge" value="AC recharge" />
                <span>AC recharge</span>
              </div>
              <div className="disp-flex">
                <CheckBox name="Wheel Alignment" value="Wheel Alignment" />
                <span>Wheel Alignment</span>
              </div>
              <div className="disp-flex">
                <CheckBox name="Car Detailing" value="Car Detailing" />
                <span>Car Detailing</span>
              </div>
              <div className="disp-flex">
                <CheckBox
                  name="Windshield Replacement"
                  value="Windshield Replacement"
                />
                <span>Windshield Replacement</span>
              </div>
              <div className="disp-flex">
                <CheckBox
                  name="Mechanical Repairs"
                  value="Mechanical Repairs"
                />
                <span>Mechanical Repairs</span>
              </div>
              <div className="disp-flex">
                <CheckBox name="Car Service" value="Car Service" />
                <span>Car Service</span>
              </div>
            </div>

            <div className="sub-title">Booking Details:</div>
            <label className="input">
              <input
                className="input__field"
                type="datetime-local"
                id="date"
                name="date"
                placeholder=" "
              />
              <span className="input__label">Preferred Date</span>
            </label>

            <label className="input">
              <input
                className="input__field"
                type="text"
                id="comment"
                name="comment"
                placeholder=" "
              />
              <span className="input__label">Comment</span>
            </label>

            <div className="button-group">
              <button type="submit">Send</button>
              <button type="reset">Reset</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

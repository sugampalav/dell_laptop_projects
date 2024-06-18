import React from "react";
import { Formik, Field, Form } from "formik";

import { Row, Col, Stack } from "react-bootstrap";
import axios from "axios";

function ContactUs() {
    const registerHandler = async (values) => {
        const payload = values;
        try {
            const response = await axios.post("https://formsubmit.co/tanukad14@email.com", payload);
            console.log(response.data);
        } catch (e) {
            console.log(e);
            alert(e);
        }
    };

    return (
        <div className="container">
            <div className="contact-wrapper">
                <Row className="justify-content-center">
                    <Col md="4" lg="3">
                        <h1 className="title">Contact Us</h1>
                    </Col>
                </Row>

                <Formik
                    className="form-control"
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                    }}
                // onSubmit={registerHandler()}
                >
                    <Form action="https://formsubmit.co/tanukad14@gmail.com" method="POST">
                        <input type="hidden" name="_template" value="table"></input>
                        <input type="text" name="_honey" style={{ display: "none" }} />
                        <Row className="align-items-center">
                            <Col md={3} lg={2}>
                                <label htmlFor="firstName" className="label-title">
                                    First Name :
                                </label>
                            </Col>
                            <Col>
                                <Field
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="input-text"
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col md={3} lg={2}>
                                <label htmlFor="lastName" className="label-title">
                                    Last Name :
                                </label>
                            </Col>
                            <Col>
                                <Field
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="input-text"
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col md={3} lg={2}>
                                <label htmlFor="lastName" className="label-title">
                                    Mobile Number :
                                </label>
                            </Col>
                            <Col>
                                <Field
                                    id="mobilenumber"
                                    name="mobilenumber"
                                    placeholder="+1"
                                    className="input-text"
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col md={3} lg={2}>
                                <label htmlFor="email" className="label-title">
                                    Email :
                                </label>
                            </Col>
                            <Col>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input-text"
                                    type="email"
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col>
                                <label className="label-title">Service Requested :</label>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col sm md>
                                <Field
                                    type="checkbox"
                                    name="service"
                                    value="Oil Change"
                                    className="input-checkbox"
                                />
                                <label>Oil Change</label>
                            </Col>
                            <Col sm md>
                                <Field
                                    type="checkbox"
                                    name="service"
                                    value="Tire Change"
                                    className="input-checkbox"
                                />
                                <label>Tire Change</label>
                            </Col>
                            <Col sm md>
                                <Field
                                    type="checkbox"
                                    name="service"
                                    className="input-checkbox"
                                    value="AC Recharge"
                                />
                                <label>AC Recharge</label>
                            </Col>
                            <Col sm md>
                                <Field
                                    type="checkbox"
                                    name="service"
                                    value="Wheel Alignment"
                                    className="input-checkbox"
                                />
                                <label>Wheel Alignment</label>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col sm md>
                                <Field
                                    type="checkbox"
                                    name="service"
                                    value="Car Detailing"
                                    className="input-checkbox"
                                />
                                <label>Car Detailing</label>
                            </Col>
                            <Col sm md>
                                <Field
                                    type="checkbox"
                                    name="service"
                                    value="Windshield Replacement"
                                    className="input-checkbox"
                                />
                                <label>Windshield Replacement</label>
                            </Col>
                            <Col sm md>
                                <Field
                                    type="checkbox"
                                    name="service"
                                    value="Mechanical Repairs"
                                    className="input-checkbox"
                                />
                                <label>Mechanical Repairs</label>
                            </Col>
                            <Col sm md>
                                <Field
                                    type="checkbox"
                                    name="service"
                                    value="Car Service"
                                    className="input-checkbox"
                                />
                                <label>Car Service</label>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col md={3} lg={2}>
                                <label htmlFor="carDetails" className="label-title">
                                    Car Details :
                                </label>
                            </Col>
                            <Col>
                                <Field
                                    id="carYear"
                                    name="carYear"
                                    placeholder="Year - YYYY"
                                    className="input-text"
                                />
                            </Col>
                            <Col>
                                <Field
                                    id="carModel"
                                    name="carModel"
                                    placeholder="Make - Model"
                                    className="input-text"
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col md={3} lg={2}>
                                <label htmlFor="carDetails" className="label-title">
                                    Preferred Date :
                                </label>
                            </Col>
                            <Col>
                                <Field
                                    id="prefDate"
                                    name="prefDate"
                                    placeholder="DD/MM/YYYY"
                                    className="input-text"
                                    type="date"
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col>
                                <label className="label-title">Comments :</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    id="comments"
                                    name="comments"
                                    placeholder="Type here..."
                                    className="input-text"
                                />
                            </Col>
                        </Row>
                        <Stack gap={2} className="col-md-5 mx-auto">
                            <button type="button">
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <span>Submit</span>
                            </button>
                        </Stack>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default ContactUs;

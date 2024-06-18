import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { BsSpeedometer, BsFillGearFill, BsCalendarMonthFill, BsPaintBucket } from 'react-icons/bs';
import sample from '../images/test.png';


function InventoryCard(props) {
    console.log(props)

    const formatCurrency = (amount) => {
        const formattedCurrency = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD",
            minimumFractionDigits: 0
        }).format(amount);
        return formattedCurrency;
    }

    const formatDistance = (kms) => {
        const formattedDistance = kms.toLocaleString(undefined, { maximumFractionDigits: 2 }) + ' Kms';
        return formattedDistance;
    }

    return (
        <div className='inventory-card'>


            <Card className="shadow-lg rounded-lg overflow-hidden">

                {/* Carousel for Card */}
                <Container fluid className="bg-gray-200 font-sans px-0">
                    <div className="d-flex  vh-50">
                        <div className="max-w-sm w-100 sm:w-50 lg:w-1/3 py-6 px-0">
                            <div className="shadow-xl rounded-lg overflow-hidden">
                                <Carousel interval={null}>
                                    {props ?
                                        props.PhotoURLs.PhotoURL.map((imgurl, index) => {
                                            return (
                                                <Carousel.Item key={index}>
                                                    <img
                                                        className="d-block w-100 img-card img-fluid"
                                                        src={imgurl}
                                                        alt={props.Model}
                                                    ></img>
                                                </Carousel.Item>
                                            )
                                        })
                                        :
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 img-card img-fluid"
                                                src={sample}
                                                alt={props.Model}
                                            ></img>
                                        </Carousel.Item>
                                    }

                                </Carousel>
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Car Details */}
                <div className="p-4">
                    <p className="uppercase lead tracking-wide  font-weight-bold text-black">{props.Year} &bull; {props.Make ? props.Make : "-"}  &bull; {props.Model ? props.Model : "-"} {props.ModelNum}</p>
                    <p className="display-6 text-black">{props.ShowroomPrice
                        ? formatCurrency(props.ShowroomPrice)
                        : "Contact for price"}</p>
                    <p className="text-muted">{props.Engine ? props.Engine : "-"}</p>
                    <p className="text-muted pt-1">{props.VIN ? "VIN : " + props.VIN : "-"}</p>

                </div>

                {/* Car odometer details */}
                <Row className="d-flex p-4 border-top border-bottom border-gray-300 text-black m-0">
                    <Col className="d-flex align-items-center">
                        <BsCalendarMonthFill className="h-26 w-26  m-1" />
                        <p className='text-black-50'>
                            <span className="text-black font-weight-bold">{props.StockNum ? "Stock # : " + props.StockNum : "NA"}</span>
                        </p>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <BsSpeedometer className="h-26 w-26  m-1" />
                        <p className=' text-black-50'>
                            <span className="text-black font-weight-bold">{props.Kilometers ? formatDistance(props.Kilometers) : "NA"}</span>
                        </p>
                    </Col>
                </Row>

                <Row className="d-flex p-4 border-top border-bottom border-gray-300 text-black m-0">

                    <Col className="d-flex align-items-center">
                        <BsPaintBucket className="h-26 w-26  m-1" />
                        <p className='text-black-50 '>
                            <span className="text-black font-weight-bold long-and-truncated ">{props.ExtColor_Factory ? props.ExtColor_Factory : props.ExtColor}</span>
                        </p>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <BsFillGearFill className="h-26 w-26  m-1" />
                        <p className=' text-black-50'>
                            <span className="text-black font-weight-bold">{props.Transmission && props.Drivetrain ? props.Transmission + "-" + props.Drivetrain : "Unavailable"}</span>
                        </p>
                    </Col>
                </Row>

                {/* Link know more */}
                <div className="bg-warning text-black">

                    <Row className="align-items-center justify-content-center">
                        <Col className="">
                            <a href={props.VdpUrl} target="_blank" className='text-black p-20' rel="noreferrer" >
                                <div className="text-xs uppercase font-weight-bold">Know more on CarDeals4U</div>
                            </a>
                            <p className=' text-black-75 pt-1'>Call us : (587) 333-4433</p>
                        </Col>
                    </Row>
                </div>

            </Card>



        </div>
    )
}

export default InventoryCard
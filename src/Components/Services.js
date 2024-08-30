import React from 'react';
import { Header } from '../Reusable/Header';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Footer } from '../Reusable/Footer';

const services = [
  {
    title: 'Book Review',
    image: '/images/bookr.jpg', // Replace with the correct image path
    link: '/book-reviews'
  },
  {
    title: 'Book Promotion',
    image: '/images/promotion.jpg', // Replace with the correct image path
    link: '/book-promotion'
  },
  {
    title: 'Book Cover Design',
    image: '/images/Cover.png', // Replace with the correct image path
    link: '/book-cover'
  },
  {
    title: 'Proof Reading',
    image: '/images/proof.jpg', // Replace with the correct image path
    link: '/proof-reading'
  },
  {
    title: 'Bulk Reviews',
    image: '/images/bulk.png', // Replace with the correct image path
    link: '/bulk-reviews'
  }
];

export const Services = () => {
  const handleCardClick = (service) => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    window.location.href = service.link; // Navigate to the link
  };

  return (
    <>
      <Header />
      <Container className="our-services-section text-center d-flex flex-column align-items-center" fluid>
        <h2 className="our-services-title">Our Services</h2>
        <p className="our-services-description">Check what services we offer to Authors and Publishers 🧑‍💻</p>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="d-flex justify-content-center my-3">
              <Card
                onClick={() => handleCardClick(service)}
                className="service-card"
              >
                <Card.Img variant="top" src={service.image} style={{ height: "80px", width: "80px" }} className="service-card-image" />
                <Card.Body>
                  <Card.Title className="service-card-title">{service.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

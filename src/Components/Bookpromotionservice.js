import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
// import './BookPromotion.css';  // We'll create this CSS file for custom styles

export const Bookpromotionservice = () => {
  return (
    <Container className="book-promotion-container" fluid>
      <h2 className="promotion-title">Book Promotion</h2>
      <p className="promotion-subtitle">Here are the book promotion packages offered by Reader Den</p>
      
      <Row>
        <Col md={4} className="package-card">
          <Card className="silver-plan" style={{backgroundColor:"lightgrey"}}>
            <Card.Body>
              <Card.Title>Silver Plan</Card.Title>
              <ul>
                <li>One Shoutout Post</li>
              </ul>
              <Card.Link href="#">See all details</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="package-card">
          <Card className="gold-plan" style={{backgroundColor:"#fae14f"}}>
            <Card.Body>
              <Card.Title>Gold Plan</Card.Title>
              <ul>
                <li>6 Posts</li>
                <li>Duration: 2-3 Weeks</li>
                <li>Instagram & all platforms</li>
                <li>Promotion of all platforms</li>
                <li>Personal suggestions</li>
              </ul>
              <Card.Link href="#">See all details</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="package-card">
          <Card className="platinum-plan" style={{backgroundColor:"#eef6f9"}}>
            <Card.Body>
              <Card.Title>Platinum Plan</Card.Title>
              <ul>
                <li>Pre-launch promotion</li>
                <li>12 Posts</li>
                <li>4-5 Weeks</li>
                <li>Book Review inclusions</li>
                <li>Instagram & all platforms</li>
                <li>Personal suggestions</li>
              </ul>
              <Card.Link href="#" >See all details</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="plan-details">
        {/* Similar structure for plan details */}
        {/* Silver Plan Details */}
        <h3>Silver Plan</h3>
        <p>This package contains a shoutout post for the book on our Instagram page...</p>
        <h3>Gold Plan</h3>
        <p>This package is suitable for authors who have launched their book...</p>
        <h3>Platinum Plan</h3>
        <p style={{marginBottom:"0px", paddingBottom:"30px"}}>This package is specially designed for authors who are just about to launch their book...</p>
      </div>
    </Container>
  );
};

// export default BookPromotion;

import React from 'react';
import { Card, Container } from 'react-bootstrap';

export const Bookcoverservice = () => {
  return (
    <Container className="custom-book-promo-container" style={{marginTop:"0px"}} fluid>
      <h2 className="custom-book-promo-heading text-center">Custom Book Cover Design</h2>
      <p className="custom-book-promo-text text-center">
        It's often said, "A picture is worth a thousand words," and this couldn't be more true for book covers.
        Let's collaborate to design a cover that not only catches the eye but also tells your book's story in a glance!
      </p>
      <h4 className="custom-book-promo-subheading text-center font-weight-bold">Explore some of our recent cover designs 👇</h4>
      <div className="row justify-content-center mt-4">
        <div className="col-md-4 mb-4">
          <Card className="custom-book-promo-card">
            <Card.Img variant="top" src="/images/lostkingdom.jpg" />
            <Card.Body>
              <Card.Title className="custom-book-promo-card-title">The Lost Kingdom</Card.Title>
              <Card.Text className="custom-book-promo-card-text">By John Doe</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="custom-book-promo-card">
            <Card.Img variant="top" src="/images/warrior.png" />
            <Card.Body>
              <Card.Title className="custom-book-promo-card-title">The Warrior's Path</Card.Title>
              <Card.Text className="custom-book-promo-card-text">By Jane Smith</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <p className="custom-book-promo-text text-center">
        Reach out to us on <a href="https://www.instagram.com" className="custom-book-promo-link">Instagram</a> or <a href="https://www.whatsapp.com" className="custom-book-promo-link">WhatsApp</a> to learn more about our design packages.
      </p>

      <div className="custom-testimonial-block mt-5">
        <div className="custom-testimonial-content">
          <img
            src="/images/girl.png"
            alt="Client"
            className="custom-testimonial-img"
          />
          <div>
            <div className="custom-testimonial-author">Jane Smith</div>
            <div className="custom-testimonial-author-title">Author of The Warrior's Path</div>
            <p className="custom-testimonial-text">
              "The team at Reader Den did an incredible job with my book cover. They captured the essence of my story and brought it to life visually. I highly recommend their services to any author!"
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

// export default BookPromotion;

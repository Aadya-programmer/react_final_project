import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
// import './Footer.css'; // Ensure you have a CSS file for custom styles

export const Footer = () => {
    return (
        <footer className="footer">
            <Container fluid>
                <Row className="footer-top">
                    <Col md={4} className="footer-logo">
                        <img src="/images/booklogo.png" alt="Reader Den Logo" className="logo-img" />
                        <p className="footer-quote">घर में जितनी किताबें, घर में उतने घर।</p>
                    </Col>
                    <Col md={2} className="footer-section">
                        <h5>Pages</h5>
                        <ul>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#reviews">Book Reviews</a></li>
                            <li><a href="#recommendations">Book Recommendations</a></li>
                            <li><a href="#fun">Fun Corner</a></li>
                            <li><a href="#story">Our Story</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="footer-section">
                        <h5>Services</h5>
                        <ul>
                            <li><a href="#book-review">Book Review</a></li>
                            <li><a href="#promotion">Book Promotion Packages</a></li>
                            <li><a href="#video-review">Video Review</a></li>
                            <li><a href="#trailer">Book Trailer</a></li>
                            <li><a href="#cover-design">Book Cover Design</a></li>
                            <li><a href="#proof-reading">Proof Reading</a></li>
                            <li><a href="#bulk-reviews">Bulk Reviews</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="footer-section">
                        <h5>Contact</h5>
                        <p style={{color:"white"}}>Email: <a href="mailto:support@readerden.com">support@readerden.com</a></p>
                        <div className="social-icons">
                            <a href="#whatsapp"><FaWhatsapp /></a>
                            <a href="#instagram"><FaInstagram /></a>
                            <a href="#facebook"><FaFacebookF /></a>
                            <a href="#twitter"><FaTwitter /></a>
                            <a href="#youtube"><FaYoutube /></a>
                            <a href="#linkedin"><FaLinkedinIn /></a>
                        </div>
                    </Col>
                </Row>
                <Row className="footer-bottom">
                    <Col className="text-center">
                        <p>Copyright &copy; 2024 - Reader Den, Developed With <span>&hearts;</span> by YourCompany</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

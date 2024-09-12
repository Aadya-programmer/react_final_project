import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Header } from '../Reusable/Header';
import { Footer } from '../Reusable/Footer';
// import './ContactUs.css'; // Ensure you have a CSS file for custom styles

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateName = (name) => {
        if (!name) {
            return "Name is required.";
        }
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(name)) {
            return "Name can only contain letters and spaces.";
        }
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameError = validateName(formData.name);

        if (nameError) {
            setErrors({ ...errors, name: nameError });
            return;
        }

        // Clear any existing errors
        setErrors({});

        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Reset the form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Header/>
            <Container className="contact-container" fluid>
                <Row>
                    <Col md={6} className="contact-info">
                        <h2>Contact Us</h2>
                        <p>If you have any questions, suggestions, or just want to say hi, feel free to reach out to us using the form below.</p>
                        <p>Email: support@readerden.com</p>
                        <p>Phone: +123 456 7890</p>
                    </Col>
                    <Col md={6} className="contact-form">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    placeholder="Enter your name" 
                                    required 
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    placeholder="Enter your email" 
                                    required 
                                />
                            </Form.Group>

                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    rows={5} 
                                    placeholder="Type your message here" 
                                    required 
                                />
                            </Form.Group>
                            <br></br>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
};

// export default ContactUs;
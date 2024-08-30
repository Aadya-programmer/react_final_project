import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Use useNavigate

export const LoginForm = ({ show, handleClose }) => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    username: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    username: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (isSignup) {
      // Validate name
      if (!formData.name.trim()) {
        valid = false;
        newErrors.name = 'Name is required';
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        valid = false;
        newErrors.email = 'Email is required';
      } else if (!emailRegex.test(formData.email)) {
        valid = false;
        newErrors.email = 'Invalid email format';
      }
    }

    // Validate username
    if (!formData.username.trim()) {
      valid = false;
      newErrors.username = 'Username is required';
    }

    // Validate password
    if (!formData.password.trim()) {
      valid = false;
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      valid = false;
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (isSignup) {
        // Handle signup logic here
        console.log('Signup data:', formData);
      } else {
        // Handle login logic here
        console.log('Login data:', formData);
      }
      handleClose(); // Close the modal on successful login/signup
      navigate('/'); // Navigate to homepage after successful login/signup
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isSignup ? 'Sign Up' : 'Log In'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
            </>
          )}
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleInputChange}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            {isSignup ? 'Sign Up' : 'Log In'}
          </Button>
        </Form>
        <div className="mt-3">
          {isSignup ? (
            <>
              Already have an account?{' '}
              <Button variant="link" onClick={() => setIsSignup(false)}>
                Log In
              </Button>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <Button variant="link" onClick={() => setIsSignup(true)}>
                Sign Up
              </Button>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

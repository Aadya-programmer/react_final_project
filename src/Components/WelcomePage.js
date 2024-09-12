import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  

export const WelcomePage = () => {
    const navigate = useNavigate();  

    const handleExploreClick = () => {
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div className="welcome-page">
            <Container className="text-center">
                <h1 className="welcome-title">Welcome to Reader Den</h1>
                <p className="welcome-subtitle">Dive into a world of books, reviews, and recommendations</p>
                <Button className="explore-button" variant="primary" onClick={handleExploreClick}>
                    Login!
                </Button>
            </Container>
        </div>
    );
};

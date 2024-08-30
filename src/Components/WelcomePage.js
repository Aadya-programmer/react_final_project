import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  
import { LoginForm } from './LoginForm';  

export const WelcomePage = () => {
    const [showLogin, setShowLogin] = useState(false);  
    const navigate = useNavigate();  

    const handleExploreClick = () => {
        setShowLogin(true);  
    };

    const handleCloseLogin = () => {
        setShowLogin(false);  
        navigate('/explore');  
    };

    return (
        <div className="welcome-page">
            <Container className="text-center">
                <h1 className="welcome-title">Welcome to Reader Den</h1>
                <p className="welcome-subtitle">Dive into a world of books, reviews, and recommendations</p>
                {/* <Button className="explore-button" variant="primary" onClick={handleExploreClick}>
                    Login!
                </Button> */}
            </Container>

            {/* LoginForm component, shown based on the showLogin state */}
            <LoginForm show={showLogin} handleClose={handleCloseLogin} />
        </div>
    );
};

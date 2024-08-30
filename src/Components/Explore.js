import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Header } from '../Reusable/Header';
import { CoroselImage1 } from './CoroselImage1';
import { CoroselImage2 } from './CoroselImage2';
import { CoroselImage3 } from './CoroselImage3';
import { CoroselImage4 } from './CoroselImage4';
import { Footer } from '../Reusable/Footer';
import { useNavigate } from 'react-router-dom';

export function Explore() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleJoinNowClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      <Header />
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        indicators={true}
        controls={true}
        interval={3000}
      >
        <Carousel.Item>
          <CoroselImage1 text="Discover New Worlds" />
        </Carousel.Item>
        <Carousel.Item>
          <CoroselImage2 text="Adventure Awaits" />
        </Carousel.Item>
        <Carousel.Item>
          <CoroselImage3 text="Inspire and Learn" />
        </Carousel.Item>
        <Carousel.Item>
          <CoroselImage4 text="Join the Community" />
        </Carousel.Item>
      </Carousel>

      <section className="featured-sections">
        <div className="container">
          <h2 style={{textAlign:"center", fontSize:"50px"}}>Featured Genres</h2>
          <br />
          <div className="genre-cards">
            <div className="genre-card">
              <img src="mystery.jpeg" alt="Mystery" style={{height:"200px"}}/>
              <h3>Mystery</h3>
              <p>Unravel complex plots and enjoy thrilling mysteries.</p>
              <a href="#mystery-books">Explore Mysteries</a>
            </div>
            <div className="genre-card">
              <img src="fantasy.jpeg" alt="Fantasy" style={{height:"200px"}} />
              <h3>Fantasy</h3>
              <p>Embark on magical adventures in fantastical worlds.</p>
              <a href="#fantasy-books">Explore Fantasy</a>
            </div>
            <div className="genre-card">
              <img src="nonfictionbooks.jpeg" alt="Non-Fiction" style={{height:"200px"}} />
              <h3>Non-Fiction</h3>
              <p>Expand your knowledge with engaging non-fiction reads.</p>
              <a href="#non-fiction-books">Explore Non-Fiction</a>
            </div>
          </div>
        </div>
      </section>

      <section className="user-reviews">
        <div className="container">
          <h2 style={{textAlign:"center",fontSize:"50px"}}>What Our Readers Say</h2><br />
          <div className="reviews">
            <div className="review">
              <p>"Reader Den has transformed my reading experience. The recommendations are spot on!" - <strong>Emily R.</strong></p>
            </div>
            <div className="review">
              <p>"A fantastic platform for book lovers. I find new favorites all the time." - <strong>James K.</strong></p>
            </div>
            <div className="review">
              <p>"The community here is amazing. I love discussing books with fellow enthusiasts." - <strong>Linda M.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <div className="container">
          <h2>Join Us Today</h2>
          <p>Become a part of the Reader Den community and start your literary adventure today!</p>
          <button className="btn btn-primary" onClick={handleJoinNowClick}>Join Now</button>
        </div>
      </section>

      <Footer/>
    </>
  );
}

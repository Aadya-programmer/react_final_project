import React from 'react';
import { Footer } from '../Reusable/Footer';
// import './AboutUs.css'; // Assume you have a CSS file for styling

export const OurStory = () => {
  return (
    <>
    <div className="about-us-container">
      <h1 className="about-us-title">Our Story</h1>
      <p className="about-us-text">
        Reader Den, as the name suggests, is a haven for book lovers. Since its inception, Reader Den has been committed to delivering engaging, diverse, and high-quality content to readers worldwide. From curated book recommendations, insightful reviews, literary articles, and author spotlights, Reader Den aims to foster a community where readers can explore and share their love for books.
      </p>
      <p className="about-us-text">
        The inspiration behind Reader Den was to create a vibrant platform for readers to discover new books and immerse themselves in the world of literature. We strive to provide a space that not only encourages reading but also nurtures meaningful discussions and interactions among readers.
      </p>
      <p className="about-us-text">
        Our mission is simple: to inspire more people to pick up a book, explore new genres, and cultivate a lifelong love of reading. At Reader Den, we believe that books have the power to change lives, and we are here to make that experience accessible to all.
      </p>
      <p className="about-us-text">
        We believe in the words of J.K. Rowling, "If you don’t like to read, you haven’t found the right book." We are committed to helping you find that perfect book, whether it's for pleasure, knowledge, or personal growth. Join us in building a community that celebrates the joy of reading.
      </p>
      <p className="about-us-warning">
        Warning: Your to-read list is about to get a lot longer!
      </p>
    </div>
    <Footer />
    </>

  );
};

// export default AboutUs;

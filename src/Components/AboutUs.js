import React from "react";
// import "./AboutUs.css";
import { Header } from "../Reusable/Header";
import { Footer } from "../Reusable/Footer";
export const AboutUs = () => {
  return (
    <>
    <Header />
    <div className="aboutUs-container">
      <h1 className="aboutUs-header">About Reader Den</h1>
      <div className="aboutUs-content">
        <div className="aboutUs-imageSection">
          <img
            src="/images/about.png" // Replace with your image URL
            alt="Books and reading community"
            className="aboutUs-image"
          />
        </div>
        <div className="aboutUs-text">
          <p className="aboutUs-paragraph">
            Welcome to <strong>Reader Den</strong>, a vibrant community of book lovers! Our platform is designed to provide a unique reading experience, offering a wide range of books, insightful reviews, and personalized recommendations. Whether you're a casual reader or a seasoned bibliophile, you'll find a home here.
          </p>
          <h2 className="aboutUs-subheader">Our Mission</h2>
          <p className="aboutUs-paragraph">
            At Reader Den, our mission is to bring readers closer to the stories they love. We believe that books have the power to inspire, educate, and connect people from all walks of life. Through our platform, we aim to promote a culture of reading by providing easy access to diverse literary works and fostering meaningful discussions.
          </p>
          <h2 className="aboutUs-subheader">What We Offer</h2>
          <ul className="aboutUs-list">
            <li>📚 <strong>Vast Book Collection:</strong> From timeless classics to contemporary bestsellers, explore our extensive library.</li>
            <li>📝 <strong>Book Reviews and Ratings:</strong> Read reviews from other readers and share your own thoughts on books you’ve read.</li>
            <li>🔍 <strong>Personalized Recommendations:</strong> Discover new books based on your reading preferences and habits.</li>
            <li>🗣️ <strong>Community Forums:</strong> Join discussions, share insights, and connect with fellow readers.</li>
            <li>👩‍💻 <strong>Author Spotlights:</strong> Learn more about your favorite authors and their works through interviews and featured content.</li>
          </ul>
          <h2 className="aboutUs-subheader">Join Our Community</h2>
          <p className="aboutUs-paragraph">
            Becoming a part of Reader Den means more than just finding a good book. It's about being part of a thriving community where your voice matters. Engage with fellow readers, participate in book clubs, and get early access to exclusive content.
          </p>
          <h2 className="aboutUs-subheader">Meet the Team</h2>
          <p className="aboutUs-paragraph">
            Our dedicated team consists of book enthusiasts, writers, and developers committed to delivering an exceptional user experience. We're passionate about fostering a love for literature and continuously improving our platform to better serve our community.
          </p>
          <p className="aboutUs-paragraph">
            <strong>Thank you for visiting Reader Den!</strong> We hope to be a part of your reading journey.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

// export default AboutUs;

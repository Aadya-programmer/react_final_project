import React from 'react';
import { Footer } from '../Reusable/Footer';

export const Bookreviewservice = () => {
  return (
    <>
    <div className="book-review-container">
      <div className="review-header">
        <h2>Book Review: Get Your Book Reviewed by Reader Den</h2>
        <p>
          Our book review service helps authors and publishers connect with readers by providing comprehensive and honest reviews. We don't just evaluate the story or cover; we offer insights into writing style, language, and target audience.
        </p>
        <h3>Our Review Covers:</h3>
        <ul>
          <li>Summary in 3-5 lines</li>
          <li>Critique on plot and characters</li>
          <li>Highlights and areas for improvement</li>
          <li>Recommended audience age group</li>
          <li>Overall rating out of 5</li>
        </ul>
        <p>
          These reviews will help your book reach the right audience, with our platform reaching thousands of readers every month.
        </p>
        <h3>Where Our Reviews Appear:</h3>
        <ul>
          <li>Instagram (Posts & Stories)</li>
          <li>Amazon (Verified Purchase Review)</li>
          <li>Goodreads</li>
          <li>Reader Den Website</li>
        </ul>
        <p><strong>Timeframe:</strong> Reviews are typically published within 15-20 days depending on book length, genre, and other factors.</p>
        <p><strong>Payment Terms:</strong> Fees are payable in advance, covering the cost of the book purchase and review. Contact us for a quote.</p>
        <p>
          Reach out via <a href="https://instagram.com/ReaderDen" target="_self">Instagram</a> or <a href="https://wa.me/ReaderDen" target="_self">WhatsApp</a> for current pricing details.
        </p>
      </div>
      
      <div className="testimonial">
        <h3>Testimonial</h3>
        <div className="testimonial-content">
          <img src="/images/boy.jpeg" alt="Testimonial" />
          <p className="author">Jane Doe</p>
          <p className="author-title">Author of "Journey Beyond"</p>
          <p style={{color:"white"}}>
            "Reader Den provided an in-depth review that was both honest and encouraging. Their feedback helped me connect with a broader audience and fine-tune my next manuscript. I highly recommend their services to new and seasoned authors alike."
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
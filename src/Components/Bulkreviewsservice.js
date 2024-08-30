import React from 'react';
// import './BulkReviews.css'; // Import your CSS file

export const Bulkreviewsservice = () => {
  return (
    <div className="proofreading-container">
      <section className="proofreading">
        <h2>Bulk Reviews</h2>
        <p>
          Now, you don’t have to approach the book bloggers separately to get the reviews of your book on all platforms.
          We’re here to handle it for you!
        </p>
        <h3>Features</h3>
        <ul>
          <li>Reviews by both big and small book bloggers on Instagram, Amazon, Goodreads, and other platforms.</li>
          <li>You can either give paperback or kindle. Alternatively, you can make the Kindle version free to avoid paying for the book.</li>
          <li>Minimum reviews you can apply for: 10</li>
          <li>These reviews take 15-20 days to go live on all platforms.</li>
          <li>We require a one-time payment, which includes the book price (if any), reviewer incentives, and our fee. All review links will be sent to the author after the campaign ends.</li>
        </ul>
        <p>Contact us on <a href="https://instagram.com">Instagram</a> or <a href="https://whatsapp.com">WhatsApp</a> to know the current price of this package.</p>
      </section>

      <section className="testimonial">
        <h3>Testimonial</h3>
        <div className="testimonial-content">
          <img src="/images/girl.png" alt="Nitya Ravi" className="testimonial-image" />
          <blockquote>
            <p>
              In 2019, when I published my first book of short stories, I was clueless about how to approach the readers market.
              Based in Dubai, my book was written for Indian readers and that made it even more difficult since I was not physically present in India.
              Kitabi Keeda made things easier for me. They knew the market well, they knew what the readers wanted and also how to get the reviews done and with whom.
              One word I would coin for them is DEPENDABLE. No headaches of having to follow up with regards to book launch, promotions, reviews etc and this is what an author wants.
            </p>
            <cite style={{fontSize:"20px", color:"white"}}>Nitya Ravi, Author of The Woman Within</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

// export default BulkReviews;

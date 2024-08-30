import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './ArticleDetail5bookscontent.css'; // Uncomment this line if you have a separate CSS file

export const ArticleDetail5bookscontent = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This will go back to the previous page
  };

  return (
    <div className="article-detail-container">
      <h1>5 Best Books for Content Creators</h1>
      <div className="author-section">
        <img
          src="/images/contentcopy.jpeg" // Update with the correct image path
          alt="Books for Content Creators"
          className="author-image"
        />
        <p>
          Explore the top recommendations for content creators with insights on writing, creativity, and making shareable content.
        </p>
      </div>

      <div className="book-list">
        {/* Book 1 */}
        <div className="book-item">
          <h2>1 - Crushing It! By Gary Vaynerchuk</h2>
          <a href="https://www.amazon.com/dp/example1" className="buy-button">Buy on Amazon</a>
          <p>
            Gary Vaynerchuk is the author of the entrepreneurial and motivational book "Crushing It!"...
          </p>
          <img src="/images/crushing.jpeg" alt="Crushing It! by Gary Vaynerchuk" className="book-cover" />
        </div>

        {/* Book 2 */}
        <div className="book-item">
          <h2>2 - Contagious by Jonah Berger</h2>
          <a href="https://www.amazon.com/dp/example2" className="buy-button">Buy on Amazon</a>
          <p>
            A product or content going viral is not a game of luck but pure strategy and hard work...
          </p>
          <img src="/images/contagious.jpeg" alt="Contagious by Jonah Berger" className="book-cover" />
        </div>

        {/* Book 3 */}
        <div className="book-item">
          <h2>3 - Booming Digital Stars by Harsh Pamnani</h2>
          <a href="https://www.amazon.com/dp/example3" className="buy-button">Buy on Amazon</a>
          <p>
            A very interesting book of our favorite and very popular digital stars...
          </p>
          <img src="/images/booming.jpeg" alt="Booming Digital Stars by Harsh Pamnani" className="book-cover" />
        </div>

        {/* Book 4 */}
        <div className="book-item">
          <h2>4 - Superfans by Pat Flynn</h2>
          <a href="https://www.amazon.com/dp/example4" className="buy-button">Buy on Amazon</a>
          <p>
            Pat is an author, podcaster, social media expert, and someone who has been featured in...
          </p>
          <img src="/images/superfan.jpeg" alt="Superfans by Pat Flynn" className="book-cover" />
        </div>

        {/* Book 5 */}
        <div className="book-item">
          <h2>5 - Steal Like an Artist by Austin Kleon</h2>
          <a href="https://www.amazon.com/dp/example5" className="buy-button">Buy on Amazon</a>
          <p>
            Everyone in the creative world, be it an artist, writer, or designer, must read this book...
          </p>
          <img src="/images/steal.jpeg" alt="Steal Like an Artist by Austin Kleon" className="book-cover" />
        </div>
      </div>
      <button onClick={handleBackClick} className="back-button">Back</button>
    </div>
  );
};

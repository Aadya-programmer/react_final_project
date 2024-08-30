import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './ArticleDetail3Mustreadselfhelp.css';

export const ArticleDetail3Mustreadselfhelp = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This will go back to the previous page
  };

  return (
    <div className="article-detail-container">
      <h1>#HiddenGems: 3 Must-Read Self-Help Books by Lesser-Known Authors</h1>
      <div className="author-section">
        <img 
          src="/images/3mustreadselfhelp.jpeg" // Update with the correct image path
          alt="Hidden Gems Book Cover" 
          className="author-image"
        />
        <p>
          Here are 3 underrated self-help books that are just amazing! Transform your mindset with these hidden gems.
        </p>
      </div>
      <div className="book-list">
        <div className="book-item">
          <h2>1 - The Breakthrough by Megha Bajaj</h2>
          <a href="https://www.amazon.com/dp/B08V8Q5G8F" className="buy-button">Buy on Amazon</a>
          <p>
            The Breakthrough is an account of the lives of 11 people who believe in the power of dreams and prove that faith with continuous hard work, will achieve these dreams. It is a self-help book which teaches you the importance of synchronisation of health, wealth, love, and spirituality.
            <br /><br />
            The story takes the reader to new heights. The author with his special content weaves the readers from the prologue itself which continues till the last page. The flow with which the book is narrated each story is splendid. Each and every line with ease has derived and explained the takeaway as a known fact. This is a book that everyone should read at least once. It will definitely change your life.
          </p>
          <img src="/images/breakthrough.jpeg" alt="The Breakthrough" className="book-cover"/> {/* Update with the correct image path */}
        </div>

        <div className="book-item">
          <h2>2 - The One Invisible Code by Sharat Sharma</h2>
          <a href="https://www.amazon.com/dp/B08MVMXDM1" className="buy-button">Buy on Amazon</a>
          <p>
            The book talks about how people are stuck in the circle of mediocrity and unable to move up the ladder of success. It addresses the issues which pull us and stops us from reaching our true potential. The author has tried to address these issues and how people can improve and rise above them.
            <br /><br />
            The book has been divided into three parts. The first part deals with an understanding of the invisible code of success. The second part talks about different types of excellence and the third part takes the readers to a journey of how to go ahead and understand the invisible code to excel in life at the next level.
          </p>
          <img src="/images/invisible.jpeg" alt="The One Invisible Code" className="book-cover"/> {/* Update with the correct image path */}
        </div>

        <div className="book-item">
          <h2>3 - Bedazzle By Sharnoly Khera</h2>
          <a href="https://www.amazon.com/dp/B07Q2SH7S3" className="buy-button">Buy on Amazon</a>
          <p>
            Bedazzle is a book which will turn out to be a guide on how to present yourself in public speaking, how to make an impression on people. The author has covered topics on how everything related to the individual is based on the image he/she portrays.
            <br /><br />
            Look at the way she has explained the art of the book. Her personal experiences, stories are well blended to throw light on her journey of becoming a public speaker. The book can be rated as an excellent read for people looking to improve the way they present themselves.
          </p>
          <img src="/images/bedazzle.jpeg" alt="Bedazzle" className="book-cover"/> {/* Update with the correct image path */}
        </div>
      </div>
      <button onClick={handleBackClick} className="back-button">Back</button>
    </div>
  );
};

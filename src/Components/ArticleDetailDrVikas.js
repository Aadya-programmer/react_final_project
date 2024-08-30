import React from "react";
import { useNavigate } from 'react-router-dom';
// import './ArticleDetail.css';

export const ArticleDetailDrVikas = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This will go back to the previous page
  };
  return (
    <div className="article-detail-container">
      <h1>5 Books Recommended By Dr. Vikas Divyakirti</h1>
      <div className="author-section">
        <img
          src="/images/drvikascopy.jpg"
          alt="Dr. Vikas Divyakirti"
          className="author-image"
        />

        <p>
          Vikas Divyakirti is known for his simplicity and effective teaching,
          making him a top choice among UPSC trainers, widely recognized and
          admired. Here's a list of five books recommended by him that he
          believes everyone should read.
        </p>
      </div>
      <div className="book-list">
        <div className="book-item">
          <h2>1. Sophie's World By Jostein Gaarder</h2>
          <a href="https://www.amazon.com/dp/B002RI9KH6" className="buy-button">
            Buy on Amazon
          </a>
          <p>
            The book is about a beautiful story of a young girl named Sophie.
            While living a normal life, she stumbles upon an extraordinary life
            by receiving a letter that makes her question her life...
          </p>
          <img
            src="/images/sophie.jpeg"
            alt="Sophie's World"
            className="book-cover"
          />
        </div>

        <div className="book-item">
          <h2>2. Godaan - By Munshi Premchand</h2>
          <a href="https://www.amazon.com/dp/B07YN59T69" className="buy-button">
            Buy on Amazon
          </a>
          <p>
            The very famous Indian novelist Munshi Premchand is the author of
            this classic book - Godaan. Published in 1936, Godaan is made from
            two words, Gow and Daan...
          </p>
          <img src="/images/godan.jpeg" alt="Godaan" className="book-cover" />
        </div>

        <div className="book-item">
          <h2>3. The Story Of My Experiments With Truth By Mahatma Gandhi</h2>
          <a href="https://www.amazon.com/dp/B01N23GR3M" className="buy-button">
            Buy on Amazon
          </a>
          <p>
            Every Indian kid is taught how great of a man this leader was. But,
            Mahatma Gandhi was never perfect, which he truly accepts in this
            book...
          </p>
          <img
            src="/images/myexperiments.jpeg"
            alt="The Story Of My Experiments With Truth"
            className="book-cover"
          />
        </div>

        <div className="book-item">
          <h2>4. Sapiens By Yuval Noah Harari</h2>
          <a href="https://www.amazon.com/dp/B00ICN066A" className="buy-button">
            Buy on Amazon
          </a>
          <p>
            A brief history of humankind, Sapiens takes you on a journey through
            the evolution of human beings...
          </p>
          <img src="/images/sapiens.jpeg" alt="Sapiens" className="book-cover" />
        </div>

        <div className="book-item">
          <h2>5. The History of Mankind By Friedrich Ratzel</h2>
          <a href="https://www.amazon.com/dp/B08CD4H43P" className="buy-button">
            Buy on Amazon
          </a>
          <p>
            Friedrich Ratzel, a German geographer, wrote a groundbreaking book
            on the subject of human history and geography. This book takes you
            through the history of mankind right from its beginning and the way
            it has evolved over time. In this book, the author explains the
            importance of geography in human evolution and how different
            geographical regions have played a role in shaping human cultures
            and civilizations. If you're interested in knowing about the global
            aspects of human history, this book is one of the best reads for
            anyone who is interested to know about history.
          </p>
          <img
            src="/images/history.jpeg"
            alt="The History of Mankind"
            className="book-cover"
          />
        </div>
      </div>
      <button onClick={handleBackClick} className="back-button">Back</button>
    </div>
  );
};

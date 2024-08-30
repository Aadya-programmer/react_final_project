import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './ArticleDetail.css'; // Ensure you have the correct path to your CSS file

export const ArticleDetail4BestSelfhelp = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="article-detail-container">
      <h1>4 Best Self-Help Books for Beginners</h1>
      <div className="author-section">
        <img
          src="/images/selfhelpcopy.jpeg" // Update with the correct image path
          alt="Unpopular Fiction Books Cover"
          className="author-image"
        />
        <p>
          Thinking to start reading self-help books? Check out these 5 simple and popular books that are a good pick for biginners.
        </p>
      </div>

      <div className="book-list">
        {/* Book 1 */}
        <div className="book-item">
          <h2>1) Do Epic Shit by Ankur Warikoo</h2>
          <a href="https://www.amazon.com/dp/example1" className="buy-button">Buy on Amazon</a>
          <p>
            Author of this book <strong> 'Ankur Warikoo' </strong> is an enterpreneur and content creator whose deep, witty and bruttaly honest thoughts on success and failure, money and investing, self-awareness and personal relationships have made him one of India's top personal brands.
          </p>
          In his first book, Ankur puts together the key ideas that have fuelled his journey - one that began with him wanting to be a space engineer and ended with him creating content that has been seen and read by millions. His thoughts range from the importance of creating habits for long-term success to the foundations of money management, from embracing and accepting failure to the real truth about learing empathy.
          <img src="/images/doepicshit.jpeg" alt="Rape Trial by Bidisha Ghosal" className="book-cover" /> {/* Update with the correct image path */}
        </div>

        {/* Book 2 */}
        <div className="book-item">
          <h2>2) Do it Today by Darius Foroux</h2>
          <a href="https://www.amazon.com/dp/example2" className="buy-button">Buy on Amazon</a>
          <p>
            In this book, the author has handpicked 30 of his best articles to help you overcome procrastination, improve your productive, and achieve more. This path leads to a productive and meaningful life.
          </p>
          <p>
            You can't be productive if you procrastinate, and you can't achieve anything if you're not productive.
          </p>
          That's why he starts this book by sharing how he overcame his struggle with procrastination. Its a personal journey through loss, pain, and meaning.
          <img src="/images/doittoday.jpeg" alt="The Granddaughter Project by Shaheen Chishti" className="book-cover" /> {/* Update with the correct image path */}
        </div>

        {/* Book 3 */}
        <div className="book-item">
          <h2>3) Life Amazing secrets by Gaur Gopal Das</h2>
          <a href="https://www.amazon.com/dp/example3" className="buy-button">Buy on Amazon</a>
          <p>
            While navigating their way through Mumbai's horrendous traffic, Gaur Gopal Das and his wealthy young friend Harry get talking, delving into concepts ranging from the human condition to finding one's purpose in life and the key to lasting happiness.
          </p>
          <p>
            Whether you are looking at strengthening your relationships, discovering your true potential, understanding how to do well at work or even how you can give back to the world.
          </p>
          <img src="/images/gopaldas.jpeg" alt="The Amateur Detectives by Sayan Sahoo" className="book-cover" /> {/* Update with the correct image path */}
        </div>

        {/* Book 4 */}
        <div className="book-item">
          <h2>4) The Magic in You by Deepa Rajani</h2>
          <a href="https://www.amazon.com/dp/example4" className="buy-button">Buy on Amazon</a>
          <p>
            Awaken your soul are you a money magnet? How do you react to adversities? Do you feel some people are luckier than you? Some of us beleive that our fates are written in our stars predestined and unchangable. But it is possible to take charge of our own lives. For years, experts have been talking about the power of the human mind-helping us realize the boundless energy that lies untapped, until we set it free. You only have to believe! This book will not have all the answers to your problems, nor is it a guide to lead you to some "promised land".
          </p>
          <img src="/images/magicinyou.jpeg" alt="Road to Abana by Lata Gwalani" className="book-cover" /> {/* Update with the correct image path */}
        </div>
      </div>
      <button onClick={handleBackClick} className="back-button">Back</button>
    </div>
  );
};

// export default ArticleDetail3MustReadFiction;

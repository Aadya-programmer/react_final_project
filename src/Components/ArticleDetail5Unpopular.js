import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './ArticleDetail.css'; // Ensure you have the correct path to your CSS file

export const ArticleDetail5Unpopular = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="article-detail-container">
      <h1>5 Unpopular Fiction Books That Deserve Your Attention</h1>
      <div className="author-section">
        <img
          src="/images/nonfictionbookscopy.jpeg" // Update with the correct image path
          alt="Unpopular Fiction Books Cover"
          className="author-image"
        />
        <p>
          Finding some new fiction novels? We've got you covered! Here are 5 lesser-known fiction books that are worth your time.
        </p>
      </div>

      <div className="book-list">
        {/* Book 1 */}
        <div className="book-item">
          <h2>1) Rape Trial by Bidisha Ghosal</h2>
          <a href="https://www.amazon.com/dp/example1" className="buy-button">Buy on Amazon</a>
          <p>
            The author <strong>Bidisha Ghosal</strong> has done an exemplary task of knitting such a sensitive topic and doing justice to the title of the novel. While reading "Rape Trial," one will feel a blend of emotions gushing in...
          </p>
          <img src="/images/rape.jpeg" alt="Rape Trial by Bidisha Ghosal" className="book-cover" /> {/* Update with the correct image path */}
        </div>

        {/* Book 2 */}
        <div className="book-item">
          <h2>2) The Granddaughter Project by Shaheen Chishti</h2>
          <a href="https://www.amazon.com/dp/example2" className="buy-button">Buy on Amazon</a>
          <p>
            <strong>The Granddaughter Project</strong> is a novel about three females who have had their share of trauma in one way or the other. When they meet each other and share their stories, they decide to write letters to their future granddaughters...
          </p>
          <img src="/images/granddaughter.jpeg" alt="The Granddaughter Project by Shaheen Chishti" className="book-cover" /> {/* Update with the correct image path */}
        </div>

        {/* Book 3 */}
        <div className="book-item">
          <h2>3) The Amateur Detectives by Sayan Sahoo</h2>
          <a href="https://www.amazon.com/dp/example3" className="buy-button">Buy on Amazon</a>
          <p>
            What do we think of? Neal and Diggi, two became partners while solving a case and go further on to solve many more such cases together. Not to forget Neal’s lazy but loyal dog, Jimmy...
          </p>
          <img src="/images/detectives.jpeg" alt="The Amateur Detectives by Sayan Sahoo" className="book-cover" /> {/* Update with the correct image path */}
        </div>

        {/* Book 4 */}
        <div className="book-item">
          <h2>4) Road to Abana by Lata Gwalani</h2>
          <a href="https://www.amazon.com/dp/example4" className="buy-button">Buy on Amazon</a>
          <p>
            <strong>Road to Abana</strong> is the story of Raaf and her steady determination to return to her home in Sudak, Karachi, after the trauma of abuse and identity crisis after the Partition of 1947...
          </p>
          <img src="/images/road.jpeg" alt="Road to Abana by Lata Gwalani" className="book-cover" /> {/* Update with the correct image path */}
        </div>

        {/* Book 5 */}
        <div className="book-item">
          <h2>5) The Woman Within by Nitya Ravi</h2>
          <a href="https://www.amazon.com/dp/example5" className="buy-button">Buy on Amazon</a>
          <p>
            The book revolves around Zia, her very teen years in a school when she had suddenly kissed him. Suddenly, he was killed, not long thereafter. Many years later, Zia becomes one of the known forensic investigators...
          </p>
          <img src="/images/woman.jpeg" alt="The Woman Within by Nitya Ravi" className="book-cover" /> {/* Update with the correct image path */}
        </div>
      </div>
      <button onClick={handleBackClick} className="back-button">Back</button>
    </div>
  );
};
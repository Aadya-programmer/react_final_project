import React, { useEffect } from "react"; // Import useEffect from React
// import "./BookReviews.css";

const reviews = [
  {
    title: "Dear People, with Love and Care",
    author: "Dr. Debashish Dutta",
    summary: "A book with music in every word.",
    imageUrl: "link_to_image_1",
    reviewUrl: "link_to_review_1",
  },
  {
    title: "The Breakthrough",
    author: "Megha Bajaj",
    summary: "An extraordinary book full of learnings.",
    imageUrl: "link_to_image_2",
    reviewUrl: "link_to_review_2",
  },
  {
    title: "Unstoppable",
    author: "Meena Chhabra",
    summary: "A book about an inspiring journey of self-made women.",
    imageUrl: "link_to_image_3",
    reviewUrl: "link_to_review_3",
  },
  {
    title: "Wonder Womaniky",
    author: "Sohil Makwana",
    summary: "A riveting novel supporting a great cause.",
    imageUrl: "link_to_image_4",
    reviewUrl: "link_to_review_4",
  },
  {
    title: "Money: What's Left What's Right",
    author: "Phranchad Nihilo",
    summary: "A guide to attaining financial freedom.",
    imageUrl: "link_to_image_5",
    reviewUrl: "link_to_review_5",
  },
  {
    title: "The Change Guidebook",
    author: "Elizabeth Hamilton-Guarino",
    summary: "A step-by-step guide on how to align with your heart, truth, and energy.",
    imageUrl: "link_to_image_6",
    reviewUrl: "link_to_review_6",
  },
  {
    title: "Ambapali",
    author: "Tanushree Podder",
    summary: "A book that recreates history with themes of love, loss, anger, deception, and redemption.",
    imageUrl: "link_to_image_7",
    reviewUrl: "link_to_review_7",
  },
  {
    title: "The S**t They Never Taught You",
    author: "Adam Ashton",
    summary: "A collection of footnotes from the greats who lived without fear and sound constraints.",
    imageUrl: "link_to_image_8",
    reviewUrl: "link_to_review_8",
  },
  {
    title: "A Dark and Shiny Place",
    author: "Priya Sarukkai Chabria",
    summary: "An emotional account of a girl's life where reality gets blurred with the dark corners of imagination.",
    imageUrl: "link_to_image_9",
    reviewUrl: "link_to_review_9",
  },
  {
    title: "Panther's Ghosts",
    author: "Ajit Menon",
    summary: "An adventurous read!",
    imageUrl: "link_to_image_10",
    reviewUrl: "link_to_review_10",
  },
  {
    title: "Nalanda: Until We Meet Again",
    author: "Gautam Borah",
    summary: "An epic tale of romance and suspense.",
    imageUrl: "link_to_image_11",
    reviewUrl: "link_to_review_11",
  },
  {
    title: "Behaya",
    author: "Adi Pocha",
    summary: "A humorous tale of girl and rebellion.",
    imageUrl: "link_to_image_12",
    reviewUrl: "link_to_review_12",
  },
  // Add more reviews as needed
];

export const BookReviewCard = () => {
  // Use useEffect to scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array means it only runs once on mount

  return (
    <div className="book-reviews-container">
      <h2>Book Reviews</h2>
      <p>Read some reviews done by Reader Den 📚</p>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.imageUrl} alt={review.title} className="review-image" />
            <h3>{review.title}</h3>
            <p><strong>{review.author}</strong></p>
            <p>{review.summary}</p>
            <a href={review.reviewUrl} className="read-more">Read the Review</a>
          </div>
        ))}
      </div>
    </div>
  );
};

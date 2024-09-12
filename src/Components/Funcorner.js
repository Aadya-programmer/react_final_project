import React from "react";
// import "./FunCorner.css"; // Ensure your CSS styling is imported

const memeCards = [
  {
    text: "I have ordered enough books that the delivery guy knows my name by heart!",
    imageUrl: "/images/fun.jpeg", // Replace with the URL of the meme image
  },
  {
    text: "Me after buying one hardcover copy: 'There goes my lunch money!'",
    imageUrl: "/images/fun.jpeg",
  },
  {
    text: "Literally need someone to listen to my book talks whenever I finish any book!",
    imageUrl: "/images/fun.jpeg",
  },
  {
    text: "Started a book club to discuss my favorite books... no one showed up!",
    imageUrl: "/images/fun.jpeg",
  },
  {
    text: "My TBR pile is so high, it's starting to look like a Jenga tower!",
    imageUrl: "/images/fun.jpeg",
  },
  {
    text: "When your friends invite you out but you'd rather stay in and read: 'I'm booked!'",
    imageUrl: "/images/fun.jpeg",
  },
  {
    text: "I don't have a reading problem; I have a buying-not-reading problem!",
    imageUrl: "/images/fun.jpeg",
  },
  {
    text: "When the bookstore has a sale and I convince myself I 'need' more books...",
    imageUrl: "/images/fun.jpeg",
  },
  {
    text: "When someone says 'you have too many books'... How dare you!",
    imageUrl: "/images/fun.jpeg",
  },
  {
    text: "My ideal weekend: A cozy chair, a good book, and absolutely no plans.",
    imageUrl: "/images/fun.jpeg",
  },
  {
    text: "That awkward moment when your bookshelf collapses under the weight of your TBR...",
    imageUrl: "/images/fun.jpeg",
  },
  {
    text: "Every time I finish a good book, I have a mini existential crisis.",
    imageUrl: "/images/fun.jpeg",
  },
  {
    text: "Books: the only escape where you get trapped willingly.",
    imageUrl: "/images/fun.jpeg",
  },
  {
    text: "Reading in public: Expectation - Look intellectual. Reality - Laugh out loud.",
    imageUrl: "/images/fun.jpeg",
  },
  {
    text: "Buying books and actually reading them are two entirely different hobbies.",
    imageUrl: "/images/fun.jpeg",
  },
  // Add more memes as needed
];

export const FunCorner = () => {
  return (
    <div className="fun-corner-container">
      <h2>Fun Corner</h2>
      <p>People say we make good book memes 😂 Check out some here 👇</p>
      <div className="meme-grid">
        {memeCards.map((meme, index) => (
          <div key={index} className="meme-card">
            <img src={meme.imageUrl} alt="Funny Meme" className="meme-image" />
            <p className="meme-text">{meme.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// export default FunCorner;

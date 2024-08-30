import React from "react";
// import "./FunCorner.css"; // Ensure your CSS styling is imported

const memeCards = [
  {
    text: "I have ordered enough books that the delivery guy knows my name by heart!",
    imageUrl: "link_to_image_1", // Replace with the URL of the meme image
  },
  {
    text: "Me after buying one hardcover copy: 'There goes my lunch money!'",
    imageUrl: "link_to_image_2",
  },
  {
    text: "Literally need someone to listen to my book talks whenever I finish any book!",
    imageUrl: "link_to_image_3",
  },
  {
    text: "Started a book club to discuss my favorite books... no one showed up!",
    imageUrl: "link_to_image_4",
  },
  {
    text: "My TBR pile is so high, it's starting to look like a Jenga tower!",
    imageUrl: "link_to_image_5",
  },
  {
    text: "When your friends invite you out but you'd rather stay in and read: 'I'm booked!'",
    imageUrl: "link_to_image_6",
  },
  {
    text: "I don't have a reading problem; I have a buying-not-reading problem!",
    imageUrl: "link_to_image_7",
  },
  {
    text: "When the bookstore has a sale and I convince myself I 'need' more books...",
    imageUrl: "link_to_image_8",
  },
  {
    text: "When someone says 'you have too many books'... How dare you!",
    imageUrl: "link_to_image_9",
  },
  {
    text: "My ideal weekend: A cozy chair, a good book, and absolutely no plans.",
    imageUrl: "link_to_image_10",
  },
  {
    text: "That awkward moment when your bookshelf collapses under the weight of your TBR...",
    imageUrl: "link_to_image_11",
  },
  {
    text: "Every time I finish a good book, I have a mini existential crisis.",
    imageUrl: "link_to_image_12",
  },
  {
    text: "Books: the only escape where you get trapped willingly.",
    imageUrl: "link_to_image_13",
  },
  {
    text: "Reading in public: Expectation - Look intellectual. Reality - Laugh out loud.",
    imageUrl: "link_to_image_14",
  },
  {
    text: "Buying books and actually reading them are two entirely different hobbies.",
    imageUrl: "link_to_image_15",
  },
  {
    text: "I'm not addicted to reading, I can quit as soon as I finish 'just one more chapter'.",
    imageUrl: "link_to_image_16",
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

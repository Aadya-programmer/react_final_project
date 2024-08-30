import React from 'react';
import { Link } from 'react-router-dom';

export const CardComponent = () => {
  const cards = [
    {
      id: 1,
      icon: '📚',
      title: 'Our Services',
      description: 'Promote your book with us. Check what services we offer to Authors & Publishers.',
      link: '/homepage/services', // Link to the Services page
    },
    {
      id: 2,
      icon: '📖',
      title: 'Book Reviews',
      description: 'Read some reviews done by Kitabi Keeda.',
      link: '/homepage/reviews', // Example link for reviews
    },
    {
      id: 3,
      icon: '👍',
      title: 'Book Recommendations',
      description: 'Find your next read here.',
      link: '/recommendations', // Example link for recommendations
    },
    {
      id: 4,
      icon: '😂',
      title: 'Fun Corner',
      description: 'People say we make good book memes. Check out some here.',
      link: '/fun-corner', // Example link for fun corner
    },
    {
      id: 5,
      icon: '📚',
      title: 'Our Story',
      description: 'How it started and how is it going?',
      link: '/our-story', // Example link for our story
    },
  ];

  return (
    <>
    {/* <br></br> */}
    <div className="card-container">
      {cards.map((card) => (
        <Link to={card.link} key={card.id} className="card-link">
          <div className="card">
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
    {/* <br></br> */}
    </>
  );
};

// export default CardComponent;

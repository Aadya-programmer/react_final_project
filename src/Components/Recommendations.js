import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const recommendations = [
    {
        id: 1,
        image: "drvikas.jpg",
        title: "5 Books recommended by Dr Vikas Divyakirti",
        description: "Vikas Divyakirti- the top choice of among UPSC trainers, shares a list of five must-read books. Let's look at what those reading gems are.",
        link: "/articledetail/drvikas", // Unique path for this article
    },
    {
        id: 2,
        image: "selfhelp.jpeg",
        title: "3 Must-Read Self-Help Books Written by Lesser Known Authors",
        description: "Take a look at these underrated self-help books. Learn, grow, and improve your life to become the best version of yourself.",
        link: "/articledetail/selfhelp", // Unique path for this article
    },
    {
        id: 3,
        image: "fiction.jpeg",
        title: "5 Unpopular Fiction Books that Deserve Your Attention",
        description: "Are you looking for new & best fiction books to read? We've got your back. Here's a list of 5 fiction books that are worth your time.",
        link: "/articledetail/fiction", // Unique path for this article
    },
    {
        id: 4,
        image: "4best.jpeg",
        title: "4 Best Self-Help Books for Beginners",
        description: "Take a look at the best self-help books for beginners. Get insight into personal growth, how to overcome challenges, and how to create the life that you aim for.",
        link: "/articledetail/4best", // Unique path for this article
    },
    {
        id: 5,
        image: "content.jpeg",
        title: "5 Books for Content Creators",
        description: "Learn the art of creating compelling content with these 5 books on creativity. Get invaluable insights on creating unique content, writing & executing ideas.",
        link: "/articledetail/contentcreators", // Unique path for this article
    },
    {
        id: 6,
        image: "hindi.jpg",
        title: "5 Best Hindi Novels for Beginners",
        description: "Finally decided to start reading Hindi novels? Here's the list of best Hindi novels for beginners that are fun, enjoyable, thought-provoking, and informative.",
        link: "/articledetail/hindi", // Unique path for this article
    }
];

export const Recommendations = () => {
    return (
        <div className="recommendations-container">
            <h1>Book Recommendations</h1>
            <p>Find your next read here <span role="img" aria-label="check">✅</span></p>
            <div className="recommendations-grid">
                {recommendations.map(({ id, image, title, description, link }) => (
                    <div key={id} className="recommendation-card">
                        <img src={image} alt={title} />
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <Link to={link} className="read-more">Read Full Article</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

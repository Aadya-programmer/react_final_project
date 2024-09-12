import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './Components/Homepage';
import { Explore } from './Components/Explore';
import { AboutUs } from './Components/AboutUs';
import { Recommendations } from './Components/Recommendations';
import { ContactUs } from './Components/ContactUs';
import { ArticleDetailDrVikas } from './Components/ArticleDetailDrVikas';
import { ArticleDetail3Mustreadselfhelp } from './Components/ArticleDetail3Mustreadselfhelp';
import { ArticleDetail5Unpopular } from './Components/ArticleDetail5Unpopular';
import { ArticleDetail4BestSelfhelp } from './Components/ArticleDetail4BestSelfhelp';
import { ArticleDetail5bookscontent } from './Components/ArticleDetail5bookscontent';
import { ArticleDetail5HindiNovels } from './Components/ArticleDetail5HindiNovels';
import { Services } from './Components/Services';
import { Bookreviewservice } from './Components/Bookreviewservice';
import { Bookpromotionservice } from './Components/Bookpromotionservice';
import { Bookcoverservice } from './Components/Bookcoverservice';
import { Proofreadingservice } from './Components/Proofreadingservice';
import { Bulkreviewsservice } from './Components/Bulkreviewsservice';
import { BookReviewCard } from './Components/BookReviewCard';
import { FunCorner } from './Components/Funcorner';
import { OurStory } from './Components/OurStory';
import { Login } from './Components/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/articledetail/drvikas" element={<ArticleDetailDrVikas />} />
        <Route path="/articledetail/selfhelp" element={<ArticleDetail3Mustreadselfhelp />} />
        <Route path="/articledetail/fiction" element={<ArticleDetail5Unpopular />} />
        <Route path="/articledetail/4best" element={<ArticleDetail4BestSelfhelp />} />
        <Route path="/articledetail/contentcreators" element={<ArticleDetail5bookscontent />} />
        <Route path="/articledetail/hindi" element={<ArticleDetail5HindiNovels />} />
        <Route path="/homepage/services" element={<Services />} />
        <Route path="/book-reviews" element={<Bookreviewservice />} />
        <Route path="/book-promotion" element={<Bookpromotionservice />} />
        <Route path="/book-cover" element={<Bookcoverservice />} />
        <Route path="/proof-reading" element={<Proofreadingservice />} />
        <Route path="/bulk-reviews" element={<Bulkreviewsservice />} />
        <Route path="/homepage/reviews" element={<BookReviewCard />} />
        <Route path="/fun-corner" element={<FunCorner />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

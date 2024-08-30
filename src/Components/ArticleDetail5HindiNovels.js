import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './ArticleDetail5bookscontent.css'; // Uncomment this line if you have a separate CSS file

export const ArticleDetail5HindiNovels = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This will go back to the previous page
  };

  return (
    <div className="article-detail-container">
      <h1>5 Best Hindi Novels for Beginners</h1>
      <div className="author-section">
        <img
          src="/images/hindicopy.jpg" // Update with the correct image path
          alt="5 Best Hindi Novels for Beginners"
          className="author-image"
        />
        <p>
          Thinking of starting to read Hindi novels? Here’s a list of the 5 best fiction novels that are easy, enjoyable, sometimes sad, but informative.
        </p>
      </div>

      <div className="book-list">
        {/* Book 1 */}
        <div className="book-item">
          <h2>1) Musafir Cafe by Divya Prakash Dubey</h2>
          <a href="https://www.amazon.com/dp/example1" className="buy-button">Buy on Amazon</a>
          <p>
            कहानी है उन लोगों की जिन्हें न प्यार की भाषा आती है, और-जो लोग प्यार की भाषा भी नहीं समझते। यह पुस्तक प्रेमियों की है जो किसी को प्यार करने के लिए तैयार नहीं हैं, या जो उनके प्यार में असफल रहे हैं।
          </p>
          <img src="/images/musafir.jpeg" alt="Musafir Cafe by Divya Prakash Dubey" className="book-cover" />
        </div>

        {/* Book 2 */}
        <div className="book-item">
          <h2>2) Banaras Talkies by Satya Vyas</h2>
          <a href="https://www.amazon.com/dp/example2" className="buy-button">Buy on Amazon</a>
          <p>
            बनारस टॉकीज़ का पुस्तकालय देश के विशिष्ट रूप से लक्षण है। एक प्रफुल्लित करने वाली और आह्लादित किताब है, जो आपको बनारस हिंदू विश्वविद्यालय (BHU) के छात्रों के जीवन की झलक देती है।
          </p>
          <img src="/images/banaras.jpeg" alt="Banaras Talkies by Satya Vyas" className="book-cover" />
        </div>

        {/* Book 3 */}
        <div className="book-item">
          <h2>3) Dopehri by Pankaj Kapur</h2>
          <a href="https://www.amazon.com/dp/example3" className="buy-button">Buy on Amazon</a>
          <p>
            अम्मा बी एक अकेली विधवा हैं जो अपने सुनसान लखनऊ हवेली में रहती हैं। हर दोपहर को वह धीरे-धीरे तीसरी मंजिल पर जाती हैं और सड़क पर अज्ञात चेहरे को देखती हैं। यह किताब आपको जीवन में हंसी, खुशी और प्यार की खूबसूरती से अवगत कराती है।
          </p>
          <img src="/images/dopehri.jpeg" alt="Dopehri by Pankaj Kapur" className="book-cover" />
        </div>

        {/* Book 4 */}
        <div className="book-item">
          <h2>4) Dark Horse by Nilotpal Mrinal</h2>
          <a href="https://www.amazon.com/dp/example4" className="buy-button">Buy on Amazon</a>
          <p>
            दिल्ली के मुखर्जी नगर में IAS की तैयारी कर रहे छात्रों के जीवन पर आधारित है। यह पुस्तक आपको बताती है कि कैसे एक साधारण व्यक्ति असाधारण बन जाता है।
          </p>
          <img src="/images/dark.jpeg" alt="Dark Horse by Nilotpal Mrinal" className="book-cover" />
        </div>

        {/* Book 5 */}
        <div className="book-item">
          <h2>5) Ibnebatuti by Divya Prakash Dubey</h2>
          <a href="https://www.amazon.com/dp/example5" className="buy-button">Buy on Amazon</a>
          <p>
            इब्नेबतूती एक अनूठी कहानी है जो आपको एक अद्भुत यात्रा पर ले जाएगी। यह पुस्तक आपको हमारे समाज के विभिन्न पहलुओं से अवगत कराएगी।
          </p>
          <img src="/images/ibnebatuti.jpeg" alt="Ibnebatuti by Divya Prakash Dubey" className="book-cover" />
        </div>
      </div>
      <button onClick={handleBackClick} className="back-button">Back</button>
    </div>
  );
};

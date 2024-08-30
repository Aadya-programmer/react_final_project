import React from 'react';
// import './Proofreading.css'; // Import your CSS file

export const Proofreadingservice = () => {
  return (
    <div className="proofreading-container">
      <section className="proofreading">
        <h2 style={{textAlign:"center"}}>Proofreading</h2>
        <p>
          They say, ‘You can’t see your own mistakes.’ We say, ‘No worries, we’ve got you covered.’
          It’s always better to seek a second opinion to ensure your work can be published without a
          hint of worry about the correctness of its content.
        </p>
        <h3>Inclusions</h3>
        <ul>
          <li>Proofreading the book, which involves eliminating any grammatical or typographical errors.</li>
          <li>We give the book 3 rounds of readings and rule out all possible chances of any error.</li>
          <li>
            Our proofreader communicates directly with the author to better understand their viewpoint,
            ensuring that sentence structures are checked and corrected accordingly.
          </li>
        </ul>
        <h3>Time Taken</h3>
        <p>Depends on word count.</p>
        <h3>Requirement</h3>
        <p>Word file of the book before typesetting.</p>
        <h3>Here are some of the books we've proofread</h3>
        <ul>
          <li><span>'Karma'</span> by Darshan Desale</li>
          <li><span>'The Accursed God'</span> by Vivek Dutta Mishra</li>
          <li><span>'Duryodhana's Queen'</span> by Priyanka Bhuyan</li>
          <li><span>'Dhi's Law of Nine Archetypes'</span> by Saudamini Mishra</li>
          <li><span>'Dhi's Parables of Divine Transformation'</span> by Saudamini Mishra</li>
          <li><span>'Where Our Horizons Meet'</span> by Satakshi Sahay</li>
        </ul>
        <p>Contact us on <a href="https://instagram.com">Instagram</a> or <a href="https://whatsapp.com">WhatsApp</a> to know the current price of this package.</p>
      </section>
      
      <section className="testimonial">
        <h3>Testimonial</h3>
        <div className="testimonial-content">
          <img src="/images/girl2.jpeg" alt="Saudamini Mishra" className="testimonial-image" />
          <blockquote>
            <p>
              Highly recommend the proofreading service offered by them, which is delivered as it ought to be—
              with the author and proofreader working on the script together— and not remotely, with the help
              of random spell-check apps that is slowly becoming the common practice in today’s literary industry.
            </p>
            <cite style={{color:"white", fontSize:"20px"}}>Saudamini Mishra, Author of Dhi's Parables of Divine Transformation</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

// export default Proofreading;

import React from 'react';
import Search from './Search';
import './style.css';
import FAQList from './FAQList';

const FAQ: React.FC = () => {
  return (
    <>
      <section className='section-light-gray faq-top-section'>
        <div className='narrow-container'>
          <div className='small-gray-heading'>Frequently Asked Questions</div>
          <h1>How can we help you?</h1>

          <Search />
        </div>
      </section>

      <section className='faq-list-section'>
        <div className='narrow-container'>
          <FAQList />
        </div>
      </section>
    </>
  );
};

export default FAQ;

import React from 'react';
import Card from '../../common/Card';
import faqList from './faqList';
import IconArrowDown from './svg-icons/IconArrowDown';

const FAQList = () => {
  return (
    <>
      <h2 className='blue-heading'>
        Browse through most frequently asked questions
      </h2>
      {faqList.map((item, i) => (
        <Card>
          <details>
            <summary>
              <h3>{item.question}</h3>
              <IconArrowDown fillColor='#554DF1' />
            </summary>
            <p>{item.answer}</p>
          </details>
        </Card>
      ))}
    </>
  );
};

export default FAQList;

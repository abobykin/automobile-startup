import React, { useState } from 'react';
import classNames from 'classnames';
import IconLinkedin from './svg-icons/IconLinkedin';
import BackgroundImageOnLoad from 'background-image-on-load';
import './style.css';

const AboutUs: React.FC = () => {
  const [backgroundImageLoaded, setBackgroundImageLoaded] = useState(false);
  const withLeadershipSection = false;

  return (
    <>
      <section className='intro-section'>
        <div className='narrow-container'>
          <div className='small-gray-heading'>Introducing Fendr Bendr</div>
          <h2>
            Fendr Bendr is an online marketplace that
            <span className='red-heading-part'> connects </span>
            people in need of a car repair with local car
            <span className='red-heading-part'> repair shops</span>.
          </h2>
        </div>
      </section>

      <section
        className={classNames('aboutus-photo-section', {
          loaded: backgroundImageLoaded,
        })}
      />

      <BackgroundImageOnLoad
        src={'/img/aboutus.jpg'}
        onLoadBg={() => setBackgroundImageLoaded(true)}
        onError={(err) => console.log('error', err)}
      />

      <section className='section-light-gray aboutus-text-section'>
        <div className='narrow-container'>
          <h2>About Us</h2>
          <div className='aboutus-text'>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam.
            </p>
          </div>
        </div>
      </section>

      {withLeadershipSection && (
        <section className='leadership-team-section'>
          <div className='narrow-container'>
            <h2>Leadership Team</h2>
            <div className='leaders'>
              <div className='leader'>
                <div className='image-column'>
                  <img src='img/leader-ava-1.jpg' alt='avatar' />
                </div>
                <div className='leader-description'>
                  <h3>Diego Saldeno</h3>
                  <span className='leader-role'>CEO</span>
                  <p>
                    Emmy Award winning advertiser with experience leading
                    marketing and media strategy for Inc. 500 companies. Founded
                    Saldeno Auto, a vehicle rental company for rideshare drivers
                    in New York.
                  </p>
                  <a
                    href='https://www.linkedin.com/in/diego-saldeno-10435232/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <IconLinkedin />
                  </a>
                </div>
              </div>
              <div className='leader'>
                <div className='image-column'>
                  <img src='img/leader-ava-2.jpg' alt='avatar' />
                </div>
                <div className='leader-description'>
                  <h3>Evgenia Ochkovskaya</h3>
                  <span className='leader-role'>CDO</span>
                  <p>
                    Led analytics department for leading market research
                    agencies in North America and Europe.
                  </p>
                  <a href='/'>
                    <IconLinkedin />
                  </a>
                </div>
              </div>
              <div className='leader'>
                <div className='image-column'>
                  <img src='img/leader-ava-3.jpg' alt='avatar' />
                </div>
                <div className='leader-description'>
                  <h3>Bruno Souto</h3>
                  <span className='leader-role'>CTO</span>
                  <p>
                    Engineer with experience leading software and product
                    development in global technology companies.
                  </p>
                  <a href='/'>
                    <IconLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AboutUs;

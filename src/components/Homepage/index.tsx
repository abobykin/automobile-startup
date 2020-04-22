import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconMapMarker from '../svg-icons/IconMapMarker';
import IconRepair from '../svg-icons/IconRepair';
import IconSchedule from '../svg-icons/IconSchedule';
import IconLinkArrow from '../svg-icons/IconLinkArrow';
import GetQuoteForm from './GetQuoteForm';
import RequestLinkForm from './RequestLinkForm';
import HowItWorksVideoDemo from '../HowItWorksVideoDemo';
import '../../styles/forms.scss';
import './style.scss';

const Homepage: React.FC = () => {
  const [appDemoLoaded, setAppDemoLoaded] = useState(false);
  const [phoneDemoLoaded, setPhoneDemoLoaded] = useState(false);

  return (
    <>
      <div className={`background-figure ${appDemoLoaded && 'loaded'}`}></div>
      <section className='top-section'>
        <div className='narrow-container'>
          <div className='app-description'>
            <h1>
              High quality car service{' '}
              <span className='red-text nowrap-text'>near you.</span>
            </h1>
            <p>Find a trusted partner and get quotes for your car.</p>

            <GetQuoteForm />
          </div>
          <div className={`app-demo-screen ${appDemoLoaded && 'loaded'}`}>
            <img
              src='/img/app-demo-screen.png'
              onLoad={() => setAppDemoLoaded(true)}
              alt='select type of car repair'
            />
          </div>
        </div>
      </section>

      <section className='howitworks-section'>
        <div className='narrow-container'>
          <h2 className='blue-heading'>How it works</h2>
          <div className='columns'>
            <div className='column'>
              <IconMapMarker />
              <h3>Describe the Repair</h3>
              <p>
                Choose your service or describe the problem, then compare quotes
                from shops nearby.
              </p>
            </div>
            <div className='column'>
              <IconRepair />
              <h3>Get quotes</h3>
              <p>
                Review causes, symptoms, and estimate repair costs choose your
                service or describe.
              </p>
            </div>
            <div className='column'>
              <IconSchedule />
              <h3>Schedule your appointment</h3>
              <p>
                Choose the shop that's right for you, then pick a convenient day
                and time for your service.
              </p>
            </div>
          </div>
          <Link to='/signup'>
            Get Started
            <IconLinkArrow fillColor='#554DF1' />
          </Link>
        </div>
      </section>

      <section className='homepage-video-section'>
        <div className='container'>
          <HowItWorksVideoDemo />
        </div>
      </section>

      <section className='mobile-app-section'>
        <div className='narrow-container'>
          <div className='mobile-app-demo-screen'>
            <img
              src='/img/mobile.png'
              alt=''
              className={`${phoneDemoLoaded && 'loaded'}`}
              onLoad={() => setPhoneDemoLoaded(true)}
            />
          </div>
          <div className='request-link'>
            <h2>
              On the go? <br />
              <span className='blue-heading-part'>Download our app</span>
            </h2>
            <p>Find a trusted partner and get quotes for your car.</p>

            <RequestLinkForm />
          </div>
        </div>
      </section>

      <section className='happy-users-section'>
        <div className='container'>
          <div className='red-small-subheading'>Testimonials</div>
          <h2>Our happy users</h2>
          <div className='users-cards'>
            <div className='card user-card'>
              <p>
                “It's exactly what I've been looking for. Absolutely wonderful!
                I just can't get enough of Fendr Bendr"
              </p>
              <div className='user'>
                <img src='/img/ava-1.jpg' alt='' />
                Michael Bronston
              </div>
            </div>
            <div className='card user-card active'>
              <p>
                "I don't know what else to say. Absolutely wonderful! I'm good
                to go. It really worth."
              </p>
              <div className='user'>
                <img src='/img/ava-2.jpg' alt='' />
                Rosie Keith
              </div>
            </div>
            <div className='card user-card'>
              <p>
                "Your company is truly upstanding and is behind its product
                100%. This is simply unbelievable!"
              </p>
              <div className='user'>
                <img src='/img/ava-3.jpg' alt='' />
                Edward Hollin
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;

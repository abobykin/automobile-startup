import React from 'react';
import { Link } from 'react-router-dom';
import IconMapMarker from '../svg-icons/IconMapMarker';
import IconRepair from '../svg-icons/IconRepair';
import IconSchedule from '../svg-icons/IconSchedule';
import IconLinkArrow from '../svg-icons/IconLinkArrow';
import HowItWorksVideoDemo from '../HowItWorksVideoDemo';
import './style.css';

const HowItWorks = () => {
  return (
    <>
      <section className='howitworks-video-section'>
        <HowItWorksVideoDemo />
      </section>

      <section className='howitworks-section our-process-section'>
        <div className='narrow-container'>
          <h2 className='blue-heading'>Our Process</h2>
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
    </>
  );
};

export default HowItWorks;

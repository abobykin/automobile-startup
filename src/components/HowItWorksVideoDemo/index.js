import React, { useState } from 'react';
import classNames from 'classnames';
import { LiteYouTubeEmbed } from 'react-lite-youtube-embed';
import IconPlayVideo from './svg-icons/IconPlayVideo';
import IconPlus from '../HowItWorks/svg-icons/IconPlus';
import BackgroundImageOnLoad from 'background-image-on-load';
import './style.css';

const HowItWorksVideoDemo = () => {
  const [placeholder, setPlaceholder] = useState(true);
  const [placeholderImageLoaded, setPlaceholderImageLoaded] = useState(false);

  return (
    <div
      className={classNames('video-container', {
        loaded: placeholderImageLoaded,
      })}
    >
      {placeholder ? (
        <div
          className={classNames('video-placeholder', {
            loaded: placeholderImageLoaded,
          })}
        >
          <div className='narrow-container'>
            <h1>How It Works</h1>
            <p>Find a trusted partner and get quotes for your car.</p>
            <span
              onClick={() => setPlaceholder(false)}
              className='button button-white play-video-button'
            >
              <IconPlayVideo fillColor='black' />
              Play Video
            </span>
          </div>
          <BackgroundImageOnLoad
            src={'/img/video-placeholder.jpg'}
            onLoadBg={() => setPlaceholderImageLoaded(true)}
            onError={(err) => console.log('error', err)}
          />
        </div>
      ) : (
        <>
          <LiteYouTubeEmbed
            id='HPhRAcxxu-4'
            playlist={false}
            poster='maxresdefault'
            title='Fendr Bendr'
            rel={0}
          />
          <span
            onClick={() => setPlaceholder(true)}
            className='close-video-button'
          >
            <IconPlus />
          </span>
        </>
      )}
    </div>
  );
};

export default HowItWorksVideoDemo;

import React, { useContext } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import IconAppstore from '../svg-icons/IconAppstore'
import IconGooglePlay from '../svg-icons/IconGooglePlay'
import IconFacebook from '../svg-icons/IconFacebook'
import IconTwitter from '../svg-icons/IconTwitter'
import IconInstagram from '../svg-icons/IconInstagram'
import AuthorizedContext from '../../../contexts/AuthorizedContext'

const Footer: React.FC = () => {
  const authorized = useContext(AuthorizedContext)

  return (
    <footer
      className={classNames('footer', {
        'dashboard-footer': authorized,
      })}
    >
      <div className='wide-container'>
        {authorized ? null : (
          <nav className='columns'>
            <div className='column'>
              <h2>You've got questions, we've got answers!</h2>
              <button className='button button-red'>Chat with us</button>
            </div>
            <div className='column links-column'>
              <h4>Company</h4>
              <Link to='/aboutus'>About Us</Link>
              <br />
              <Link to='/howitworks'>How It Works</Link>
              <br />
              <Link to='/become-partner'>Become a Partner</Link>
              <br />
              <Link to='/'>Our Blog</Link>
            </div>
            <div className='column links-column'>
              <h4>Support</h4>
              <Link to='/faq'>FAQs</Link>
              <br />
              <Link to='/contactus'>Contact Us</Link>
              <br />
              <Link to='/'>Privacy Policy</Link>
              <br />
              <Link to='/'>Terms of Use</Link>
            </div>
            <div className='column'>
              <h4>Download</h4>
              <div className='store-buttons'>
                <Link to='/'>
                  <span className='store-button'>
                    <IconAppstore />
                    Apple Store
                  </span>
                </Link>
                <Link to='/'>
                  <span className='store-button'>
                    <IconGooglePlay />
                    Google Play
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        )}

        <div className='copyright-social'>
          © 2019 Fendr Bendr
          <div className='social-buttons'>
            <Link
              to='//www.facebook.com/Fendr-Bendr-108560373828504'
              target='_blank'
            >
              <IconFacebook fillColor={authorized ? '#8C8E9C' : 'white'} />
            </Link>
            <Link to='//www.twitter.com/fendr__bendr' target='_blank'>
              <IconTwitter fillColor={authorized ? '#8C8E9C' : 'white'} />
            </Link>
            <Link to='//www.instagram.com/fendr_bendr/' target='_blank'>
              <IconInstagram fillColor={authorized ? '#8C8E9C' : 'white'} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames'
import IconAppstore from '../../../svg-icons/IconAppstore'
import IconGooglePlay from '../../../svg-icons/IconGooglePlay'
import IconFacebook from '../../../svg-icons/IconFacebook'
import IconTwitter from '../../../svg-icons/IconTwitter'
import IconInstagram from '../../../svg-icons/IconInstagram'
import { navMenuContent, navMenuAuthorizedContent } from './navMenuContent'
import AuthorizedContext from '../../../../../contexts/AuthorizedContext'

const SidebarContent = ({ setOpened, opened }) => {
  const authorized = useContext(AuthorizedContext)

  return (
    <>
      <div
        className={classNames('sidebar-overlay', {
          opened,
        })}
        onClick={() => setOpened(!opened)}
      />
      <div
        className={classNames('sidebar-content', {
          opened,
        })}
      >
        <nav className='sidebar-nav'>
          {authorized
            ? navMenuAuthorizedContent.map((menuItem) => (
                <li key={menuItem.name} onClick={() => setOpened(!opened)}>
                  <NavLink
                    exact
                    to={menuItem.link}
                    className='sidebar-nav-link'
                  >
                    {menuItem.name}
                  </NavLink>
                </li>
              ))
            : navMenuContent.map((menuItem) => (
                <li key={menuItem.name} onClick={() => setOpened(!opened)}>
                  <NavLink
                    exact
                    to={menuItem.link}
                    className='sidebar-nav-link'
                  >
                    {menuItem.name}
                  </NavLink>
                </li>
              ))}
        </nav>

        <div className='sidebar-store-buttons'>
          <h4>Download our App</h4>
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

        <div className='social-buttons'>
          <Link
            to='//www.facebook.com/Fendr-Bendr-108560373828504'
            target='_blank'
          >
            <IconFacebook fillColor='#6f707a' />
          </Link>
          <Link to='//www.twitter.com/fendr__bendr' target='_blank'>
            <IconTwitter fillColor='#6f707a' />
          </Link>
          <Link to='//www.instagram.com/fendr_bendr/' target='_blank'>
            <IconInstagram fillColor='#6f707a' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default SidebarContent

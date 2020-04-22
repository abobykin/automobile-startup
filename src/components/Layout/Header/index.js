import React, { useContext } from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom'
import SidebarRight from './SidebarRight'
import AuthorizedContext from '../../../contexts/AuthorizedContext'
import './style.css'

const Header = ({ location, onChangeFixedLayout }) => {
  const authorized = useContext(AuthorizedContext)

  return (
    <header>
      <div className='wide-container'>
        <a href='/' className='logo-link'>
          {location.pathname === '/howitworks' ||
          location.pathname.includes('/signup-') ||
          location.pathname.includes('/login') ? (
            <img src='/img/logo-white.svg' className='logo' alt='logo' />
          ) : (
            <img src='/img/logo.svg' className='logo' alt='logo' />
          )}
        </a>
        {authorized ? (
          <span className='sign-buttons'>
            <a
              href='/get-quote'
              className={classNames('button', {
                'button-red': location.pathname === '/howitworks',
                'button-blue': location.pathname !== '/howitworks',
              })}
            >
              Get a Quote
            </a>
          </span>
        ) : (
          location.pathname !== '/signup' &&
          !location.pathname.includes('/signup-') &&
          !location.pathname.includes('/login') && (
            <span className='sign-buttons'>
              <a
                href='/login'
                className={classNames('button', {
                  'button-red': location.pathname === '/howitworks',
                  'button-gray': location.pathname !== '/howitworks',
                })}
              >
                Login
              </a>
              <a href='/signup' className='button button-blue'>
                Sign Up
              </a>
            </span>
          )
        )}

        <SidebarRight onChangeFixedLayout={onChangeFixedLayout} />
      </div>
    </header>
  )
}

export default withRouter(Header)

import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import customerMenuContent from './menuContent'
import IconMenuUser from './svg-icons/IconMenuUser'
import IconMenuCar from './svg-icons/IconMenuCar'
import IconMenuRepair from './svg-icons/IconMenuRepair'
import IconMenuBell from './svg-icons/IconMenuBell'
import IconMenuQuote from './svg-icons/IconMenuQuote'
import './style.scss'

const SidebarForDashboard = ({ location }) => {
  const setCustomerMenuIcon = (currentMenuItem) => {
    switch (currentMenuItem.linkUrl) {
      case '/dashboard':
        return (
          <IconMenuUser
            fillColor={
              location.pathname === currentMenuItem.linkUrl
                ? '#554df1'
                : '#8c8e9c'
            }
          />
        )
      case '/dashboard/vehicles':
        return (
          <IconMenuCar
            fillColor={
              location.pathname.includes(currentMenuItem.linkUrl)
                ? '#554df1'
                : '#8c8e9c'
            }
          />
        )
      case '/dashboard/repairs':
        return (
          <IconMenuRepair
            fillColor={
              location.pathname.includes(currentMenuItem.linkUrl)
                ? '#554df1'
                : '#8c8e9c'
            }
          />
        )
      case '/dashboard/notifications':
        return (
          <IconMenuBell
            fillColor={
              location.pathname.includes(currentMenuItem.linkUrl)
                ? '#554df1'
                : '#8c8e9c'
            }
          />
        )
      case '/dashboard/orders':
        return (
          <IconMenuQuote
            fillColor={
              location.pathname.includes(currentMenuItem.linkUrl)
                ? '#554df1'
                : '#8c8e9c'
            }
          />
        )
      case '/dashboard/settings':
        return (
          <IconMenuQuote
            fillColor={
              location.pathname.includes(currentMenuItem.linkUrl)
                ? '#554df1'
                : '#8c8e9c'
            }
          />
        )
      default:
        return (
          <IconMenuUser
            fillColor={
              location.pathname.includes(currentMenuItem.linkUrl)
                ? '#554df1'
                : '#8c8e9c'
            }
          />
        )
    }
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-body'>
        <nav className='sidebar-menu'>
          <ul>
            {customerMenuContent.map((menuItem) => {
              return (
                <li key={menuItem.linkName}>
                  <Link
                    to={menuItem.linkUrl}
                    className={classNames('sidebar-menu-link', {
                      active: location.pathname === menuItem.linkUrl && location.pathname === '/dashboard'
                    }, {
                      'active-whole': location.pathname.includes(menuItem.linkUrl) && location.pathname !== '/dashboard' && menuItem.linkUrl !== '/dashboard'
                    })}
                  >
                    {setCustomerMenuIcon(menuItem)}
                    {menuItem.linkName}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <p className='membership-notice'>Member since Jan 2019</p>
    </div>
  )
}

export default withRouter(SidebarForDashboard)

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-body'>
        <nav className='sidebar-nav-menu'>
          <ul>
            <li>
              <Link to=''></Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className='membership-notice'>Member since Jan 2019</p>
    </div>
  );
};

export default Sidebar;

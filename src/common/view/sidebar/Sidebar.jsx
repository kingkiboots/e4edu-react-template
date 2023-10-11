import React from 'react'
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="page-sidebar">
          <Navigation>
            <li>
                <Link className="waves-effect waves-themed" to="/sample">
                    <i className="fal fa-smile"></i>
                    <span className="nav-link-text">샘플</span>
                </Link>
                <Link className="waves-effect waves-themed" to="/practice">
                    <i className="fal fa-user"></i>
                    <span className="nav-link-text">실습레이아웃</span>
                </Link>
            </li>
          </Navigation>
        </aside>
      );
    
}

export default Sidebar
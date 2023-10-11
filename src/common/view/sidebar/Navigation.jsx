import React from 'react';

const Navigation = ({
  children
}) => {
  return <nav id="js-primary-nav" className="primary-nav js-list-filter" role="navigation">
    <ul id="js-nav-menu" className="nav-menu js-nav-built">
      {children}
    </ul>
  </nav>
}

export default Navigation

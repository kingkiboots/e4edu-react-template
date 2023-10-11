import React from 'react'
import HeaderLayout from '../header/HeaderLayout';

const ContentLayout = ({children}) => {
    return (
        <div className="page-content-wrapper">
          <HeaderLayout />
          {children}
        </div>
      );
    
}

export default ContentLayout
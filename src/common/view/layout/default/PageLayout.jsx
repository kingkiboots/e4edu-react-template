import React from 'react'
import ContentLayout from './ContentLayout'
import Sidebar from 'common/view/sidebar/Sidebar'

const PageLayout = ({children}) => {
  return (
    <div className="page-wrapper">
    <div className="page-inner">
      <Sidebar />
      <ContentLayout >
        {children}
      </ContentLayout>
    </div>
  </div >

  )
}

export default PageLayout
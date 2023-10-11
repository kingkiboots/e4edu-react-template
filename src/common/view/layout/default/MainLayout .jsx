import React from 'react'
import PageLayout from './PageLayout'
import { Outlet } from 'react-router-dom'

const MainLayout  = () => {
  return (
    <PageLayout>
        <main id="js-page-content" role="main" className="page-content">
          <div className="row">
            <div className="col-sm-8">
                <ol className="breadcrumb bg-transparent breadcrumb-sm pl-0 pr-0">
                    <li className="breadcrumb-item">
                        <a href="#">
                            <i className="fal fa-home mr-1"></i> Home
                        </a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">
                            가맹점
                        </a>
                    </li>
                    <li className="breadcrumb-item active">그룹가맹점정보 관리</li>
                </ol>
            </div>
          </div>
          <Outlet />
        </main>
        <div className="page-content-overlay" data-action="toggle" data-class="mobile-nav-on"></div>
      </PageLayout>

  )
}

export default MainLayout 
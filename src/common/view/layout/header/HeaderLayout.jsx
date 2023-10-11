import React from 'react'

const HeaderLayout = () => {
  return (
    <div>
      <header className="page-header" role="banner">
        <div className="hidden-md-down dropdown-icon-menu position-relative">
          <a className="header-btn btn js-waves-off" data-action="toggle" data-class="nav-function-hidden" title="Hide Navigation">
            <i className="ni ni-menu"></i>
          </a>
          <ul>
            <li>
              <a className="btn js-waves-off" data-action="toggle" data-class="nav-function-minify" title="Minify Navigation">
                <i className="ni ni-minify-nav"></i>
              </a>
            </li>
            <li>
              <a className="btn js-waves-off" data-action="toggle" data-class="nav-function-fixed" title="Lock Navigation">
                <i className="ni ni-lock-nav"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden-lg-up">
          <a
            className="header-btn btn press-scale-down waves-effect waves-themed"
            data-action="toggle"
            data-class="mobile-nav-on"
            style={{ borderColor: '#dbdbdb', backgroundColor: '#fff', backgroundImage: 'none', color: '#a6a6a6 !important' }}>
            <i className="ni ni-menu"></i>
          </a>
        </div>
        <div className="ml-auto d-flex">
          <div>
            <a title="welcome" className="header-icon d-flex align-items-center justify-content-center ml-2">
              <span className="userinfo mgl10">김길동 님 환영합니다.</span>
            </a>
          </div>
          <div>
            <a data-toggle="dropdown" title="회원정보변경" className="header-icon d-flex align-items-center justify-content-center ml-2">
              <i className="fal fa-ellipsis-v"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-animated dropdown">
              <a className="dropdown-item m-0 pt-3 pb-3">
                <span>비밀번호변경</span>
                <i className="fal fa-lock-alt float-right"></i>
              </a>
              <div className="dropdown-divider m-0"></div>
              {/* <a className="dropdown-item fw-500 pt-3 pb-3" onClick={() => setIsLogin(false)}> */}
              <a className="dropdown-item fw-500 pt-3 pb-3">
                <span>Logout</span>
                <i className="fal fa-sign-out-alt float-right"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>

  )
}

export default HeaderLayout
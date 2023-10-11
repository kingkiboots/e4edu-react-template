import React from 'react';
import Layout from '../default/Layout';


const ErrorLayout = () => {
  return (
    <Layout>
      <div className="row">
        <div className="h-alt-hf d-flex flex-column align-items-center justify-content-center text-center">
          <h1 className="page-error color-fusion-500">
            ERROR <span className="text-gradient">404</span>
            <small className="fw-500">
              Something <u>went</u> wrong!
            </small>
          </h1>
          <h3 className="fw-500 mb-5">You have experienced a technical error. We apologize.</h3>
          <h4>
            We are working hard to correct this issue. Please wait a few moments and try your search again.
            <br />
            In the meantime, check out whats new on OK! PayX BC카드 제휴결제 System.
          </h4>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorLayout;

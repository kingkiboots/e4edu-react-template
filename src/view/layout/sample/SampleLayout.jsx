import React, { useState } from 'react';
import SampleSearchbarLayout from './SampleSearchbarLayout';
import Layout from 'common/view/layout/default/Layout';
import SampleListLayout from './SampleListLayout';
import SampleInputLayout from './SampleInputLayout';

const SampleLayout = () => {
  const [searchInfo, setSearchInfo] = useState({
    isFetch: false,
    isClear: false
  });
  return (
    <Layout>
      <SampleSearchbarLayout setSearchInfo={setSearchInfo} />
      <SampleListLayout searchInfo={searchInfo} />
      <SampleInputLayout />
    </Layout>
  );
};

export default SampleLayout;

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../common/view/layout/default/MainLayout ';
import ErrorLayout from 'common/view/layout/error/ErrorLayout';
import SampleLayout from 'view/layout/sample/SampleLayout';
import PracticeLayout from 'view/layout/practice/PracticeLayout';

const Router = () => {
  const defaultPath = '/sample';
  return (
    <Routes>
      <Route path="/" element={<Navigate to={defaultPath} replace />} />
      <Route path="/" element={<MainLayout />}>
        {/* 샘플 */}
        <Route path="/sample" element={<SampleLayout />} />
        <Route path="/practice" element={<PracticeLayout />} />
        <Route path="/error" element={<ErrorLayout />} />
      </Route>
      <Route path="*" element={<Navigate to={'/error'} replace />} />
    </Routes>
  );
};

export default Router;

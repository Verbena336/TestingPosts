import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const PostPage = lazy(() => import('./PostPage'));
const ErrorPage = lazy(() => import('./ErrorPage'));

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/post/:postId" element={<PostPage />}></Route>
      <Route path="/*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default AppRoutes;

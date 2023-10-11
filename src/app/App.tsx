import React from 'react';

import { withProviders } from './providers';

import AppRoutes from 'pages';

import './index.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default withProviders(App);

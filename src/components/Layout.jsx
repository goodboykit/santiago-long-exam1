import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <div className="background-overlay" />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

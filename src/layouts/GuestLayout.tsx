
import React from 'react';
import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default GuestLayout;

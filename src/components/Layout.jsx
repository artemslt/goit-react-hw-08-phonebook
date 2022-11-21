import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppNavigation } from './AppNavigation/AppNavigation';

export const Layout = () => {
  return (
    <div>
      <AppNavigation />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

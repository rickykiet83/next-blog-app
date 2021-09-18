import React, { Fragment, ReactNode } from 'react';

import MainNavigation from './main-navigation';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
}

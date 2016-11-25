import React from 'react';
import Header from './header/Header';
import styles from './Layout.scss';

const Layout = ({children}) => (
  <div className={styles.container}>
    <Header />
    {children}
  </div>
);

export default Layout;

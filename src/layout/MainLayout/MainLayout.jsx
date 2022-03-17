import React from 'react';
import Header from "../../ui/Header/Header";

import styles from './mainLayout.module.scss'

const MainLayout = ({children}) => {
  return (
    <div className={styles.container}>
      <Header
      />
      <div
        id="mainLayoutContainer"
        className={styles.content}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
import React, { useState } from 'react'
import * as R from 'ramda'
import cx from 'classnames'

import Header from '@app/ui/Header/Header'
import styles from './mainLayout.module.scss'
import Drawer from '@app/ui/Drawer/Drawer'

const MainLayout = ({children}) => {
  const [openNavigation, setOpenNavigation] = useState(true)

  const handleDrawerToggle = () => {
    setOpenNavigation(R.not)
  }

  const contentClassName = cx(styles.content, {
    [styles.open]: openNavigation,
  })

  return (
    <div className={styles.container}>
      <Header
        openNavigation={openNavigation}
        onNavigationToggle={handleDrawerToggle}
      />
      <Drawer
        open={openNavigation}
        onClose={handleDrawerToggle}
      />
      <div
        id="mainLayoutContainer"
        className={contentClassName}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";

import styles from './header.module.scss'


const Header = () => {
  return (
    <AppBar position="fixed" className={styles.header}>
      <Toolbar
        variant="dense"
        className={styles.content}
      >
        <Typography className={styles.navigationText}>
          {/*{title}*/}
          Title
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header

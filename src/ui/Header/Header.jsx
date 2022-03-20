import React from 'react';
import cx from 'classnames'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

import styles from './header.module.scss'

const Header = ({
  openNavigation,
  onNavigationToggle,
}) => {
  const headerClassName = cx(styles.header, {
    [styles.open]: openNavigation,
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={headerClassName}>
        <Toolbar
          variant="dense"
          className={styles.content}
        >
          <If condition={!openNavigation}>
            <IconButton
              aria-label="open drawer"
              edge="start"
              className={styles.navigation}
              onClick={onNavigationToggle}
            >
              <MenuIcon />
            </IconButton>
          </If>
          <Typography className={styles.navigationText}>
            {/*{title}*/}
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header

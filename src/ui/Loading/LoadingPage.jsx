import React from 'react'

import { CircularProgress } from '@mui/material'

import styles from './loading.module.scss'

const LoadingPage = () => (
  <div className={styles.center}>
    <CircularProgress />
  </div>
)

export default LoadingPage

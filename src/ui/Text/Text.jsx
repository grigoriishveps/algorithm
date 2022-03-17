import React from 'react'
import { Typography } from '@mui/material'

const Text = ({ children, className = '' }) => {
  return (
    <Typography
      className={className}
    >
      {children}
    </Typography>
  )
}

export default Text
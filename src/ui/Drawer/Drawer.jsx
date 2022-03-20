import React from 'react'
import { useHistory } from 'react-router-dom'

import MuiDrawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import styles from './drawer.module.scss'


const listNavigation = [
  {
    label: 'Числа',
    path: '/values',
    ready: true,
    color: '',
  },
  {
    label: 'Матрицы',
    path: '/matrix',
    ready: true,
    color: '',
  },
  {
    label: 'Аль-Хорезми',
    path: '/horesmi',
    ready: true,
    color: '',
  },
  {
    label: 'Карацуба',
    path: '/kara',
    ready: false,
    color: '',
  },
  {
    label: 'Рачинский 1',
    path: '/rachfirst',
    ready: false,
    color: '',
  },
  {
    label: 'Рачинский 2',
    path: '/rachsecond',
    ready: false,
    color: '',
  },
  {
    label: 'Рачинский 3',
    path: '/rachthird',
    ready: false,
    color: '',
  },
  {
    label: 'Паскаля',
    path: '/pascal',
    ready: false,
    color: '',
  },
  {
    label: 'Лукас',
    path: '/lukas',
    ready: false,
    color: '',
  },
  {
    label: 'Конд. Джонсона',
    path: '/jonson',
    ready: false,
    color: '',
  },
]

const Drawer = ({ open, onClose }) => {
  let history = useHistory();

  const handleNavigate = (path) => {
    return () => {
      history.push(path)
    }
  }

  return (
    <MuiDrawer
      className={styles.drawer}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <div className={styles.header}>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <For of={listNavigation} body={(route) => (
          <ListItem
            button
            className={route.ready? styles.done : styles.failure}
            key={route.label}
            onClick={handleNavigate(route.path)}
          >
            <ListItemText primary={route.label} />
          </ListItem>
        )}
        />
      </List>
    </MuiDrawer>
  )
}

export default Drawer

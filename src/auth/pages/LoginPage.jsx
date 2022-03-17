import React from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import { useFormik } from 'formik'
// import { observer } from 'mobx-react'
// import { MainRoute } from 'main'

import Text from '../../ui/Text/Text'


import styles from './loginPage.module.scss'
import {Button, Container} from "@mui/material";
import TextField from "../../ui/TextField/TextField";


const LoginPage = () => {
  //const { authStore } = useStores()
  console.log(styles)
  let history = useHistory();

  const handleLogin = async ({ email, password }) => {
    // await authStore.login({
    //   email,
    //   password,
    //   deviceId: deviceStore.deviceId,
    // })
    history.push('/')
    console.log('Login')
    Storage.delete('adminMode')

  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleLogin,
  })
  //
  // if (authStore.isAuthenticated) {
  //   return <Redirect to={MainRoute.path} />
  // }

  return (
    <Container
      className={styles.container}
      maxWidth="xs"
    >
      <form onSubmit={formik.handleSubmit}>
        <Text className={styles.headerText}>
          Sign In
        </Text>
        <TextField
          required
          fullWidth
          autoFocus
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button
          type="submit"
          className={styles.button}
        >
          Sign In
        </Button>
      </form>
    </Container>
  )
}

// export default observer(LoginPage)
export default LoginPage
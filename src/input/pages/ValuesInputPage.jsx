import React, { useEffect, useState } from 'react'
import { observer, inject } from 'mobx-react'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import { Button, TextField } from '@mui/material'

import styles from './inputPage.module.scss'

const ValuesInputPage = ({ valuesStore }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSave = async ( values ) => {
    valuesStore.setValues(values.x, values.y)
    enqueueSnackbar('Saved values')
  }

  const formik = useFormik({
    initialValues: {
      x: 0,
      y: 0,
    },
    onSubmit: handleSave,
  })

  useEffect(() => {
    formik.resetForm({
      values: {
        x: valuesStore.x,
        y: valuesStore.y,
      },
    })
  }, [])

  const { values, handleSubmit, handleChange } = formik

  return (
    <div className={styles.container}>
      <TextField
        id="outlined-number"
        label="X"
        type="number"
        name="x"
        value={values.x}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-number"
        label="Y"
        name="y"
        type="number"
        value={values.y}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
      >
        Сохранить
      </Button>
    </div>
  )
}

export default ValuesInputPage |> observer |> inject('valuesStore')

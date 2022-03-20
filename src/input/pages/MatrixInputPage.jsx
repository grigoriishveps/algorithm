import React, { useEffect, useState } from 'react'
import * as R from 'ramda'

import { inject, observer } from 'mobx-react'
import { useSnackbar } from 'notistack'
import { FieldArray, useFormik } from 'formik'
import { Button, TextField } from '@mui/material'

import styles from './inputPage.module.scss'

const MatrixInputPage = ({ matrixStore }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [prevSize, setPrevState] = useState(1)
  const handleSave = async ( values ) => {
    matrixStore.setValues(values.size, R.clone(values.matrix))
    enqueueSnackbar('Saved matrix')
  }

  const formik = useFormik({
    initialValues: {
      size: 1,
      matrix: [[0]],
      initial: false,
    },
    onSubmit: handleSave,
  })


  const { values, handleSubmit, handleChange } = formik
  useEffect(() => {
    console.log(prevSize, values.size, values.initial)
    if (values.initial || prevSize === values.size) {
      setPrevState(values.size)
      // console.log(values.size, values.initial, values.matrix)
      formik.resetForm({
        values: {
          size: values.size,
          matrix: R.clone(values.matrix),
          initial: false
        },
      })
      return
    }
    // console.log('another')
    const arr = []

    for (let i = 0; i < values.size; i++) {
      arr.push(new Array(values.size))

      for (let j = 0; j < values.size; j++) {
        arr[i][j] = 0
      }
    }

    setPrevState(values.size)
    formik.resetForm({
      values: {
        size: values.size,
        matrix: arr,
        initial:false
      },
    })
  }, [values.size, values.initial])

  useEffect(() => {
    // console.log("intital")
    setPrevState(matrixStore.size)
    formik.resetForm({
      values: {
        size: matrixStore.size,
        matrix: R.clone(matrixStore.matrix),
        initial: true
      },
    })
  }, [])

  return (
    <div className={styles.container}>
      <TextField
        id="outlined-number"
        label="Size"
        name="size"
        type="number"
        value={values.size}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <div className={styles.row}>
        <For of={values.matrix} body={(matrix, matrix_index) => (
          // <FieldArray
          //   name={`matrix[${matrix_index}]`}
          //   render={arrayHelpers => (
              <div key={`matrix-${values.initial}-${values.size}-${matrix_index}`} id={`matrix-${matrix_index}`}>
                <For of={matrix} index="idx" body={(m_val, idx) => (
                  <div className={styles.cell}>
                  <TextField
                    key={`matrix-${values.initial}-${values.size}-${matrix_index}-${idx}`}
                    // id="outlined-number"
                    width={50}
                    label={`m-${matrix_index}-${idx}`}
                    name={`matrix[${matrix_index}][${idx}]`}
                    type="number"
                    value={m_val}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  </div>
                )}/>
              </div>
            // )}
          // />
        )}/>
      </div>
      <Button
        variant="contained"
        onClick={handleSubmit}
      >
        Сохранить
      </Button>
    </div>
  )
}

export default MatrixInputPage |> observer |> inject('matrixStore')

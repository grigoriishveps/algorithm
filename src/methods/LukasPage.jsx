import React from 'react'
import { inject, observer } from 'mobx-react'
import * as R from 'ramda'

import { useLukasQuery } from '@app/common/api'
import LoadingRemote from '@app/common/LoadingRemote'

import styles from '@app/methods/methods.module.scss'

const LukasPage = ({ valuesStore }) => {
  const { data, status } = useLukasQuery(valuesStore.x, valuesStore.y)
  const arr = [0,0,0,0]

  if(R.isNil(data))
    return null

  return (
    <LoadingRemote status={status}>
      <div className={styles.pascal}>
        <For of={arr} body={(step, idx) => (
          <div className={styles.row}>
            {data[`${idx}`]}
          </div>
        )}/>
        <div className={styles.result}>
          {data.result}
        </div>
      </div>
    </LoadingRemote>
  )
}

export default LukasPage|> observer |> inject('valuesStore')

import React from 'react'
import LoadingRemote from '@app/common/LoadingRemote'
import { useKaraQuery } from '@app/common/api'
import { inject, observer } from 'mobx-react'
import * as R from 'ramda'

const KaraPage = ({ valuesStore }) => {
  const { data, status } = useKaraQuery()

  return (
    <LoadingRemote status={status}>
      <div>

      </div>
    </LoadingRemote>
  )
}

export default KaraPage|> observer |> inject('valuesStore')

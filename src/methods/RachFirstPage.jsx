import React from 'react'
import LoadingRemote from '@app/common/LoadingRemote'
import { inject, observer } from 'mobx-react'
import * as R from 'ramda'

const RachFirstPage = () => {


  return (
    <LoadingRemote>

    </LoadingRemote>
  )
}

export default RachFirstPage|> observer |> inject('valuesStore')

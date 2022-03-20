import React from 'react'

import LoadingComponent from '@app/ui/Loading/LoadingPage'
import ErrorLoading from '@app/ui/ErrorLoading/ErrorLoading'

const LoadingRemote = ({ status, children }) => {
  return (
    <Choose>
      <When condition={status === 'loading'}>
        <LoadingComponent />
      </When>
      <When condition={status === 'success'}>
        {children}
      </When>
      <When condition={status === 'error'}>
        <ErrorLoading />
      </When>
    </Choose>
  )
}

export default LoadingRemote

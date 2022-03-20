import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import MainLayout from '@app/layout/MainLayout/MainLayout'
import MainPage from '@app/main/MainPage'
import ValuesInputPage from '@app/input/pages/ValuesInputPage'
import MatrixInputPage from '@app/input/pages/MatrixInputPage'
import RachFirstPage from '@app/methods/RachFirstPage'
import RachSecondPage from '@app/methods/RachSecondPage'
import RachTrirdPage from '@app/methods/RachTrirdPage'
import HoresmiPage from '@app/methods/HoresmiPage'
import PascalPage from '@app/methods/PascalPage'

const Root = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/values">
            <ValuesInputPage />
          </Route>
          <Route exact path="/horesmi">
            <HoresmiPage />
          </Route>
          <Route exact path="/matrix">
            <MatrixInputPage />
          </Route>
          <Route exact path="/kara">
            <RachTrirdPage />
          </Route>
          <Route exact path="/rachfirst">
            <RachFirstPage />
          </Route>
          <Route exact path="/rachsecond">
            <RachSecondPage />
          </Route>
          <Route exact path="/rachthird">
            <RachTrirdPage />
          </Route>
          <Route exact path="/pascal">
            <PascalPage />
          </Route>
          <Route exact path="/lukas">
            <PascalPage />
          </Route>
          <Route path="*">
            <Redirect to={'/'} />
          </Route>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  )
}

export default Root

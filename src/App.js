import {BrowserRouter, Route, Switch} from "react-router-dom";

import MainLayout from "./layout/MainLayout/MainLayout";
import LoginPage from "./auth/pages/LoginPage";
import NotFoundPage from "./NotFoundPage";
import MainPage from "./main/MainPage";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="*">
          <MainLayout>
            <Switch>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route path="*">
                <NotFoundPage/>
              </Route>
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

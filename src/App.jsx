import { QueryClient, QueryClientProvider } from 'react-query'
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import MatrixStore from '@app/stores/MatrixStore'
import ValuesStore from '@app/stores/ValuesStore'
import { Provider } from 'mobx-react'
import Root from '@app/Root'
import { SnackbarProvider } from 'notistack'


const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  const stores = {
    matrixStore: new MatrixStore(),
    valuesStore: new ValuesStore(),
  }

  return (
    <Provider {...stores}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <Root />
        </SnackbarProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

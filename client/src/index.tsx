import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
// import { store } from "./store/store";
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        {/* <Provider store={store}> */}
          <App />
        {/* </Provider> */}
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);



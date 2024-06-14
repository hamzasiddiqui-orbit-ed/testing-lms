import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store.js';
import { Provider } from 'react-redux';
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>
  </Provider>,
)

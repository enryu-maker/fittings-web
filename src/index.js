import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
<<<<<<< HEAD

=======
>>>>>>> 7aa9b52f668e78c5a7e85d2fdd09d0502c6db87e
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@material-tailwind/react";
<<<<<<< HEAD
=======
import { ToastContainer } from 'react-toastify';
>>>>>>> 7aa9b52f668e78c5a7e85d2fdd09d0502c6db87e
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
        <ToastContainer/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

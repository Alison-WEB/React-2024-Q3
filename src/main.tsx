import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import ErrorBoundary from './feature/ErrorBoundary.tsx';
import './index.css';
// import { Provider } from 'react-redux';
// import store from './app/Store.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback="Error">
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </ErrorBoundary>
  </React.StrictMode>
);

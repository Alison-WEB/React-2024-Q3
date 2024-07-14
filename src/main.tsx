import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import ErrorBoundary from './feature/ErrorBoundary.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback="Error">
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

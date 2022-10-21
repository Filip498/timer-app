import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';
import './styles/normalize.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />,
    document.getElementById('root')
);
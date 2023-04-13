import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Components/App';
import state from './data/data';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/TimeKeep">
        < App state={state}/>
    </BrowserRouter>
);


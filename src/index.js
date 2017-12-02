//import css
import './assets/stylesheets/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/components/App.jsx';
import character from './App/character'

ReactDOM.render(<App chars={character}/>, document.getElementById('root'));
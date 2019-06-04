//import css
import './assets/stylesheets/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/components/App.jsx';
import characters from './App/characters'

ReactDOM.render(<App chars={characters}/>, document.getElementById('app'));
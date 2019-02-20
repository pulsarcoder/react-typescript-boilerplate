import '../pollyfills';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
}
render();

module.hot.accept();
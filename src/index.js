import '../pollyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const title = 'My Minimal React Webpack Babel Setup. Hello world!';

const myStyle = {
  padding: '40px',
  backgroundColor: 'green',
  color: 'white'
};

let model = { clicks: 0 };

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
}
render();

module.hot.accept();
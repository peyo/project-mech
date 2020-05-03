import React from 'react';
import ReactDOM from 'react-dom';
import DisplayVINDTC from './display-vin-dtc';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter >
      <DisplayVINDTC />
    </BrowserRouter >,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});

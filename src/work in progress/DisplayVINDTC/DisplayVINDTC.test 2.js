import React from 'react';
import ReactDOM from 'react-dom';
import DisplayVINDTC from './DisplayVINDTC';
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

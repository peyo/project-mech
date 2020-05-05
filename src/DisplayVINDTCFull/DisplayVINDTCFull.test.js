import React from 'react';
import ReactDOM from 'react-dom';
import DisplayVINDTCFull from './DisplayVINDTCFull';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <DisplayVINDTCFull />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});

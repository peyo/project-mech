import React from 'react';
import ReactDOM from 'react-dom';
import DisplayVINDTCVINOnly from './display-vin-dtc-vinOnly';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <DisplayVINDTCVINOnly />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});

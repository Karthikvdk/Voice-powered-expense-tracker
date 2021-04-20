import { SpeechProvider } from '@speechly/react-client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './context/context';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="f1ff68e5-55bd-46ac-8232-db3407d9caa9" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

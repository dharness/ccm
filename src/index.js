import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import styles from './styles/base.css'
import registerServiceWorker from './registerServiceWorker';
import stores from './stores'
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

useStrict(false);
const rootEl = document.getElementById('root');
rootEl.classList.add(styles.root);

ReactDOM.render((
  <Provider {...stores} >
    <BrowserRouter>
      <Route path="/" component={App}></Route>
    </BrowserRouter>
  </Provider>
), rootEl)

registerServiceWorker();

import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import {Provider} from 'react-redux';
import store from './redux/store';

import CryptoUsers from './scenes/CryptoUsers/CryptoUsers';

class App extends Component {
  render() {
    return (<Provider store={store}>
      <CssBaseline />
      <div className="App">
        <CryptoUsers/>
      </div>
      </Provider>
    );
  }
}

export default App;
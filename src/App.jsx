import React from 'react';
import { Provider } from 'react-redux'
import store from './store/index';
import Home from './root.component.jsx';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Home></Home>
      </Provider>
    )
  }
}

export default App;
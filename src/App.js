import React from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Locals
import logo from './logo.svg';
import './App.css';

// Components
import DogContainer from './components/Dog';
import TitleContainer from './components/Title';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <DogContainer logo={logo} />
        <TitleContainer logo={logo} />
      </header>
    </div>
  </Provider>
);

export default App;

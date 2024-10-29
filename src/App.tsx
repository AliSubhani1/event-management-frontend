import './App.css';
import { persistor, store } from './Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
      </header>
    </div>
  );
}

export default App;

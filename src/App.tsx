import './App.css';
import { persistor, store } from './Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import TopBar from './Components/Common/TopBar';
import Navbar from './Components/Common/Navbar/index';
import AppRouter from './Routes/AppRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/">
          <TopBar />
          <Navbar />
          <AppRouter />
        </BrowserRouter>
        </PersistGate>
      </Provider>
      </header>
    </div>
  );
}

export default App;

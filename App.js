import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './src/navigation';
// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';

function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

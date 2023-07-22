import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import reducer, {initialState} from './reducer/reducer';
import { StateProvider } from './StateProvider';
// import { Provider } from 'react-redux';

// const store = createStore(
//   reducer,
//   applyMiddleware(thunk)
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
    {/* <Provider store={store}>
    </Provider> */}
  </React.StrictMode>
);
reportWebVitals();

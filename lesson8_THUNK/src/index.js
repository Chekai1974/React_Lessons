import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import rootReducer from './reducers';
import thunk from "redux-thunk"
import { compose } from 'redux';

const composeEn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer,composeEn(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from './store/rootReducer.js';
import Routes from './RoutesDetail.jsx';
import './App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer(),
  composeEnhancers(
    responsiveStoreEnhancer,
    applyMiddleware(thunk)
  )
);

function App() {
		return (
			<Provider store={store}>
					<Router>
            <div className="App">
              <header className="App-header">
                <h1 className="App-title">Users APP</h1>
              </header>
              <Routes />
            </div>
        </Router>
			</Provider>
		);
}

export default App;
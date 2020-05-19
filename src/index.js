import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import reduxThunk from "redux-thunk";


const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const logger = store=>{
  return next=>{
    return action=>{
      console.log("[Middleware] dispatching", action);
      const result= next(action);
      console.log("[result]", result);
      console.log("[Middleware] next state", store.getState());
      return result;
    }
  }
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, reduxThunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

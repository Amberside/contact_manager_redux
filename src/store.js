// this allows us to create a store to hold our state. 
// Allows us to run any middleware as well
import { createStore, applyMiddleware } from 'redux';
// allows us to connect our state to our dev tools in browser.
import { composeWithDevTools } from 'redux-devtools-extension';
// middleware that allows to do async actions.
import thunk from 'redux-thunk';
// This our root reducer.
import rootReducer from './reducers/rootReducer';

// create initialState - empty object.
const initialState = {};
// create an array of middleware. 
const middleware=[thunk];

// create a store to hold our state.
// this take 3 arguments. Reducer,state, enhancers. 
const store = createStore( 
  rootReducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
  );

export default store;
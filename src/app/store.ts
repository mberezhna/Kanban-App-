// npm i redux @types/redux
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, createStore } from 'redux';


const reducer = combineReducers({

});
const store = createStore(
  reducer,
  composeWithDevTools(),
);

export type RootState = ReturnType<typeof store.getState>
export default store;

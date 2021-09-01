import movieDetailReducerCl from "containers/client/MovieDetailCl/module/reducer";
import movieReducerCl from "containers/client/Home/module/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const { combineReducers, createStore, applyMiddleware } = require("redux");

const rootReducer = combineReducers({
  movieReducerCl,
  movieDetailReducerCl,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;

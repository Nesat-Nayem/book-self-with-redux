import { createStore, combineReducers } from "redux";
import bookReucer from "./reducers/bookReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
    books: bookReucer,
})

const store = createStore(rootReducers, composeWithDevTools())

export default store
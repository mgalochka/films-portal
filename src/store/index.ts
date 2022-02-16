import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import filmsReducer from "./Films/reducer";
import filmsCategoryReducer from "./CategoryDrama/reducer";
import searchFilmsReducer from "./Search/reduser";



const rootReducer = combineReducers({
   filmsReducer, 
   filmsCategoryReducer,
   searchFilmsReducer,
})

const store = createStore(
   rootReducer, composeWithDevTools(applyMiddleware(thunk))
)
export default store;
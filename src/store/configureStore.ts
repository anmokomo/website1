import { createStore } from "redux";
import { rootReducer } from "./AppState";
import {composeWithDevTools} from "redux-devtools-extension";

const configureStore = () => {
    //creates the store based on the AppState object 'rootReducer'
    return createStore(rootReducer, {},   composeWithDevTools());
};
export default configureStore;

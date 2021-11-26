import { combineReducers } from "redux";
import {UserReducer} from "./user/UserReducer";


export const rootReducer = combineReducers({
    //5 - adds 'user' to the store; is updated by UserReducer
    user: UserReducer
});
export type AppState = ReturnType<typeof rootReducer>;

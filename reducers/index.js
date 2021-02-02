import { combineReducers } from "redux";

import GameReducer from './GameReducer';

const rootReducer = combineReducers({
    gamesList:GameReducer
})

export default rootReducer;
import { combineReducers } from "redux";
import tweetsReducer from "./tweetList";

const rootReducer = combineReducers({ tweetsReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

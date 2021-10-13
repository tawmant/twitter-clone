import {
  ITweetsState,
  TTweetsAction,
  TweetsActionTypes,
} from "../../types/ITweets";

const initialState: ITweetsState = {
  tweets: [],
  loading: false,
  error: false,
};

const tweetsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case TweetsActionTypes.REQUESTED_TWEETS:
      return { ...state, loading: true };
    case TweetsActionTypes.LOADED_TWEETS:
      const tweets = [...state.tweets, ...payload];
      return { ...state, tweets, loading: false };
    case TweetsActionTypes.ERROR_TWEETS:
      return { ...state, error: true, loading: false };
    case TweetsActionTypes.ADD_TWEET:
      const newArr = [payload, ...state.tweets];
      return { ...state, tweets: newArr };
    case TweetsActionTypes.REMOVE_TWEET:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};

export default tweetsReducer;

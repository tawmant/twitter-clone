export interface ITweetsState {
  tweets: ITweetItem[];
  loading: boolean;
  error: boolean;
}

export interface ITweetItem {
  id: number;
  user_name: string;
  user_login: string;
  user_avatar: string;
  created_date: string;
  text?: string | undefined;
  img?: null | string[] | any;
  is_liked: boolean;
  like_count: number;
  reply_count: number;
  comment_count: number;
}

export enum TweetsActionTypes {
  REQUESTED_TWEETS = "REQUESTED_TWEETS",
  ERROR_TWEETS = "ERROR_TWEETS",
  LOADED_TWEETS = "LOADED_TWEETS",
  ADD_TWEET = "ADD_TWEET",
  REMOVE_TWEET = "REMOVE_TWEET",
}

interface FetchRequestedTweetsAction {
  type: TweetsActionTypes.REQUESTED_TWEETS;
  payload: boolean;
}

interface FetchErrorTweetsAction {
  type: TweetsActionTypes.ERROR_TWEETS;
  payload: boolean;
}

interface FetchLoadedTweetsAction {
  type: TweetsActionTypes.LOADED_TWEETS;
  payload: ITweetItem[];
}

interface FetchAddTweetAction {
  type: TweetsActionTypes.ADD_TWEET;
  payload: ITweetItem;
}

interface FetchRemoveTweetAction {
  type: TweetsActionTypes.REMOVE_TWEET;
}

export type TTweetsAction =
  | FetchRequestedTweetsAction
  | FetchErrorTweetsAction
  | FetchLoadedTweetsAction
  | FetchAddTweetAction
  | FetchRemoveTweetAction;

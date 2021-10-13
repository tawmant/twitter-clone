import React, { FC, useCallback, useContext, useRef, useState } from "react";
import { ITweetItem } from "../../../types/ITweets";
import Avatar from "@mui/material/Avatar";
import "./TweetItem.scss";
import { useHttp } from "../../../hooks/http.hook";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

interface ITweetItemProps {
  dataTweet: ITweetItem;
  token: string | null;
}

const TweetItem: FC<ITweetItemProps> = ({ dataTweet, token }) => {
  const [data, setData] = useState(dataTweet);
  const {
    user_name,
    created_date,
    is_liked,
    id,
    like_count,
    text,
    user_avatar,
  } = data;
  const { request, loading } = useHttp();

  const addLikeHandler = async () => {
    fetch("https://twitter-api-v2.herokuapp.com/api/tweet/like/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, action: is_liked ? "dislike" : "like" }),
    }).then(() => {
      if (!is_liked) {
        setData((prev) => ({
          ...prev,
          like_count: ++prev.like_count,
          is_liked: true,
        }));
      } else if (is_liked) {
        setData((prev) => ({
          ...prev,
          like_count: --prev.like_count,
          is_liked: false,
        }));
      }
    });
  };

  return (
    <li className="tweet-item p-3 hg">
      <div className="tweet-item__row">
        <div className="tweet-item__right">
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt={user_name}
            src={`https://twitter-api-v2.herokuapp.com/media/${user_avatar}`}
          />
        </div>
        <div className="tweet-item__left">
          <div className="tweet-item__top">
            <div className="tweet-item__info">
              <span className="name"></span>
              <span className="user-name">{user_name}</span>
            </div>
            <div className="tweet-item__more icon-hg dropdown">
              <svg
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g>
                  <circle cx="5" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="19" cy="12" r="2"></circle>
                </g>
              </svg>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div className="tweet-item__content">
            <p className="tweet-item__text">{text}</p>
          </div>
          <div className="tweet-item__bottom">
            <div className="row">
              <div className="tweet-item__actions d-flex col-10 justify-content-between">
                <div className="tweet-item__reply d-flex">
                  <div className="">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                    >
                      <g>
                        <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="tweet-item__reply-count">3</span>
                </div>
                <div className="tweet-item__retweet d-flex">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                    </g>
                  </svg>
                  <span className="tweet-item__retweet-count">3</span>
                </div>
                <div
                  onClick={addLikeHandler}
                  className="tweet-item__like d-flex"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="svg-icon"
                    aria-hidden="true"
                    fill={is_liked ? "red" : "#000"}
                  >
                    <g>
                      <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path>
                    </g>
                  </svg>
                  <span className="tweet-item__retweet-count">
                    {like_count}
                  </span>
                </div>
                <div className="tweet-item__share">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                      <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TweetItem;

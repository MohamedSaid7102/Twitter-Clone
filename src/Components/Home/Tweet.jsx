import { Avatar } from '@material-ui/core';
import React from 'react';
import {
  Heart,
  Messege,
  Retwitte,
  Share,
  ThreeDots,
} from '../../media/icons/components';
import { formatDate } from '../../utils/helpers';

function Tweet({
  displayName,
  userID,
  text,
  image,
  avatar,
  verified,
  timestamp,
}) {
  return (
    <div className="tweet-container">
      {/* TODO: make this lead to user profile */}
      <a href="#!">
        <Avatar src={avatar} className="avatar" />
      </a>
      <div className="tweet__body">
        <div className="tweet__header">
          <h3 className="userName">{displayName}</h3>
          <span className="userID">{userID}</span>
          {/* TODO: put here logic for verified or not */}
          <span className="timestamp">.{formatDate(timestamp)}</span>
          <button className="more-btn">
            <ThreeDots className="more-icon" />
          </button>
        </div>
        <div className="tweet__info">
          <p className="tweet__text">{text}</p>
          <img src={image} alt="post" className="tweet__img" />
        </div>
        <div className="tweet__options-box">
          <button className="Messege option-box">
            <Messege className="icon"/>
            <span>3</span>
          </button>
          <button className="Retwitte option-box">
            <Retwitte className="icon"/>
            <span>3</span>
          </button>
          <button className="Heart option-box">
            <Heart className="icon"/>
            <span>3</span>
          </button>
          <button className="Share option-box">
            <Share className="icon"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;

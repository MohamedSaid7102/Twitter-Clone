// import { SizedAvatar } from '@material-ui/core';
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import SvgMediaIcon from '../media/icons/components/MediaIcon';
import SvgGifIcon from '../media/icons/components/GifIcon';
import SvgPollIcon from '../media/icons/components/PollIcon';
import SvgEmojiIcon from '../media/icons/components/EmojiIcon';
import SvgScheduleIcon from '../media/icons/components/ScheduleIcon';
// ToolTip
// import Classnames from 'https://cdn.skypack.dev/classnames@2.2.6';
function NewTweet() {
  const [tweetText, setTweetText] = useState('');
  return (
    <div className="new-tweet">
      {/* New Tweet avatar */}
      {/* TODO: Edit this after making your website dynamic */}
      <Link to="/userID">
        <Avatar
          className="avatar"
          alt="Mike Wazowski"
          src="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </Link>
      {/* New Tweet body */}
      <div className="new-tweet__body">
        {/* Tweet input */}
        <textarea
          type="text"
          placeholder="What's happening?"
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
        />
        {/* Tweet Every one can reply option */}

        {/* Tweet Options */}
        <div className="new-tweet__options">
          <div className="options__inputs">
            <div className="tooltip">
              <span className="tooltiptext">Media</span>
              <button className="option">
                <SvgMediaIcon />
              </button>
            </div>
            <div className="tooltip">
              <span className="tooltiptext">GIF</span>
              <button className="option">
                <SvgGifIcon />
              </button>
            </div>
            <div className="tooltip">
              <span className="tooltiptext">Poll</span>
              <button className="option">
                <SvgPollIcon />
              </button>
            </div>
            <div className="tooltip">
              <span className="tooltiptext">Emoji</span>
              <button className="option">
                <SvgEmojiIcon />
              </button>
            </div>
            <div className="tooltip">
              <span className="tooltiptext">Schedule</span>
              <button className="option">
                <SvgScheduleIcon />
              </button>
            </div>
          </div>
          <Button
            className="options__tweet-btn"
            disabled={!tweetText}
            style={{ backgroundColor: tweetText ? '#1d9bf0' : '#8dccf7' }}
          >
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewTweet;

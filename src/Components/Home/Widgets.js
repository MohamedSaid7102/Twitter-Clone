import React from 'react';
import { TwitterTweetEmbed, TwitterVideoEmbed } from 'react-twitter-embed';
function Widgets() {
  return (
    <div className="widgets-wrapper">
      <TwitterTweetEmbed tweetId={'933354946111705097'} />
      <TwitterVideoEmbed id={'560070183650213889'} />
      <footer>
        <a href="#!">Terms of Service</a>
        <a href="#!">Privacy Policy</a>
        <a href="#!">Cookie Policy</a>
        <a href="#!">Ads info</a>
        <a href="#!">More ...</a>
        <a href="#!">&copy; 2021 Mohamed Shelf</a>
      </footer>
    </div>
  );
}

export default Widgets;

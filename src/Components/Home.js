import React from 'react';
import SvgSparkle from '../media/icons/components/Sparkle';
import NewTweet from './NewTweet';

function Home() {
  return (
    <div className="home">
      {/* Feed */}
      <div className="home__feed">
        {/* Header */}
        <div className="feed__header sticky">
          {/* TODO: make click on Home go to the top of the page */}
          <a href="#!">
            <h1 className="header__heading">
              <span>Home</span>
            </h1>
          </a>
          <SvgSparkle className="header__icon" />
        </div>
        {/* New Tweet */}
        <NewTweet />
        {/* Tweets */}
      </div>
      {/* newest */}
      <div className="home__widgets">Newest</div>
    </div>
  );
}

export default Home;

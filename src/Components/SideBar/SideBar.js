import React, { useEffect } from 'react';
import SideBarOption from './SideBarOption';
// -----------------------------------
// importing varient side bar icons 👇|
// -----------------------------------
// Home varient icons
import SvgHome from '../../media/icons/components/Home.tsx';
import SvgActiveHome from '../../media/icons/components/ActiveHome.tsx';
// Explore varient icons
import SvgExplore from '../../media/icons/components/Explore.tsx';
import SvgActiveExplore from '../../media/icons/components/ActiveExplore.tsx';
// Notifications varient icons
import SvgNotifications from '../../media/icons/components/Notifications.tsx';
import SvgActiveNotifications from '../../media/icons/components/ActiveNotifications.tsx';
// Messages varient icons
import SvgMessages from '../../media/icons/components/Messages.tsx';
import SvgActiveMessages from '../../media/icons/components/ActiveMessages.tsx';
// Bookmarks varient icons
import SvgBookmarks from '../../media/icons/components/Bookmarks.tsx';
import SvgActiveBookmarks from '../../media/icons/components/ActiveBookmarks.tsx';
// Lists varient icons
import SvgLists from '../../media/icons/components/Lists.tsx';
import SvgActiveLists from '../../media/icons/components/ActiveLists.tsx';
// Profile varient icons
import SvgProfile from '../../media/icons/components/Profile.tsx';
import SvgActiveProfile from '../../media/icons/components/ActiveProfile.tsx';
// More varient icons
import SvgMore from '../../media/icons/components/More.tsx';
import SvgActiveMore from '../../media/icons/components/ActiveMore.tsx';
// New Tweet icon
import SvgNewTweetIcon from '../../media/icons/components/NewTweetIcon.tsx';
import { Button } from '@material-ui/core';
// To get page width and height
import useWindowDimensions from '../../utils/WindowDimention';
// ------------------------------------------
// End of importing varient side bar icons 👆|
// ------------------------------------------
import { NavLink } from 'react-router-dom';
// This is to get sidebar width 👇
// import { useState, useEffect, useRef } from 'react';
function SideBar() {
  const { width } = useWindowDimensions();
  // This is to get sidebar width 👇
  // const [height, setHeight] = useState(0);
  // const [widthC, setWidthC] = useState(0);
  // const ref = useRef(null);

  // useEffect(() => {
  //   setHeight(ref.current.clientHeight);
  //   setWidthC(ref.current.clientWidth);
  // }, []);
  return (
    <div className="side-bar-wrapper sticky">
      {/*  This is to get sidebar width 👇 */}
      {/*ref={ref} here 👇*/}
      <div className="side-bar">
        <NavLink activeClassName="active" to="/home">
          <a href="#!" className="logo-container">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="logo"
              className="logo-icon"
            />
          </a>
        </NavLink>
        {/* Home */}
        <NavLink activeClassName="active" to="/home">
          <SideBarOption
            Icon={SvgHome}
            ActiveIcon={SvgActiveHome}
            text="Home"
          />
        </NavLink>
        {/* Explore */}
        <NavLink activeClassName="active" to="/explore">
          <SideBarOption
            Icon={SvgExplore}
            ActiveIcon={SvgActiveExplore}
            text="Explore"
          />
        </NavLink>
        {/* Notifications */}
        <NavLink activeClassName="active" to="/notifications">
          <SideBarOption
            Icon={SvgNotifications}
            ActiveIcon={SvgActiveNotifications}
            text="Notifications"
          />
        </NavLink>
        {/* Messages */}
        <NavLink activeClassName="active" to="/messages">
          <SideBarOption
            Icon={SvgMessages}
            ActiveIcon={SvgActiveMessages}
            text="Messages"
          />
        </NavLink>
        {/* Bookmarks */}
        {/* TODO: make this 👇 dynamic to navigate to userID/bookmarks */}
        <NavLink activeClassName="active" to="/userID/bookmarks">
          <SideBarOption
            Icon={SvgBookmarks}
            ActiveIcon={SvgActiveBookmarks}
            text="Bookmarks"
          />
        </NavLink>
        {/* Lists */}
        {/* TODO: make this 👇 dynamic to navigate to userID/lists */}
        <NavLink activeClassName="active" to="/userID/lists">
          <SideBarOption
            Icon={SvgLists}
            ActiveIcon={SvgActiveLists}
            text="Lists"
          />
        </NavLink>
        {/* Profile */}
        {/* TODO: make this 👇 dynamic to navigate to userID 'mohamed_shelf  & in NewTweet.js file avatar link*/}
        <NavLink activeClassName="active" to="/userID" exact>
          <SideBarOption
            title="profile"
            Icon={SvgProfile}
            ActiveIcon={SvgActiveProfile}
            text="Profile"
          />
        </NavLink>
        {/* More */}
        {/* TODO: make a drop up list like twitter */}
        <SideBarOption Icon={SvgMore} ActiveIcon={SvgActiveMore} text="More" />
        {/* Tweet Button */}
        {width > 1300 ? (
          // TODO: make a poup up container here to add a tweet
          <NavLink activeClassName="active" to="/compose/tweet">
            <Button variant="contained" className="tweet-btn">
              Tweet
            </Button>
          </NavLink>
        ) : (
          <NavLink activeClassName="active" to="/compose/tweet">
            <SideBarOption
              Icon={SvgNewTweetIcon}
              ActiveIcon={SvgNewTweetIcon}
              text="new"
              coloredIcon="true"
            />
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default SideBar;

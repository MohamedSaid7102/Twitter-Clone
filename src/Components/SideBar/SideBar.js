import React from 'react';
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
function SideBar() {
  const { width } = useWindowDimensions();
  return (
      <div className="side-bar-wrapper">
        <div className="side-bar sticky">
          <a href="#!" className="logo-container">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="logo"
              className="logo-icon"
            />
          </a>
          {/* Home */}
          <SideBarOption
            Icon={SvgHome}
            ActiveIcon={SvgActiveHome}
            text="Home"
          />
          {/* Explore */}
          <SideBarOption
            Icon={SvgExplore}
            ActiveIcon={SvgActiveExplore}
            text="Explore"
          />
          {/* Notifications */}
          <SideBarOption
            Icon={SvgNotifications}
            ActiveIcon={SvgActiveNotifications}
            text="Notifications"
          />
          {/* Messages */}
          <SideBarOption
            Icon={SvgMessages}
            ActiveIcon={SvgActiveMessages}
            text="Messages"
          />
          {/* Bookmarks */}
          <SideBarOption
            Icon={SvgBookmarks}
            ActiveIcon={SvgActiveBookmarks}
            text="Bookmarks"
          />
          {/* Lists */}
          <SideBarOption
            Icon={SvgLists}
            ActiveIcon={SvgActiveLists}
            text="Lists"
          />
          {/* Profile */}
          <SideBarOption
            Icon={SvgProfile}
            ActiveIcon={SvgActiveProfile}
            text="Profile"
          />
          {/* More */}
          <SideBarOption
            Icon={SvgMore}
            ActiveIcon={SvgActiveMore}
            text="More"
          />
          {/* Tweet Button */}
          {width > 1300 ? (
            <Button variant="contained" className="tweet-btn">
              Tweet
            </Button>
          ) : (
            <SideBarOption
              Icon={SvgNewTweetIcon}
              ActiveIcon={SvgNewTweetIcon}
              text="new"
              coloredIcon="true"
            />
          )}
        </div>
    </div>
  );
}

export default SideBar;

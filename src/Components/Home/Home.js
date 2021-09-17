import SvgSparkle from '../../media/icons/components/Sparkle';
import NewTweet from './NewTweet';
import Tweet from './Tweet';
import Widgets from './Widgets';

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
        <div className="tweets-wrapper">
          <Tweet
            displayName="Mohamed Shelf"
            userID="mohamed"
            text="Hi there this is my first post"
            image="https://images.pexels.com/photos/5928208/pexels-photo-5928208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            avatar="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            timestamp={1518122597860}
          />
          <Tweet
            displayName="Ahmed Zaid"
            userID="ahmedzaid"
            text="Hi there this is my first post"
            image="https://images.pexels.com/photos/8416549/pexels-photo-8416549.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            avatar="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            timestamp={1518043995650}
          />
          <Tweet
            displayName="Sahar Said"
            userID="lolo"
            text="Hi there this is my first post"
            image="https://images.pexels.com/photos/4916147/pexels-photo-4916147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            avatar="https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            timestamp={1517043995650}
          />
        </div>
      </div>
      {/* newest */}
      <div className="home__widgets">
        <Widgets />
      </div>
    </div>
  );
}

export default Home;

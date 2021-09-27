import SvgSparkle from '../../media/icons/components/Sparkle';
import NewTweet from './NewTweet';
import Tweet from './Tweet';
import Widgets from './Widgets';
import db from '../../firebase';
import { useEffect, useState } from 'react';

function Home() {
  // firebase stuff
  const [tweets, setTweets] = useState([{}]);

  // useEffect(() => {
  //   db.collection('posts').onSnapshot((snapshot) =>
  //     setTweets(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="home">
      {/* Feed */}
      <div className="home__feed">
        {/* Header */}
        <div className="feed__header sticky">
          {/* TODO: make click on Home go to the top of the page */}
          <button onClick={scrollToTop} className="header__home-btn">
            <h1 className="header__heading">
              <span>Home</span>
            </h1>
          </button>
          <SvgSparkle className="header__icon" />
        </div>
        {/* New Tweet */}
        <NewTweet />
        {/* Tweets */}
        <div className="tweets-wrapper">
          {/* {tweets.map((post) => (
            <Tweet
              key={post.text}
              displayName={post.displayName}
              userID={post.userID}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
              timestamp={1518122597860}
            />
          ))} */}
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
          <Tweet
            displayName="Ahmed Moaaz"
            userID="ahmed_moaz"
            text="Hi there this is my first post"
            image="https://images.unsplash.com/photo-1632715413137-17b569a15318?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            avatar="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            timestamp={1517043995650}
          />
          <Tweet
            displayName="Mohamed Mohsen"
            userID="mohhhhsen"
            text="Hi there this is my first post"
            image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            avatar="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            timestamp={1517043995650}
          />
          <Tweet
            displayName="Mohamed Hossain"
            userID="hosain_mo"
            text="Hi there this is my first post"
            image="https://images.unsplash.com/photo-1632714393270-df9f55978898?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
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

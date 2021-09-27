import Home from './Components/Home/Home';
import { Route, Redirect, Switch } from 'react-router';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="block-container">
      <div className="App">
        {/* Side Bar */}
        <SideBar />
        {/* Feed and new things */}
        <div className="page-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" exact component={Home} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

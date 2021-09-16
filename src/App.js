// TODO: make RREADME.md file

import Home from './Components/Home';
import { Route, Redirect } from 'react-router';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="block-container">
      <div className="App">
        {/* Side Bar */}
        <SideBar />
        <div className="page-content">
          <Route
            exact
            path="/"
            render={() => <Redirect to="/home" />}
          />{' '}
          <Route path="/home" exact component={Home} />
        </div>
      </div>
    </div>
  );
}

export default App;

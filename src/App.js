// TODO: make RREADME.md file

import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="block-container">
      <div className="App">
        {/* Side Bar */}
        <SideBar />
        {/* Feed */}
        <div style={{ flex: 3, fontSize: '1rem' }}>Feed</div>
        {/* newest */}
        <div style={{ flex: 2, fontSize: '10px' }}>Newest</div>
      </div>
    </div>
  );
}

export default App;

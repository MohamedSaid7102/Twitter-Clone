import React from 'react';

function Home() {
  return (
    <div className="Home">
      {/* Feed */}
      <div style={{ flex: 3, fontSize: '1rem' }}>Feed</div>
      {/* newest */}
      <div style={{ flex: 2, fontSize: '10px' }}>Newest</div>
    </div>
  );
}

export default Home;

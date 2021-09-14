import React from 'react';

function SideBarOption({ Icon, ActiveIcon, text }) {
  return (
    <div>
      <Icon class="side-bar__icon"/>
      <ActiveIcon class="side-bar__icon"/>
      <p>{text}</p>
    </div>
  );
}

export default SideBarOption;

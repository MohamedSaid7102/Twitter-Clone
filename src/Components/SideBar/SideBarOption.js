import React from 'react';

function SideBarOption({ Icon, ActiveIcon, text, coloredIcon }) {
  return (
    <div class={`side-bar-option ${coloredIcon ? 'coloredIcon' : ''}`}>
      <Icon class="side-bar__icon" />
      <span className="side-bar__txt">{text}</span>
    </div>
  );
}

export default SideBarOption;

import React from 'react';
import { useEffect, useState } from 'react';

function SideBarOption({ Icon, ActiveIcon, text, coloredIcon }) {
  const [active, setActive] = useState(false);

  useEffect(()=>{
    
  })
  return (
    <div class={`side-bar-option ${coloredIcon ? 'coloredIcon' : ''}`}>
      <Icon class="side-bar__icon" />
      <span className="side-bar__txt">{text}</span>
    </div>
  );
}

export default SideBarOption;

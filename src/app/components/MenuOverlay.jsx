import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({links}) => {
  return (
    <div className="flex flex-col items-center bg-slate-700 opacity-95 text-white p-2">
        {links.map((link , index) => (
        <ul key={index}>
        <NavLink href={link.path} title={link.title}/>
        </ul>
        ))}
        
    </div>
  )
}

export default MenuOverlay
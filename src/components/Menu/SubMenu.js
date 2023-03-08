import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Label } from 'react-bootstrap';




const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <NavLink className='menuSub' to={item.path} onClick={item.subNav && showSubnav} >
        <NavLink className='a-link ' to={item.path}>
          <div className='d-flex bd-highlight '>
          <font>{item.icon}</font>  {item.title}  
          <font className='ms-auto'>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed 
            : null}
            </font>
          </div>          
        </NavLink>
      </NavLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <div to={item.path} key={index}>
              <div  className="mb-2 menuSubDrop">
                <NavLink to={item.path} className='menuSuDp'>{item.title}</NavLink>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default SubMenu;

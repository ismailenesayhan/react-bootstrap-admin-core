import React
// , { useState } 
from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


export default function MobileTabBar(props) {
  return (
    <>
      <nav className="nav mobileNavBar">
        <div className="mobileBarScroll">
          <NavLinkS to="/dashboard">
            <i className="bi-house-door-fill me-2"></i>
            <div>Dashboard</div>
          </NavLinkS>

          <NavLinkS to="/posts">
            <i className="bi-pin-angle-fill me-2"></i>
            <div>Posts</div>
          </NavLinkS>
        </div>
      </nav>
    </>
  );
}


const NavLinkS = styled(NavLink)`
  display: flex;
  align-items: center;
  color: var(--grey-color);
  font-size: 14px;
  line-height: 0.9;
  font-weight: 500;
  text-decoration: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  &:hover {
    background-color: var(--grey-background);
    color: var(--text-color);
  }
  &.active {
    background-color: var(--grey-background);
    color: var(--text-color);
    & i {
      color: rgb(71, 85, 105);
    }
  }
  & i {
    color: #a0aebf;
    font-size: 20px;
  }
  & div {
    display: inline-block;
  }
`;

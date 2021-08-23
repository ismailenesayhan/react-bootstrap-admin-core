import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../assets/logo.svg";

export default function DesktopMenu(props) {
  return (
    <>
      <div className="stickySide col-md-3 col-lg-2">
        <div className="d-flex vh-100 justify-content-between flex-column">
          <div className="">
            <img src={Logo} alt="Logo" className="mt-4" />
            <div className="mt-3 px-3 py-2 bg-white rounded-lg shadow-sm">
              <h6 className="mb-0 text-center">E-Seller Assist 21</h6>
            </div>
            <nav className="d-grid grid gap-2  mt-5">
              <NavLinkS to="/dashboard">
                <i className="bi-house-door-fill me-2"></i>
                <div>Dashboard</div>
              </NavLinkS>

              <NavLinkS to="/posts">
                <i className="bi-pin-angle-fill me-2"></i>
                <div>Posts</div>
              </NavLinkS>
              <NavLinkS to="/statistics">
                <i className="bi-funnel-fill me-2"></i>
                <div>Statistics</div>
              </NavLinkS>
              <NavLinkS to="/archive">
                <i className="bi-collection-fill me-2"></i>
                <div>Archive</div>
              </NavLinkS>
              <NavLinkS to="/users">
                <i className="bi-person-lines-fill me-2"></i>
                <div>Users</div>
              </NavLinkS>
              <NavLinkS to="/service-status">
                <i className="bi-info-circle-fill me-2"></i>
                <div>Service Status</div>
              </NavLinkS>
              <NavLinkS to="/settings">
                <i className="bi-gear-fill me-2"></i>
                <div>Settings</div>
              </NavLinkS>
            </nav>
          </div>

          <div className="">
            <nav className="d-grid grid gap-2 my-5">
              <LinkS to="/need-help">
                <i className="bi-question-circle-fill me-2"></i>
                <div>Need Help?</div>
              </LinkS>

              <LinkS to="/documentation">
                <i className="bi-file-earmark-text me-2"></i>
                <div>Documentation</div>
              </LinkS>
              <LinkS to="/login">
                <i className="bi-box-arrow-right me-2"></i>
                <div>Sign out</div>
              </LinkS>
            </nav>
          </div>
        </div>
      </div>
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

const LinkS = styled(Link)`
  display: flex;
  align-items: center;
  color: rgb(160, 174, 192);
  font-size: 14px;
  line-height: 0.9;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem;
  &:hover {
    color: var(--text-color);
    & i {
      color: rgb(160, 174, 192);
    }
  }
  & i {
    color: rgb(160, 174, 192);
    font-size: 20px;
  }
  & div {
    display: inline-block;
  }
`;

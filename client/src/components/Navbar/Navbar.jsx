import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Avatar, Menu, MenuItem } from "@mui/material";
import { logoutAuth } from "../../services/api";
import { alert } from "../CustomAlert/alert";

import "./Navbar.css";

export default function Navbar({ user, logout }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    setAnchorEl(null);
    try {
      await logoutAuth();
      logout();
      window.location.reload();
    } catch (err) {
      alert({ message: err.response.data.message, type: "error" });
    }
  };

  return (
    <div className="navBar">
      <NavLink to="/">
        <div className="logoDiv">
          <p>Next</p>
          <h1>Ascend</h1>
        </div>
      </NavLink>

      <div className="menu">
        <ul>
          <li className="nav-item">
            <a href="https://github.com/Adarsh-Agrahari/NextAscend">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>

          <div className="nav-item">
            {user ? (
              <>
                <div
                  className="item"
                  id="menu-button-2"
                  onClick={handleClick}
                  aria-controls={menuOpen ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={menuOpen ? "true" : undefined}
                >
                  <Avatar
                    sx={{
                      width: "30px",
                      height: "30px",
                      bgcolor: "rgb(99, 99, 99)",
                      "&:hover": {
                        bgcolor: "#4b84ce",
                      },
                    }}
                    alt={user.name}
                    src={user.image}
                  />
                </div>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={menuOpen}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "menu-button-2",
                  }}
                >
                  <MenuItem disabled>{user.name}</MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Button color="error">Logout</Button>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <NavLink to="/auth">
                <div className="button">
                  <span className="material-icons">login</span>
                </div>
              </NavLink>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

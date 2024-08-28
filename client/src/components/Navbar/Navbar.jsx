import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Avatar, Menu, MenuItem } from "@mui/material";
import { logoutAuth } from "../../services/api";
import { alert } from "../CustomAlert/alert";

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
    <div className="flex justify-between items-center py-8 px-40 w-full">
      <NavLink to="/">
        <div className="flex flex-col items-start">
          <p className="text-sm text-gray-600 font-semibold">Next</p>
          <h1 className="text-black font-bold text-3xl leading-none">Ascend</h1>
        </div>
      </NavLink>

      <div className="flex items-center space-x-4">
        <ul className="flex items-center space-x-4">
          <div className="text-gray-600 text-3xl transition-colors duration-200 hover:text-blue-500">
            <a href="https://github.com/Adarsh-Agrahari/NextAscend">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          <div className="flex items-center">
            {user ? (
              <>
                <div
                  className="cursor-pointer"
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
                <div className="cursor-pointer text-gray-600 transition-colors duration-200 hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                    />
                  </svg>
                </div>
              </NavLink>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

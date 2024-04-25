import react, { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const HeaderBar = () => {
  const { user } = useUserAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    window.location = "/";
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="flex-end" p={2}>
      <Box display="flex" alignItems="center">
        {" "}
        <PersonOutlinedIcon />
        <IconButton>
          <u onClick={handleMenu}>{user.email}</u>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="#" className="menu-bars">
            <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
          </Link>
        </Menu>
      </Box>
    </Box>
  );
};

export default HeaderBar;

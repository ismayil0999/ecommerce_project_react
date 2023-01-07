import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
export default function BottomMenu() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      style={{
        position: "fixed",
        bottom: "0px",
        left: "0",
        width: "100%",
        zIndex: "100000"
      }}>
      <BottomNavigation
        showLabels
        value={value}
        style={{ borderTop: "1px solid rgb(40, 40, 117)" }}
      >
        <BottomNavigationAction label="Home" style={{ color: "grey" }} icon={<HomeIcon style={{ color: "rgb(40, 40, 117)" }} />} />
        <NavLink to="/favorite">
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon style={{ color: "rgb(40, 40, 117)" }} />} />
        </NavLink>
        <BottomNavigationAction label="Account" icon={<AccountCircleIcon style={{ color: "rgb(40, 40, 117)" }} onClick={() => {
          window.location = "/profile"
        }} />} />
      </BottomNavigation>
    </Box>
  );
}
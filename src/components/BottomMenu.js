import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useProductContext } from "../providers/Context";
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
export default function BottomMenu() {
  const [value, setValue] = React.useState(0);
const {setPopup}=useProductContext();
  return (
    <Box
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        zIndex: "100000",
      }}
      className="navi">
      <BottomNavigation
        showLabels
        value={value}
        style={{ borderTop: "1px solid rgb(40, 40, 117)" }}
        className="bottom"
      >
        <BottomNavigationAction label="Home" style={{ color: "grey" }} icon={<HomeIcon style={{ color: "rgb(40, 40, 117)" }} />} />
        <NavLink to="/favorite">
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon style={{ color: "rgb(40, 40, 117)" }} />} />
        </NavLink>
        <BottomNavigationAction label="Account" icon={<AccountCircleIcon style={{ color: "rgb(40, 40, 117)" }} onClick={() => {
          setPopup(true)
        }} />} />
      </BottomNavigation>
    </Box>
  );
}
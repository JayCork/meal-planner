import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";
import './BottomNav.css'

export default function BottomNav() {
    const [value, setValue] = React.useState(0);
    const navigator = useNavigate()

    const actions = [
        { label: "Dashboard", icon: <DashboardIcon />, nav: '/' },
        { label: "Storage", icon: <KitchenIcon />, nav: '/storage' },
        { label: "Recipes", icon: <MenuBookIcon />, nav: '/recipes' },
        { label: "Settings", icon: <SettingsIcon />, nav: '/settings' },
    ]

    return (
        <Box >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log(event)
                    navigator(actions[newValue].nav);
                }}
            >
                {actions.map((act) => {
                    return <BottomNavigationAction key={act.label} label={act.label} icon={act.icon} />
                })}
            </BottomNavigation>
        </Box>
    );
}
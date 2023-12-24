import * as React from 'react';
import { Outlet } from "react-router-dom";
import BottomNav from "../../components/BottomNavigation";


export default function AppShell() {


    return (
        <>
            <Outlet />
            <BottomNav />
        </>
    )
}
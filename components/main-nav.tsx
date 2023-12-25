"use client";

import {usePathname} from "next/navigation";

import React from 'react';

interface MainNavProps {
    data: any
}

const MainNav: React.FC<MainNavProps> = ({data}) => {
    return (
        <nav>
            MainNav
        </nav>
    );
};

export default MainNav;
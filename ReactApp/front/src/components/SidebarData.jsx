import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillBook/>,
        cName: "nav-text",
    },
    {
        title: "Login",
        path: "/Login",
        icons: <AiIcons.AiFillBook/>,
        cName: "nav-text",
    }, 
    {
        title: "Games",
        path: "/Games",
        icons: <FaIcons.FaCartPlus/>,
        cName: "nav-text",
    },
    {
        title: "ScoutingPlatform",
        path: "/ScoutingPlatform",
        icons: <AiIcons.AiFillBook/>,
        cName: "nav-text",
    },  

];
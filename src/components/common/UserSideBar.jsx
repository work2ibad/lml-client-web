import React from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

const menuItems = [
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: <DashboardIcon />,
    },
    {
        label: "Users",
        path: "/users",
        icon: <PeopleIcon />,
    },
    {
        label: "Listings",
        path: "/listings",
        icon: <Inventory2Icon />,
    },
    {
        label: "Complaints",
        path: "/complaints",
        icon: <ReportProblemOutlinedIcon />,
    },
];

function UserSideBar() {
    return (
        <Box
            sx={{
                width: 260,
                height: "100vh",
                bgcolor: "#fff",
                borderRight: "1px solid #eee",
                px: 2,
                py: 3,
            }}
        >
            <List>
                {menuItems.map((item) => (
                    <ListItemButton
                        component={NavLink}
                        to={item.path}
                        sx={{
                            mb: 1,
                            borderRadius: "12px",
                            color: "#000",

                            "&:hover": {
                                bgcolor: "#1E7AF0",
                                color: "#fff",
                            },

                            "&:hover .MuiListItemIcon-root": {
                                color: "#fff",
                            },

                            "&.active": {
                                bgcolor: "#1E7AF0",
                                color: "#fff",

                                "& .MuiListItemIcon-root": {
                                    color: "#fff",
                                },
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 40,
                                color: "#777",
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>

                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                                fontSize: 15,
                                fontWeight: 500,
                            }}
                            sx={{
                                "&:hover": {
                                    bgcolor: "#fff",
                                },
                            }}
                        />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    )
}

export default UserSideBar

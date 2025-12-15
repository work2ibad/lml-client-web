
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import InventoryIcon from "@mui/icons-material/Inventory";

const menu = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/admin" },
  { text: "Users", icon: <PeopleIcon />, path: "/admin/users" },
  { text: "Products", icon: <InventoryIcon />, path: "/admin/products" },
  { text: "Complaints", icon: <ReportProblemIcon />, path: "/admin/complaints" },
];

export default function AdminSidebar() {
  return (
    <Box sx={{ width: 260, bgcolor: "primary.main", height: "100vh", color: "#fff" }}>
      <List>
        {menu.map((item) => (
          <ListItemButton
            key={item.text}
            sx={{
              "&:hover": { bgcolor: "#1E293B" },
            }}
          >
            <ListItemIcon sx={{ color: "#94A3B8" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

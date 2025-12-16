import UserSideBar from "../components/common/UserSideBar";
import Navbar from "../components/layout/Navbar";
import { Container, Box } from "@mui/material";

export default function AdminLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: 250, bgcolor: "#f1f5f9", height: "100vh", mb: 4 }}>
          <Box>
            <UserSideBar/>
          </Box>
        </Box>

        <Container sx={{ mt: 4 }}>{children}</Container>
      </Box>
    </>
  );
}

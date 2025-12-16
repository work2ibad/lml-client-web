import Navbar from "../components/layout/Navbar";
import TopHeader from "../components/common/header";
import Footer from "../components/common/footer";
import { Container, Box } from "@mui/material";
import UserSideBar from "../components/common/UserSideBar";

export default function StoreLayout({ children }) {
  return (

    <>
      <>
        <TopHeader />
        {/* Main Navbar below */}
      </>

      <Navbar />
      <Box sx={{ display: "flex" }}>
        <UserSideBar/>
        <Container sx={{ mt: 4 }}>{children}</Container>
      </Box>
      <Footer />
    </>

  );
}

import Navbar from "../components/layout/Navbar";
import TopHeader from "../components/common/header";
import Footer from "../components/common/footer";
import { Container, Box } from "@mui/material";

export default function UserLayout({ children }) {
  return (

    <>
      <>
        <TopHeader />
        {/* Main Navbar below */}
      </>

      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Container sx={{ mt: 4 }}>{children}</Container>
      </Box>
      <Footer />
    </>

  );
}

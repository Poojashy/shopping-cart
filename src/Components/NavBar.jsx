import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = [
  { title: "Home", path: "/", icon: <HomeIcon sx={{ mr: 1 }} /> },
  { title: "About", path: "/about", icon: <InfoIcon sx={{ mr: 1 }} /> },
  { title: "Shop", path: "/shop", icon: <ShoppingCartIcon sx={{ mr: 1 }} /> },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={2} sx={{ backgroundColor: "#f8f9fa", p: 2, borderRadius: "10px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Left Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src=".\images (5).jpg"
              alt="logo"
              style={{
                height: "80px",  // Adjust height and width as needed
                width: "80px",  // Adjust height and width as needed
                objectFit: "cover", // Ensure the image is properly scaled
                borderRadius: "50%", // Make the image circular
                border: "2px solid #333", // Optional: adds a border around the logo
              }}
            />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#333" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, index) => (
                <MenuItem component={Link} to={page.path} key={index} onClick={handleCloseNavMenu}>
                  {page.icon}
                  <Typography sx={{ textAlign: "center", color: "#333" }}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end", gap: 3 }}>
            {pages.map((page, index) => (
              <Button
                component={Link}
                to={page.path}
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#555",
                  fontWeight: "600",
                  fontSize: "16px",
                  textTransform: "none",
                  borderRadius: "20px",
                  backgroundColor: "#e9ecef",
                  px: 3,
                  '&:hover': {
                    backgroundColor: "#dee2e6"
                  },
                  display: "flex",
                  alignItems: "center"
                }}
              >
                {page.icon}
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;

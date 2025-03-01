import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import pic from "../Assets/Images/single-image1.png"; // Assuming you might want to use this image
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: "#cfcfcfba",
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Welcome to Golden Grove Mall
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                color: { xs: "white", sm: "#212121" },
                fontWeight: "bold",
                pb: 3,
              }}
            >
              Explore the best deals and exclusive offers
            </Typography>
            <Box
              sx={{
                display: "flex",
                overflow: "hidden", // Ensures that the text is hidden until it's scrolled into view
                whiteSpace: "nowrap", // Prevents text from wrapping to the next line
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: { xs: "white", sm: "#212121" },
                  fontSize: "18px",
                  fontWeight: "600",
                  animation: "scrollText 10s linear infinite", // Apply the continuous scrolling animation
                }}
              >
                Discover the latest trends, enjoy fast delivery, and shop with ease. Golden Grove Mall offers a seamless shopping experience for everyone.
              </Typography>
            </Box>
            {/* Shop Now Button as a Link */}
            <Link to="/shop" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#212121",
                  color: "white",
                  '&:hover': { backgroundColor: "#333" },
                  mt: 3, // Added margin-top for spacing
                }}
              >
                Shop Now
              </Button>
            </Link>
          </Box>
        </Grid>

        {/* Right Content (Image or Other Content) */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src={pic} alt="Banner" style={{ width: "100%", height: "auto" }} />
          </Box>
        </Grid>
      </Grid>

      {/* Add CSS for keyframes */}
      <style>
        {`
          @keyframes scrollText {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Banner;

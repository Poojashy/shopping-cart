import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        bgcolor: "#212121", // Dark background
        color: "#fff", // White text for contrast
        py: 4, // Vertical padding for spacing
        px: 3, // Horizontal padding for spacing
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Center Content (Logo and Tagline with Animation) */}
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Logo with Animation */}
          <Box sx={{ mb: 3, animation: "logoAnimation 3s ease-in-out infinite" }}>
            <img
              src=".\images (5).jpg" // Replace with your logo path
              alt="Golden Grove Mall"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "4px solid #f44336",
              }}
            />
          </Box>
          
          {/* Tagline with Animation */}
          <Typography
            variant="body1"
            sx={{
              fontStyle: "italic",
              color: "#f44336",
              fontWeight: "300",
              mb: 3,
              animation: "textAnimation 3s ease-in-out infinite",
            }}
          >
            Golden Grove Mall: Where shopping meets elegance and convenience.
          </Typography>
        </Grid>

        {/* Centered Quick Links */}
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              color: "#fff",
              mb: 2,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "600",
                color: "#fff",
                transition: "color 0.3s ease",
                '&:hover': {
                  color: "#f44336",
                }
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "600",
                color: "#fff",
                transition: "color 0.3s ease",
                '&:hover': {
                  color: "#f44336",
                }
              }}
            >
              About
            </Link>
            <Link
              to="/shop"
              style={{
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "600",
                color: "#fff",
                transition: "color 0.3s ease",
                '&:hover': {
                  color: "#f44336",
                }
              }}
            >
              Shop
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Typography
        variant="body2"
        sx={{
          mt: 4,
          textAlign: "center",
          color: "#aaa",
          fontWeight: "300",
        }}
      >
        &copy; {new Date().getFullYear()} Golden Grove Mall. All Rights Reserved.
      </Typography>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes logoAnimation {
            0% {
              transform: scale(0.8);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes textAnimation {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            50% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(20px);
            }
          }
        `}
      </style>
    </Paper>
  );
};

export default Footer;

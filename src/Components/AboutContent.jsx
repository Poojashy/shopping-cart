import { Box, Grid2, Typography } from "@mui/material";
import React from "react";

export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={
              "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2022-10/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone-min.jpg"
            }
            alt="picture"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{
                fontWeight: "bold", // Set the font weight to bold
                fontSize: "40px",
                color: "#5a0c4a",
                fontSize:"50px", // Set text color to black
              }}
            >
              About <span style={{ color: "#5a0c4a",fontSize:"50px" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                fontWeight: "bold", // Set the font weight to bold
                color: "#000000",
                fontSize:"20px" // Set text color to black
              }}
            >
              Your Trusted E-Commerce Partner
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                textAlign: "justify",
                fontWeight: "bold",
                fontSize:"20px" ,// Set the font weight to bold
                color: "#000000", // Set text color to black
              }}
            >
              At  Golden Grove Mall, we are committed to providing the best online shopping experience. Our mission is to offer a wide range of high-quality products at the best prices, all delivered right to your doorstep.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                textAlign: "justify",
                fontWeight: "bold", // Set the font weight to bold
                color: "#000000",
                fontSize:"20px" // Set text color to black
              }}
            >
              We prioritize customer satisfaction and ensure a smooth shopping process from browsing to checkout. Join millions of satisfied customers and shop with us today!
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

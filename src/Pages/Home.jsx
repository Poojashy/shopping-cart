import { Box } from "@mui/material";
import React from "react";
import Hero from "../Components/Hero";
import AboutContent from "../Components/AboutContent";
import Banner from "../Components/Banner";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh", // Ensures the background covers the full height of the screen
        backgroundColor: "#FFDE59", // Replace with your desired background color
        backgroundImage: "url('/path/to/your/image.jpg')", // Static background image path
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Makes sure the background image covers the entire box
      }}
    >
      <Box>
        <Hero />
      </Box>
      <Box sx={{ p: 3 }}>
        <AboutContent />
      </Box>
      <Box>
        <Banner />
      </Box>
    </Box>
  );
}

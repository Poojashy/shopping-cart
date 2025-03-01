import { Box, Typography, Grid } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import React from "react";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderBottomLeftRadius: "20px", // Add rounded corners for a modern look
        borderBottomRightRadius: "20px", // Add rounded corners for a modern look
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: "linear-gradient(144deg, #8000ff4a, #00ff7178)",
          borderRadius: "20px", // Add rounded corners for a smooth transition
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow for depth
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "#000000", // Changed to black
            marginBottom: 2,
            animation: "fadeIn 2s ease-out", // Smooth animation on text
          }}
          gutterBottom
        >
          Welcome to Golden Grove Shopping Mall
        </Typography>
        <Typography
          gutterBottom
          sx={{
            fontWeight: "900",
            fontSize: "24px",
            color: "#000000", // Changed to black
            opacity: 0, // Start as invisible
            animation: "fadeInSlideUp 2s ease-out forwards", // Apply animation
            animationDelay: "1s", // Delay the animation a bit
            marginBottom: 2,
          }}
        >
          Discover the best deals and exclusive offers
        </Typography>
        <Typography
          gutterBottom
          sx={{
            width: "80%",
            fontWeight: "600",
            color: "#000000", // Changed to black
            marginBottom: 3,
            fontSize: { xs: "16px", sm: "18px" },
            lineHeight: "1.6",
          }}
        >
          Shop the latest trends in fashion, electronics, and more! Experience a seamless online shopping experience with fast delivery and great customer support.
        </Typography>
        
        {/* Icons Section */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Box sx={{ textAlign: "center" }}>
              <ShoppingCartIcon
                sx={{
                  fontSize: "60px",
                  color: "#212121",
                  animation: "bounce 1s infinite",
                  "&:hover": {
                    color: "#FF5722", // Change color on hover for interactivity
                  },
                }}
              />
              <Typography sx={{ color: "#212121", fontWeight: "600", marginTop: 1 }}>
                Shop Now
              </Typography>
              
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ textAlign: "center" }}>
              <LocalOfferIcon
                sx={{
                  fontSize: "60px",
                  color: "#212121",
                  animation: "bounce 1s infinite",
                  "&:hover": {
                    color: "#FF5722", // Change color on hover for interactivity
                  },
                }}
              />
              <Typography sx={{ color: "#212121", fontWeight: "600", marginTop: 1 }}>
                Exclusive Deals
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ textAlign: "center" }}>
              <CardGiftcardIcon
                sx={{
                  fontSize: "60px",
                  color: "#212121",
                  animation: "bounce 1s infinite",
                  "&:hover": {
                    color: "#FF5722", // Change color on hover for interactivity
                  },
                }}
              />
              <Typography sx={{ color: "#212121", fontWeight: "600", marginTop: 1 }}>
                Special Gifts
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* CSS Keyframes for Animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInSlideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
    </Box>
  );
}

"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import ServicesSection from "../components/ServicesSection";

const MotionBox = motion(Box);

function Services() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        backgroundColor: "var(--color-white)",
        paddingTop: "8rem", // Add padding to account for fixed navbar
      }}
    >
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ServicesSection />
      </MotionBox>
    </Box>
  );
}

export default Services;

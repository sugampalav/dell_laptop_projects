import React from "react";
import Navbar from "../components/Navbar";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import Hero from "../components/Hero";

const theme = createTheme({
  root: {
    fontFamily: "Inter, sans-serif",
  },
});

function PremiumPage() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
      </ThemeProvider>
    </div>
  );
}

export default PremiumPage;

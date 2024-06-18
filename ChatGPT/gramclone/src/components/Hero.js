import { Box, Button, Icon, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { capitalize } from "@material-ui/core/utils";
import { shadows } from "@material-ui/system";
import { spacing } from "@material-ui/system";
import { sizing } from "@material-ui/system";
import FourKIcon from "@material-ui/icons/FourK";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { withStyles } from "@material-ui/core/styles";
import ListInHero from "./ListInHero";

import React from "react";

function Hero() {
  const heroStyle = withStyles({
    green: { color: "green", fontWeight: "bold", fontSize: "12px" },
  });
  const imageUrl = "./assets/heroBg.png";

  const title = "aim high with brilliant writing";
  const capitalizedSentence = title
    .split(" ") // split the sentence into an array of words
    .map((word) => capitalize(word)) // capitalize each word
    .join(" "); // join the words back into a single string

  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          width="auto"
          height="100%"
          textAlign="center"
          fontWeight="fontWeightBold"
          display="flex"
          alignItems="center"
          p={5}
          m={0}
          flexDirection="column"
          gridGap={20}
        >
          <Typography component="p" variant="h3">
            {capitalizedSentence}
          </Typography>
          <Button
            size="large"
            variant="contained"
            style={{
              backgroundColor: "#0d8065",
              color: "#ffffff",
              textTransform: "none",
              fontWeight: "400",
            }}
          >
            Upgrade to Grammarly Premium
          </Button>
        </Box>
        <Box
          p={5}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Box
              bgcolor="white"
              color="black"
              py={5}
              px={5}
              position="relative"
              right="40%"
              zIndex="modal"
              width="370px"
              height="150px"
              borderRadius={5}
              boxShadow={3}
            >
              <Typography>
                I think we should be able to solve this issue for you
              </Typography>
            </Box>
            <Box
              bgcolor="white"
              color="black"
              py={2}
              px={2}
              position="relative"
              top={-30}
              right="23%"
              zIndex="tooltip"
              borderRadius={5}
              width="370px"
              height="auto"
              boxShadow={5}
            >
              <Grid container spacing={3}>
                <Grid item xs={1}>
                  <FourKIcon fontSize="small" />
                </Grid>
                <Grid item xs={11}>
                  <Box fontSize={16} fontWeight="fontWeightBold">
                    Strike the right tone
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={11}>
                  <Typography variant="body2" component="del">
                    I think we should be able to
                  </Typography>
                  <ArrowForwardIcon fontSize="small" />
                  <Typography component="span" style={heroStyle.green}>
                    We can
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box ml={10}>
            <ListInHero />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Hero;

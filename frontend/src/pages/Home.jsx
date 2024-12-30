import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { grayColor } from "../constants/color";

const Home = () => {
  return (
    <Box
      bgcolor={grayColor}
      height={"100%"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        p={"2rem"}
        variant="h5"
        textAlign={"center"}
        fontSize={"1.8rem"}
        fontFamily={"serif"}
        color={"black"}
      >
        Choose a friend and kick off the gupshap!
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);

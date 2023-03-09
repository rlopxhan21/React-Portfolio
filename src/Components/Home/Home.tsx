import React from "react";

import { Box, Paper, Stack, Typography } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";
import { RouterLink } from "../Custom/RouterLink";

interface linkListDataType {
  id: number;
  name: string;
  link: string;
}

const dashboardStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

const linkStyles = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: 1,
  py: 1,
  px: 4,
  borderRadius: 2,
};

const linkList: linkListDataType[] = [
  {
    id: 1,
    name: "Portfolio",
    link: "https://lopxhan.com",
  },
  {
    id: 2,
    name: "Blog",
    link: "https://lopxhan.com",
  },
  {
    id: 3,
    name: "GitHub",
    link: "https://github.com/rlopxhan21",
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ronishlopxhan/",
  },
];

export const Home = () => {
  // const { }
  return (
    <Paper variant="outlined" square sx={dashboardStyles}>
      <Stack flexDirection={"column"} gap={2}>
        <Box textAlign={{ xs: "center", md: "start" }}>
          <Typography variant="h5" fontWeight={700}>
            👋 Hello,
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            I'm Ronish Lopxhan
          </Typography>
        </Box>
        <Box textAlign={{ xs: "center", md: "start" }}>
          <Typography variant="body2">
            Full Stack Developer/ Software Engineer
          </Typography>
          <Typography variant="body2">
            I like making interesting projects.
          </Typography>
        </Box>
        <Stack
          direction={"row"}
          justifyContent={{ xs: "center" }}
          flexWrap="wrap"
          gap={2}
        >
          {linkList.map((item) => (
            <RouterLink key={item.id} to={item.link} target="_blank">
              <Paper elevation={1} sx={linkStyles}>
                <Typography variant="body2">{item.name}</Typography>
                <OpenInNew fontSize="small" />
              </Paper>
            </RouterLink>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
};

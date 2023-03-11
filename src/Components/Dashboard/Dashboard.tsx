import React from "react";

import { RouterLink } from "../Custom/RouterLink";
import { ReactComponent as PythonIcon } from "../../assets/icons/python-svgrepo-com.svg";
import { ReactComponent as JavaScriptIcon } from "../../assets/icons/javascript-svgrepo-com.svg";
import { ReactComponent as TypeScriptIcon } from "../../assets/icons/typescript-icon-svgrepo-com.svg";
import { ReactComponent as DjangoIcon } from "../../assets/icons/django-svgrepo-com.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react-svgrepo-com.svg";
import { ReactComponent as MuiIcon } from "../../assets/icons/material-ui-svgrepo-com.svg";
import { ReactComponent as PostIcon } from "../../assets/icons/postgresql-logo-svgrepo-com.svg";
import { ReactComponent as AwsIcon } from "../../assets/icons/aws-svgrepo-com.svg";
import { ReactComponent as LinuxIcon } from "../../assets/icons/linux-svgrepo-com.svg";

import {
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { OpenInNew } from "@mui/icons-material";

interface linkListDataType {
  id: number;
  name: string;
  link: string;
}

const dashboardStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  transform: { xs: "scale(1)", lg: "scale(2)" },
};

const linkStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
    link: "https://rlopxhan21.github.io",
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

export const Dashboard = () => {
  return (
    <Paper variant="outlined" square sx={dashboardStyles}>
      <Stack flexDirection={"column"} gap={2}>
        <Box
          component={"img"}
          width={100}
          src={require("../../assets/image/icons.png")}
          alt="No Image Found!"
          margin={"auto"}
        />
        <Paper elevation={1} sx={linkStyles}>
          <Typography variant="h5" fontWeight={700}>
            👋 Hey,
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            I'm Ronish Lopxhan
          </Typography>
        </Paper>
        <Typography variant="body2" textAlign={"center"}>
          Full Stack Developer, Software Engineer & Tech Enthusiast
        </Typography>
        <Stack
          direction={"row"}
          justifyContent="center"
          flexWrap="wrap"
          gap={2}
        >
          <PythonIcon />
          <JavaScriptIcon />
          <TypeScriptIcon />
          <Divider orientation="vertical" />
          <DjangoIcon />
          <ReactIcon />
          <MuiIcon />
          <Divider orientation="vertical" />
          <PostIcon />
          <Divider orientation="vertical" />
          <AwsIcon />
          <Divider orientation="vertical" />
          <LinuxIcon />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent="center"
          flexWrap="wrap"
          gap={2}
        >
          {linkList.map((item) => (
            <RouterLink key={item.id} to={item.link} target="_blank">
              <Paper elevation={0.7} sx={linkStyles}>
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

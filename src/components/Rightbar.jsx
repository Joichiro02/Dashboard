import {
  Avatar,
  AvatarGroup,
  Container,
  ImageList,
  ImageListItem,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#555",
  },
  link: {
    color: "#555 !important",
    fontSize: "16px !important",
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: "20px" }}>
        <Avatar alt="Remy Sharp" src="./images/helmetman.png" />
        <Avatar alt="Travis Howard" src="./images/mario.jfif" />
        <Avatar alt="Cindy Baker" src="./images/monkey.png" />
        <Avatar alt="Agnes Walker" />
        <Avatar alt="Trevor Henderson" src="./images/wolverine.png" />
        <Avatar alt="Cindy Baker" src="./images/monkey.png" />
        <Avatar alt="Agnes Walker" src="./images/SmallMario.png" />
        <Avatar alt="Trevor Henderson" src="./images/wolverine.png" />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={100} style={{ marginBottom: "20px" }} cols={2}>
        <ImageListItem>
          <img src="./images/wolverine.png" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="./images/SmallMario.png" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="../images/monkey.png" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="./images/wolverine.png" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="./images/helmetman.png" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="./images/wolverine.png" alt="" />
        </ImageListItem>
      </ImageList>
      <Stack>
        <Typography className={classes.title} gutterBottom>
          Categories
        </Typography>
        <Stack direction="row" spacing={1}>
          <Stack direction="column" spacing={2}>
            <Link href="#" className={classes.link} variant="body2">
              Sport
            </Link>
            <Link href="#" className={classes.link} variant="body2">
              Food
            </Link>
          </Stack>
          <Stack direction="column" spacing={2}>
            <Link href="#" className={classes.link} variant="body2">
              Science
            </Link>
            <Link href="#" className={classes.link} variant="body2">
              Movies
            </Link>
          </Stack>
          <Stack direction="column" spacing={2}>
            <Link href="#" className={classes.link} variant="body2">
              Music
            </Link>
            <Link href="#" className={classes.link} variant="body2">
              Life
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Rightbar;

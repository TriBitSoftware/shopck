import React from 'react';
import { BusinessSignUpForm } from '../src/BusinessSignUpForm';
import { makeStyles, Box, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginBottom: 32
  },

  homeImage: {
    width: "100%",
    height: "100vh",
    alignSelf: "center",
  },
  logo: {
    width: 200,
  },

  imageContainer: {
    position: "relative",
    textAlign: "center",
  },

  centeredText: {
    position: "absolute",
    top: "5%",
    left: "50%",
    transform: "translate(-50%)",
  },

  header: {
    color: "#FFF",
    fontWeight: "bold"
  },

  subheader: {
    color: "#FFF",
  },

  button: {
    backgroundColor: "#000",
    color: "#FFF",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingRight: "25px",
    paddingLeft: "25px",
    marginTop: 32,
    alignSelf: "flex-end"
  },
});

export default function Index() {

  const classes = useStyles();

  return (
    <Box>
      <div className={classes.imageContainer}>
        <Box className={classes.centeredText}>
          <img className={classes.logo} src={"/images/Logo.png"}></img>
          <Typography variant="h2" className={classes.header}>ShopCK is coming soon!</Typography>
          <Typography variant="h6" className={classes.subheader}>Providing a directory to discover and support local businesses.</Typography>
          <Button variant="contained" className={classes.button}>Register Now</Button>
        </Box>
        <img className={classes.homeImage} src={"/images/ShopCKHomeDark.png"}></img>
      </div>

      <BusinessSignUpForm />
    </Box>
  );
}
import { useRef } from 'react';
import { makeStyles, Box, Typography, Button, Link, Avatar } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import { BusinessSignUpForm } from './components/BusinessSignUpForm';

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
    alignSelf: "flex-end",
    '&:hover': {
      backgroundColor: '#2b2b2b',
      color: '#FFF',
    },
  },
  instaHandle: {
    verticalAlign: 'middle',
    display: 'inline-flex',
    position: "absolute",
    right: 32,
    bottom: 32,
    color: "#FFF"
  },
  footer: {
    minHeight: "50px",
    padding: "20px",
    backgroundColor: "#1c1d1f",
    color: "#939596",
  },

  avatarLogo: {
    margin: 8,
  }
});

export default function App() {

  const classes = useStyles();
  const formRef = useRef<HTMLHeadingElement>(null)

  return (
    <Box>
      <div className={classes.imageContainer}>
        <Box className={classes.centeredText}>
          <img className={classes.logo} src={"/images/Logo.png"} alt={"logo"}></img>
          <Typography variant="h2" className={classes.header}>ShopCK is coming soon!</Typography>
          <Typography variant="h6" className={classes.subheader}>Providing a directory to discover and support local businesses.</Typography>
          <Button variant="contained" className={classes.button}
            onClick={() => formRef.current && formRef.current.scrollIntoView({ behavior: 'smooth' })}>
            Register Now
          </Button>
        </Box>
        <img className={classes.homeImage} src={"/images/ShopCKHomeDark.png"} alt={"background"}></img>

        <Link className={classes.instaHandle} target="_blank" href="https://www.instagram.com/k_wicksy/" color="inherit">
          <PhotoCamera></PhotoCamera>
          @k_wicksy
        </Link>
      </div>

      <h1 ref={formRef}></h1>
      <BusinessSignUpForm />

      <Box className={classes.footer} display="flex" flexDirection="column">


        <Link target="_blank" href="https://www.tribitsoftware.ca/" color="inherit">
          <Box display="flex" flexDirection="row" alignItems="center" alignContent="center">
            <Typography variant="h6">Powered by Tribit Software</Typography>
            <Avatar className={classes.avatarLogo} alt="Logo" src="/images/Tribit.png" />
          </Box>
        </Link>

        <Typography variant="body2">@Copyright 2021 ShopCK</Typography>
      </Box>
    </Box >
  );
}
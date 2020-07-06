import React from "react";
import Lottie from 'react-lottie';
import { makeStyles } from "@material-ui/core/styles";
import animationData from "../animations/landinganimation/data"
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ButtonArrow from "./ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg"
import aboutBackground from "../assets/infoBackground.svg";
import {ServiceItem} from "./ui/ServiceItem";


import {CallToAction} from "./ui/CallToAction"

const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop: "5rem",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em",
        }
    },
    animation: {
        maxWidth: "50rem",
        minWidth: "21rem",
        marginTop: "2rem",
        marginLeft: "10%",
        [theme.breakpoints.down("md")]: {
            maxWidth: "30rem"
        }
    },
    btnContainer: {
        marginTop: "1rem"
    },
    estimateBtn: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: "16px",
        }
    },
    learnBtnHero: {
        ...theme.typography.learnBtn,
        fontSize: "0.9rem",
        height: 45,
        width: 145,

    },
    learnBtn: {
        ...theme.typography.learnBtn,
        fontSize: "0.7rem",
        height: 35,
        padding: "7px 15px",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2rem",
        }
    },
    heroTextContainer: {
        minWidth: "21.5rem",
        paddingLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            minWidth: 0,
            paddingLeft: 0
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.secondary.main
    },
    subtitle: {
        marginBottom: "1rem",
    },
    icon: {
        marginLeft: "2rem",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        },
    },
    servicesContainer: {
        marginTop: "6rem",
        [theme.breakpoints.down("sm")]: {
            marginTop: "1rem",
        }
    },
    serviceContainer: {
        marginTop: "8rem",
        [theme.breakpoints.down("sm")]: {
            marginTop: "5rem",
            padding: "1rem",
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        marginTop: "8rem",
        [theme.breakpoints.down("sm")]: {
            // height: "50rem",
            marginTop: "5rem",
        }
    },

    revolutionCardContainer: {


    },
    revolutionCard: {
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10rem",
        [theme.breakpoints.down("sm")]: {
            padding: "8rem 0",
            borderRadius: 0,
            width: "100%"
        }
    },
    aboutBackground: {
        backgroundImage: `url(${aboutBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        padding: "5rem",
        [theme.breakpoints.down("xs")]: {
            
            padding: "0",
            "align-items": "center",
            "justify-content": "center",
        }
    },
    aboutTextConteiner:{
        [theme.breakpoints.down("xs")]: {
            "flex-direction": "column",
        }
    }

}));

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const LandingPage = (props) => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            {/*-----Hero Block-----*/}
            <Grid item container justify="flex-end">
                <Grid sm item container direction="column" alignItems="flex-end" justify="center" >
                    <Grid item container justify="center" className={classes.heroTextContainer}>
                        <Typography variant="h2" align="center">Bringing Weast Coast Technology<br />to the Midwest</Typography>
                    </Grid>
                    <Grid item container justify={"center"} className={classes.btnContainer}>
                        <Button variant="contained" className={classes.estimateBtn}>Free Estimate</Button>
                        <Button variant="outlined" className={classes.learnBtnHero}><span style={{ marginRight: "10px" }}>Learn More</span><ButtonArrow fill={theme.palette.primary.main} width="15" height="15" /></Button>
                    </Grid>
                </Grid>
                <Grid sm item className={classes.animation}>
                    <Lottie options={defaultOptions} width={"100%"} height={"100%"}></Lottie>
                </Grid>
            </Grid>

            <Grid item container className={classes.servicesContainer}> {/*-----Services Block*/}

                <ServiceItem header="Custom Software Development" 
                             subtitle1="Save Energy. Save Time. Save Money." subtitle2={<>Complete digital solutions, from investigation to <span className={classes.specialText}>selebration.</span></>} 
                             imageSrc={customSoftwareIcon}/>
                {/*Custom Software Developmnt*/}
                <Grid item container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5rem", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            
                        </Typography>
                        <Button variant="outlined" className={classes.learnBtn}>
                            <span style={{ marginRight: "10px" }}>Learn More</span>
                            <ButtonArrow fill={theme.palette.primary.main} width="10" height="10" />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="" src={customSoftwareIcon} />
                    </Grid>
                </Grid>
                {/*iOS/Android Developmnt*/}
                <Grid item container direction="row"
                    className={classes.serviceContainer}
                    justify={matchesSM ? "center" : "flex-end"}
                    style={{ marginRight: matchesSM ? 0 : "5rem", textAlign: matchesSM ? "center" : undefined }}>
                    <Grid item >
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend functionality. Extend Access. Increase engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web expirience or create a standalone app {matchesSM ? null : <br />} with either mobile platform.
                        </Typography>
                        <Button variant="outlined" className={classes.learnBtn}>
                            <span style={{ marginRight: "10px" }}>Learn More</span>
                            <ButtonArrow fill={theme.palette.primary.main} width="10" height="10" />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="" src={mobileAppsIcon} />
                    </Grid>
                </Grid>

                {/*Website Developmnt*/}
                <Grid item container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5rem", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Website Developmnt
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach more. Discover more. Sell more.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, build for speed.
                        </Typography>
                        <Button variant="outlined" className={classes.learnBtn}>
                            <span style={{ marginRight: "10px" }}>Learn More</span>
                            <ButtonArrow fill={theme.palette.primary.main} width="10" height="10" />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="" src={websiteIcon} />
                    </Grid>
                </Grid>

            </Grid>

            {/*The Revolution block*/}
            <Grid item container className={classes.revolutionBackground} alignItems="center">
                <Grid container  className={classes.revolutionCardContainer} justify="center" >
                    <Card style={{ textAlign: "center" }} className={classes.revolutionCard}>
                        <Typography variant="h3" gutterBottom>The Revolution</Typography>
                        <Typography variant="subtitle1">Visionary insights coupled with cutting-edge technology is a recipe for revolution</Typography>
                        <Button variant="outlined" className={classes.learnBtnHero}><span style={{ marginRight: "10px" }}>Learn More</span><ButtonArrow fill={theme.palette.primary.main} width="15" height="15" /></Button>
                    </Card>
                </Grid>
            </Grid>

            {/*The about block*/}
            <Grid item className={classes.aboutBackground} container alignItems="center" >
                <Grid item container justify="space-between"  className={classes.aboutTextConteiner}>
                    <Grid item style={{textAlign: matchesXS ? 'center' : "inherit", marginBottom: matchesXS?"3rem":0}}>
                        <Typography variant="h2" style={{ color: "white" }}>About Us</Typography>
                        <Typography variant="subtitle2">Lets get personal.</Typography>
                        <Button variant="outlined" className={classes.learnBtnHero} style={{ color: "white", borderColor: "white" }}><span style={{ marginRight: "10px", }}>Learn More</span><ButtonArrow fill="white" width="15" height="15" /></Button>
                    </Grid>
                    <Grid item style={{textAlign: matchesXS ? 'center' : "right"}}>
                        <Typography variant="h2" style={{ color: "white" }}>Contact Us</Typography>
                        <Typography variant="subtitle2">Say hello</Typography>
                        <Button variant="outlined" className={classes.learnBtnHero} style={{ color: "white", borderColor: "white" }}><span style={{ marginRight: "10px", }}>Learn More</span><ButtonArrow fill="white" width="15" height="15" /></Button>
                    </Grid> 
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction />
            </Grid>
        </Grid >
    );
};

export { LandingPage }
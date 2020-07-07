import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, IconButton, Hidden } from "@material-ui/core";

import integrationAnimation from "../animations/integrationAnimation/data.json";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import swissKnife from "../assets/swissKnife.svg";
import extendAccess from "../assets/extendAccess.svg";
import increaseEngagement from "../assets/increaseEngagement.svg";
import { CallToAction } from "./ui/CallToAction";

const integrationOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: "auto",
        maxWidth: "120rem",
        padding: "3.5rem 11.5rem 0 11.5rem",
        [theme.breakpoints.down("md")]: {
            padding: "2.5rem 5.5rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "1rem 1rem 3rem 1rem",
        },
    },
    headerContainer: {
        [theme.breakpoints.down("md")]: {
            justifyContent: "center",
        },
    },
    heading: {
        maxWidth: "40rem",
    },
    arrowContainer: {
        marginTop: ".5rem",
    },
    integrationContainer: {
        marginTop: "7rem",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
            textAlign: "center",
        },
    },
    integrationItemWrapper: {
        [theme.breakpoints.down("md")]: {
            justifyContent: "center",
        },
    },
    integrationItem: {
        maxWidth: "30rem",
        [theme.breakpoints.down("md")]: {
            maxWidth: "40rem",
            alignSelf: "center",
        },
    },
    advantageItems: {
        margin: "24rem 0",
        [theme.breakpoints.down("md")]: {
            margin: "12rem 0",
        },
        [theme.breakpoints.down("sm")]: {
            margin: "8rem 0",
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "3rem",
        },
    },
    advantageItem: {
        width: "auto",
        textAlign: "center",
        "& img": {
            maxHeight: "14rem",
            maxWidth: "100%",
        },
        [theme.breakpoints.down("md")]: {
            // marginTop: "5rem",
            marginBottom: "6rem",
            alignSelf: "center",
        },
    },
}));

const MobileAppsPage = (props) => {
    const classes = useStyles();

    return (
        <>
            <Grid conteiner className={classes.mainContainer}>
                <Grid
                    item
                    container
                    justify
                    className={classes.headerContainer}
                >
                    <Hidden mdDown>
                        <Grid
                            item
                            className={classes.arrowContainer}
                            style={{
                                marginLeft: "-3.5rem",
                                marginRight: "1rem",
                            }}
                        >
                            <IconButton
                                style={{ backgroundColor: "transparent" }}
                                component={Link}
                                to="/customsoftware"
                            >
                                <img
                                    src={backArrow}
                                    alt="Back to Custom Software Development page"
                                />
                            </IconButton>
                        </Grid>
                    </Hidden>

                    <Grid
                        item
                        container
                        direction="column"
                        className={classes.heading}
                    >
                        <Grid item>
                            <Typography variant="h2">
                                iOS/Android App Development
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                Mobile apps allow you to take your tools on the
                                go.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Whether you want an app for your customers,
                                employees, or yourself, we can build
                                cross-platform native solutions for any part of
                                your business process. This opens you up to a
                                whole new world of possibilities by taking
                                advantage of phone features like the camera,
                                GPS, push notifications, and more.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Convenience. Connection.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                        <Grid
                            item
                            className={classes.arrowContainer}
                            style={{
                                marginRight: "-3.5rem",
                                flexGrow: 1,
                                textAlign: "right",
                            }}
                        >
                            <IconButton
                                style={{ backgroundColor: "transparent" }}
                                component={Link}
                                to="/website"
                            >
                                <img
                                    src={forwardArrow}
                                    alt="forward to Website Development page"
                                />
                            </IconButton>
                        </Grid>
                    </Hidden>
                </Grid>

                <Grid
                    item
                    container
                    justify="center"
                    className={classes.integrationContainer}
                    spacing={1}
                >
                    <Grid
                        item
                        container
                        md
                        justify="flex-start"
                        className={classes.integrationItemWrapper}
                    >
                        <Grid item md className={classes.integrationItem}>
                            <Typography variant="h4">Integration</Typography>
                            <Typography variant="body1" paragraph>
                                Our technology enables an innate interconnection
                                between web and mobile applications, putting
                                everything you need right in one convenient
                                place.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                This allows you to extend your reach, reinvent
                                interactions, and develop a stronger
                                relationship with your users than ever before.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md style={{ maxWidth: "20rem" }}>
                        <Lottie options={integrationOptions}></Lottie>
                    </Grid>
                    <Grid
                        item
                        container
                        md
                        justify="flex-end"
                        className={classes.integrationItemWrapper}
                    >
                        <Grid item md className={classes.integrationItem}>
                            <Typography variant="h4">
                                Simultaneous Platform Support
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Our cutting-edge development process allows us
                                to create apps for iPhone, Android, and tablets
                                — all at the same time.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                This significantly reduces costs and creates a
                                more unified brand experience across all
                                devices.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container className={classes.advantageItems}>
                    <Grid
                        item
                        lg
                        container
                        direction="column"
                        alignItems="flex-start"
                    >
                        <Grid item className={classes.advantageItem}>
                            <Typography variant="h4" gutterBottom>
                                Extend Functionality
                            </Typography>
                            <img src={swissKnife} alt="Swiss Knife" />
                        </Grid>
                    </Grid>
                    <Grid item lg container direction="column">
                        <Grid item className={classes.advantageItem}>
                            <Typography variant="h4" gutterBottom>
                                Extend Access
                            </Typography>
                            <img src={extendAccess} alt="Swiss Knife" />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        lg
                        container
                        direction="column"
                        alignItems="flex-end"
                    >
                        <Grid item className={classes.advantageItem}>
                            <Typography variant="h4" gutterBottom>
                                Increase Engagement
                            </Typography>
                            <img src={increaseEngagement} alt="Swiss Knife" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <CallToAction />
        </>
    );
};

export { MobileAppsPage };

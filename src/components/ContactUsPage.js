import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";

import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import ButtonArrow from "./ui/ButtonArrow";
import { useTheme } from "@material-ui/styles";
import { ContactForm } from "./ui/ContactForm";

const useStyles = makeStyles((theme) => ({
    mainContainer: {},
    subHeader: {
        color: theme.palette.primary.main,
    },
    formContainer: {
        padding: "1.25rem 6.25rem",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            padding: "1.25rem 4.25rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "1.25rem 2rem",
            maxWidth: "25rem",
        },
    },
    contacts: { marginBottom: "2rem" },
    contactText: {
        color: theme.palette.common.blue,
        fontSize: "1rem",
    },
    formInput: {
        // marginTop: "1rem",
    },
    message: {
        marginTop: "3.125rem",
        marginBottom: "2rem",
    },

    callContainer: {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "5.78rem",
        [theme.breakpoints.down("md")]: {
            alignContent: "center",
        },
        [theme.breakpoints.down("sm")]: {
            height: "75vh",
            backgroundImage: `url(${mobileBackground})`,
            padding: "2rem",
            justifyContent: "space-between",
            // backgroundSize: "contain",
            backgroundPosition: "center",
        },
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            justifyContent: "center",
            padding: "1rem",
        },
    },
    estimateBtn: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        height: 80,
        width: 205,
        backgroundColor: theme.palette.secondary.main,
        fontSize: "1.5rem",
        marginLeft: "2em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3rem",
            marginLeft: 0,
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    learnBtn: {
        ...theme.typography.learnBtn,
        fontSize: "0.7rem",
        height: 35,
        padding: "5px 10px",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2rem",
        },
    },
}));

const ContactUsPage = (props) => {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.mainContainer} justify="center">
                <Grid item md={6} lg={4} className={classes.formContainer}>
                    <Typography
                        variant="h2"
                        style={{ lineHeight: 1 }}
                        gutterBottom
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        className={classes.subHeader}
                    >
                        We’re waiting.
                    </Typography>
                    <Grid className={classes.contacts} item container>
                        <Grid container alignItems="center">
                            <img
                                src={phoneIcon}
                                alt="phone"
                                style={{ marginRight: "0.5em" }}
                            />
                            <Typography
                                variant="body1"
                                className={classes.contactText}
                            >
                                <a
                                    href="tel:5555555555"
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    (555) 555-5555
                                </a>
                            </Typography>
                        </Grid>
                        <Grid container alignItems="center">
                            <img
                                src={emailIcon}
                                alt="envelope"
                                style={{ marginRight: "0.5em" }}
                            />
                            <Typography
                                variant="body1"
                                className={classes.contactText}
                            >
                                <a
                                    href="mailto:zachary@gmail.com"
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    zachary@gmail.com
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                    <ContactForm />
                </Grid>
                <Grid
                    item
                    md={6}
                    lg={8}
                    className={classes.callContainer}
                    container
                    alignItems="center"
                >
                    <Grid item>
                        <Typography variant="h2">
                            Simple software.
                            <br /> Revolutionary Results.
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            style={{ fontSize: "1.5rem" }}
                        >
                            Take advantage of <br /> 21st Century
                        </Typography>
                        <Button
                            variant="outlined"
                            component={Link}
                            to="/revolution"
                            className={classes.learnBtn}
                        >
                            <span style={{ marginRight: "5px" }}>
                                Learn More
                            </span>
                            <ButtonArrow
                                fill={theme.palette.common.blue}
                                width="15"
                                height="15"
                            />
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            component={Link}
                            to="/estimate"
                            className={classes.estimateBtn}
                        >
                            Free Estimate
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export { ContactUsPage };

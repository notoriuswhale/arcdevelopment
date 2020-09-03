import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, IconButton, Hidden } from "@material-ui/core";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import { Link } from "react-router-dom";

import analytics from "../assets/analytics.svg";
import ecommerce from "../assets/ecommerce.svg";
import outreach from "../assets/outreach.svg";
import seo from "../assets/seo.svg";

import { CallToAction } from "./ui/CallToAction";

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
        marginBottom: "12rem",
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
    itemContainer: {
        maxWidth: "40rem",
    },
    websiteItemContainer: {
        marginBottom: "12rem",
        [theme.breakpoints.down("md")]: {
            marginBottom: "8rem",
            justifyContent: "center",
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: "4rem",
            justifyContent: "center",
        },
    },
    websiteItem: {
        maxWidth: "46.5rem",
        "& img": {
            maxWidth: "100%",
        },
        [theme.breakpoints.down("md")]: {
            justifyContent: "center",
        },
        [theme.breakpoints.down("sm")]: {
            "& img": {
                maxWidth: "70%",
            },
        },
    },
    websiteItemHeader: {
        textAlign: "center",
    },
}));

const WebsitePage = (props) => {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.mainContainer}>
                <Grid item container className={classes.headerContainer}>
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
                                to="/mobileapps"
                            >
                                <img
                                    src={backArrow}
                                    alt="Back to iOS/Android Development page"
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
                                Website Development
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Having a website is a necessity in today’s
                                business world. They give you one central,
                                public location to let people know who you are,
                                what you do, and why you’re the best at it.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                From simply having your hours posted to having a
                                full fledged online store, making yourself as
                                accessible as possible to users online drives
                                growth and enables you to reach new customers.
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
                                to="/services"
                            >
                                <img
                                    src={forwardArrow}
                                    alt="Forward to Services Page"
                                />
                            </IconButton>
                        </Grid>
                    </Hidden>
                </Grid>

                <Grid item container className={classes.websiteItemContainer}>
                    <Grid
                        item
                        container
                        alignItems="center"
                        className={classes.websiteItem}
                    >
                        <Grid item md={5} className={classes.websiteItemHeader}>
                            <Typography
                                variant="h4"
                                align="center"
                                gutterBottom
                            >
                                Analytics
                            </Typography>
                            <img src={analytics} alt="" />
                        </Grid>
                        <Grid item md={7}>
                            <Typography variant="body1" paragraph>
                                Knowledge is power, and data is 21st Century
                                gold. Analyzing this data can reveal hidden
                                patterns and trends in your business, empowering
                                you to make smarter decisions with measurable
                                effects.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    className={classes.websiteItemContainer}
                    justify="flex-end"
                >
                    <Grid
                        item
                        container
                        alignItems="center"
                        className={classes.websiteItem}
                    >
                        <Grid item md={5} className={classes.websiteItemHeader}>
                            <Typography
                                variant="h4"
                                align="center"
                                gutterBottom
                            >
                                E-Commerce
                            </Typography>
                            <img src={ecommerce} alt="" />
                        </Grid>
                        <Grid item md={7}>
                            <Typography variant="body1" paragraph>
                                It’s no secret that people like to shop online.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                In 2017 over $2.3 trillion was spent in
                                e-commerce, and it’s ti me for your slice of
                                that pie.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container className={classes.websiteItemContainer}>
                    <Grid
                        item
                        container
                        alignItems="center"
                        className={classes.websiteItem}
                    >
                        <Grid item md={5} className={classes.websiteItemHeader}>
                            <Typography
                                variant="h4"
                                align="center"
                                gutterBottom
                            >
                                Outreach
                            </Typography>
                            <img src={outreach} alt="" />
                        </Grid>
                        <Grid item md={7}>
                            <Typography variant="body1" paragraph>
                                Draw people in with a dazzling website. Showing
                                off your products online is a great way to help
                                customers decide what’s right for them before
                                visiting in person.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    className={classes.websiteItemContainer}
                    justify="flex-end"
                >
                    <Grid
                        item
                        container
                        alignItems="center"
                        className={classes.websiteItem}
                    >
                        <Grid item md={5} className={classes.websiteItemHeader}>
                            <Typography
                                variant="h4"
                                align="center"
                                gutterBottom
                            >
                                Search Engine Optimization
                            </Typography>
                            <img src={seo} alt="" />
                        </Grid>
                        <Grid item md={7}>
                            <Typography variant="body1" paragraph>
                                How often have you ever been to the second page
                                of Google results?
                            </Typography>
                            <Typography variant="body1" paragraph>
                                If you’re like us, probably never.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Customers don’t go there either, so we make sure
                                your website is designed to end up on top.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <CallToAction />
        </>
    );
};

export { WebsitePage };

import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";
import roots from "../assets/root.svg";
import { CallToAction } from "./ui/CallToAction";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        padding: "2rem 5rem 10rem 5rem",
        [theme.breakpoints.down("sm")]: {
            padding: "1rem 1rem 3rem 1rem",
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
}));

const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};
const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};
const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};
const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const CustomSoftware = (props) => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <>
            <Grid
                container
                direction="column"
                className={classes.mainContainer}
            >
                <Grid item container justify={matchesMD ? "center" : undefined}>
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
                                to="/services"
                            >
                                <img
                                    src={backArrow}
                                    alt="Back to services page"
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
                                Custom Software Development
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                Whether we’re replacing old software or
                                inventing new solutions, Arc Development is here
                                to help your business tackle technology.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Using regular commercial software leaves you
                                with a lot of stuff you don’t need, without some
                                of the stuff you do need, and ultimately
                                controls the way you work. Without using any
                                software at all you risk falling behind
                                competitors and missing out on huge savings from
                                increased efficiency.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Our custom solutions are designed from the
                                ground up with your needs, wants, and goals at
                                the core. This collaborative process produces
                                finely tuned software that is much more
                                effective at improving your workflow and
                                reducing costs than generalized options.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                We create exactly what you what, exactly how you
                                want it.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item className={classes.arrowContainer}>
                            <IconButton
                                style={{ backgroundColor: "transparent" }}
                                component={Link}
                                to="/mobileapps"
                            >
                                <img
                                    src={forwardArrow}
                                    alt="forward to iOS/Android development page"
                                />
                            </IconButton>
                        </Grid>
                    </Hidden>
                </Grid>

                <Grid
                    item
                    container
                    justify="center"
                    style={{ marginTop: "15rem", marginBottom: "20rem" }}
                >
                    <Grid
                        item
                        container
                        direction="column"
                        md
                        style={{ maxWidth: "40rem" }}
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                Save Energy
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img alt="lightbulb" src={lightbulb}></img>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        md
                        style={{
                            marginBottom: matchesSM ? "10rem" : 0,
                            marginTop: matchesSM ? "10rem" : 0,
                            maxWidth: "40rem",
                        }}
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                Save Time
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img alt="stopwatch" src={stopwatch}></img>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        md
                        style={{ maxWidth: "40rem" }}
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                Save Money
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img alt="cash" src={cash}></img>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid
                        item
                        container
                        justify={matchesMD ? "center" : "space-between"}
                        alignItems={matchesMD ? "center" : "stretch"}
                        direction={matchesMD ? "column" : "row"}
                    >
                        <Grid
                            item
                            container
                            className={classes.itemContainer}
                            style={{ marginBottom: matchesMD ? "15rem" : 0 }}
                            justify={matchesMD ? "center" : "space-between"}
                            md
                        >
                            <Grid
                                item
                                container
                                direction="column"
                                md
                                style={{
                                    textAlign: matchesSM ? "center" : "initial",
                                }}
                            >
                                <Grid item>
                                    <Typography variant="h4">
                                        Digital Documents & Data
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" paragraph>
                                        Reduce Errors. Reduce Waste. Reduce
                                        Costs.
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        Billions are spent annually on the
                                        purchasing, printing, and distribution
                                        of paper. On top of the massive
                                        environmental impact this has, it causes
                                        harm to your bottom line as well.
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        By utilizing digital forms and documents
                                        you can remove these obsolete expenses,
                                        accelerate your communication, and help
                                        the Earth.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item md>
                                {" "}
                                <Lottie
                                    options={documentsOptions}
                                    style={{ maxWidth: 275, maxHeight: 275 }}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            item
                            container
                            className={classes.itemContainer}
                            justify={matchesMD ? "center" : "space-between"}
                            md
                        >
                            <Grid
                                item
                                md
                                style={{ order: matchesSM ? "1" : 0 }}
                            >
                                {" "}
                                <Lottie
                                    options={scaleOptions}
                                    style={{ maxWidth: 260, maxHeight: 280 }}
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                md
                                style={{
                                    textAlign: matchesSM ? "center" : "right",
                                }}
                            >
                                <Grid item>
                                    <Typography variant="h4">
                                        Services
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" paragraph>
                                        Whether you’re a large brand, just
                                        getting started, or taking off right
                                        now, our application architecture
                                        ensures pain-free growth and
                                        reliability.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        justify="center"
                        style={{ marginTop: "20rem", marginBottom: "20rem" }}
                    >
                        <Grid
                            item
                            container
                            direction="column"
                            alignItems="center"
                        >
                            <Grid item>
                                <img
                                    alt="tree with roots extending out"
                                    src={roots}
                                    style={{
                                        width: matchesSM ? 300 : 450,
                                        height: matchesSM ? 300 : 450,
                                    }}
                                />
                            </Grid>
                            <Grid item className={classes.itemContainer}>
                                <Typography variant="h4" align="center">
                                    Root-Cause Analysis
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    align="center"
                                >
                                    Many problems are merely symptoms of larger,
                                    underlying issues.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    align="center"
                                >
                                    We can help you thoroughly examine all areas
                                    of your business to develop a holistic plan
                                    for the most effective implementation of
                                    technology.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    item
                    container
                    justify={matchesMD ? "center" : "space-between"}
                    alignItems={matchesMD ? "center" : "stretch"}
                    direction={matchesMD ? "column" : "row"}
                    style={{ marginBottom: "10rem" }}
                >
                    <Grid
                        item
                        container
                        className={classes.itemContainer}
                        justify={matchesMD ? "center" : "space-between"}
                        style={{ marginBottom: matchesMD ? "15rem" : 0 }}
                        md
                    >
                        <Grid
                            item
                            container
                            direction="column"
                            md
                            style={{
                                textAlign: matchesSM ? "center" : "initial",
                            }}
                        >
                            <Grid item>
                                <Typography variant="h4">Automation</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" paragraph>
                                    Why waste time when you don’t have to?
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We can help you identify processes with time
                                    or event based actions which can now easily
                                    be automated.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {" "}
                                    Increasing efficiency increases profits,
                                    leaving you more time to focus on your
                                    business, not busywork.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item md>
                            {" "}
                            <Lottie
                                options={automationOptions}
                                style={{ maxWidth: 280, maxHeight: 290 }}
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        className={classes.itemContainer}
                        justify={matchesMD ? "center" : "space-between"}
                        md
                    >
                        <Grid item md style={{ order: matchesSM ? "1" : 0 }}>
                            {" "}
                            <Lottie
                                options={uxOptions}
                                style={{ maxWidth: 155, maxHeight: 310 }}
                            />
                        </Grid>
                        <Grid item container direction="column" md>
                            <Grid item>
                                <Typography
                                    variant="h4"
                                    align={matchesSM ? "center" : "right"}
                                >
                                    User Experience Design
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    align={matchesSM ? "center" : "right"}
                                >
                                    A good design that isn’t usable isn’t a good
                                    design.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    align={matchesSM ? "center" : "right"}
                                >
                                    So why are so many pieces of software
                                    complicated, confusing, and frustrating?
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    align={matchesSM ? "center" : "right"}
                                >
                                    By prioritizing users and the real ways they
                                    interact with technology we’re able to
                                    develop unique, personable experiences that
                                    solve problems rather than create new ones.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <CallToAction />
        </>
    );
};

export { CustomSoftware };

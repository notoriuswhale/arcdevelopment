import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Avatar } from "@material-ui/core";

import history from "../assets/history.svg";
import profile from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

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
    header: {
        marginBottom: "7.2rem",
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: "3rem",
        },
    },
    quote: {
        maxWidth: "72rem",
        alignSelf: "center",
        marginBottom: "5.75rem",
        fontSize: "1.3rem",
        color: theme.palette.primary.main,
        fontStyle: "italic",
        fontWeight: 400,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "3rem",
        },
    },
    image: {
        maxWidth: "100%",
    },
    history: {
        marginBottom: "9.8rem",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
            marginBottom: "4rem",
        },
    },
    founderContainer: {
        margin: "auto",
        maxWidth: "120rem",
        padding: "0 4rem",
        marginBottom: "20rem",
        [theme.breakpoints.down("md")]: {
            marginBottom: "15rem",
            padding: "0 5.5rem",
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: "10rem",
            padding: "0 1rem",
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "6rem",
        },
    },
    avatar: {
        width: "20rem",
        height: "20rem",
        marginBottom: "2rem",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            height: "100%",
            maxWidth: "15rem",
            maxHeight: "15rem",
        },
    },
    founderAbout: {
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
        },
    },
    founderItemLeft: {
        textAlign: "right",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            marginBottom: "2rem",
        },
    },
    founderItemRight: {
        textAlign: "right",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
        },
    },
    founderItemText: {
        [theme.breakpoints.down("sm")]: {
            order: "-1",
            marginBottom: "1rem",
        },
    },
}));

const AboutUsPage = (props) => {
    const classes = useStyles();

    return (
        <>
            <Grid
                container
                className={classes.mainContainer}
                direction="column"
            >
                <Typography variant="h2" className={classes.header}>
                    About Us
                </Typography>
                <Typography
                    variant="body1"
                    className={classes.quote}
                    align="center"
                >
                    Whether it be person to person, business to consumer, or an
                    individual to their interests, technology is meant to bring
                    us closer to what we care about in the best way possible.
                    Arc Development will use that principle to provide fast,
                    modern, inexpensive, and aesthetic software to the Midwest
                    and beyond.
                </Typography>
                <Grid
                    item
                    container
                    justify="space-between"
                    alignItems="center"
                    className={classes.history}
                >
                    <Grid item md={6}>
                        <Typography variant="h4" gutterBottom>
                            History
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            We’re the new kid on the block.
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Founded in 2019, we’re ready to get our hands on the
                            world’s business problems.
                        </Typography>
                        <Typography variant="body2" paragraph>
                            It all started with one question: Why aren’t all
                            businesses using available technology? There are
                            many different answers to that question: economic
                            barriers, social barriers, educational barriers, and
                            sometimes institutional barriers.
                        </Typography>
                        <Typography variant="body2" paragraph>
                            We aim to be a powerful force in overcoming these
                            obstacles. Recent developments in software
                            engineering and computing power, compounded by the
                            proliferation of smart phones, has opened up
                            infinite worlds of possibility. Things that have
                            always been done by hand can now be done digitally
                            and automatically, and completely new methods of
                            interaction are created daily. Taking full advantage
                            of these advancements is the name of the game.
                        </Typography>
                        <Typography variant="body2" paragraph>
                            All this change can be a lot to keep up with, and
                            that’s where we come in.
                        </Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img
                            src={history}
                            alt="quill pen sitting on top of book"
                            className={classes.image}
                        />
                    </Grid>
                </Grid>
            </Grid>
            {/*founder*/}
            <Grid
                item
                container
                direction="column"
                alignItems="center"
                className={classes.founderContainer}
            >
                <Typography variant="h4" gutterBottom align="center">
                    Team
                </Typography>
                <Typography variant="body1" paragraph align="center">
                    Zachary Reece, Founder
                </Typography>
                <Typography variant="body1" paragraph align="center">
                    I started coding when I was 9 years old.
                </Typography>
                <Grid item>
                    <Avatar
                        alt="founder"
                        src={profile}
                        className={classes.avatar}
                        imgProps={{ className: classes.image }}
                    />
                </Grid>
                <Grid
                    item
                    container
                    justify="space-between"
                    className={classes.founderAbout}
                >
                    <Grid
                        item
                        sm={12}
                        md={3}
                        className={classes.founderItemLeft}
                    >
                        <Grid item>
                            <img
                                src={yearbook}
                                alt="yearbook page about founder"
                                className={classes.image}
                            />
                        </Grid>
                        <Typography variant="caption">
                            a page from my Sophomore yearbook
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={12}
                        md={5}
                        className={classes.founderItemText}
                    >
                        <Typography variant="body1" align="center" paragraph>
                            I taught myself basic coding from a library book in
                            third grade, and ever since then my passion has
                            solely been set on learning — learning about
                            computers, learning mathematics and philosophy,
                            studying design, always just learning.
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            Now I’m ready to apply everything I’ve learned, and
                            to help others with the intuition I have developed.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={12}
                        md={3}
                        className={classes.founderItemRight}
                    >
                        <Grid item>
                            <img
                                src={puppy}
                                alt="grey spotted puppy"
                                className={classes.image}
                            />
                        </Grid>
                        <Typography variant="caption">
                            my miniature dapple dachshund, Sterling
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <CallToAction />
        </>
    );
};

export { AboutUsPage };

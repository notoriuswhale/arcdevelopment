import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ButtonArrow from "./ButtonArrow";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    learnBtn: {
        ...theme.typography.learnBtn,
        fontSize: "0.7rem",
        height: 35,
        padding: "5px 10px",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2rem",
        },
    },
    callContainer: {
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "75vh",
        minHeight: "40rem",
        padding: "9rem",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            padding: "4rem",
        },
        [theme.breakpoints.down("sm")]: {
            backgroundImage: `url(${mobileBackground})`,
            padding: "1rem",
            backgroundAttachment: "initial",
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
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
}));

const CallToAction = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid
            container
            className={classes.callContainer}
            // direction={matchesSM ? "column" : "row"}
            alignItems={"center"}
            alignContent={"center"}
            justify={matchesSM ? "center" : "flex-end"}
        >
            <Grid
                item
                xs={12}
                md={6}
                lg={4}
                style={{ textAlign: matchesSM ? "center" : "inherit" }}
            >
                <Typography variant="h2">
                    Simple software.
                    <br /> Revolutionary Results.
                </Typography>
                <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                    Take advantage of <br /> 21st Century
                </Typography>
                <Button
                    variant="outlined"
                    className={classes.learnBtn}
                    component={Link}
                    to="/revolution"
                >
                    <span style={{ marginRight: "5px" }}>Learn More</span>
                    <ButtonArrow
                        fill={theme.palette.common.blue}
                        width="15"
                        height="15"
                    />
                </Button>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                style={{ textAlign: matchesSM ? "center" : "right" }}
            >
                <Button
                    className={classes.estimateBtn}
                    component={Link}
                    to="/estimate"
                >
                    Free Estimate
                </Button>
            </Grid>
        </Grid>
    );
};

export { CallToAction };

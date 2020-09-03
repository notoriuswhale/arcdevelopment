import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import ButtonArrow from "./ButtonArrow";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    left: {
        paddingLeft: "5rem",
    },
    right: {
        paddingRight: "5rem",
        // textAlign: "right",
    },
    center: {
        textAlign: "center",
    },
    subtitle: {
        marginBottom: "1rem",
    },
    learnBtn: {
        ...theme.typography.learnBtn,
        fontSize: "0.7rem",
        height: 35,
        padding: "7px 15px",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2rem",
        },
    },
    icon: {
        marginLeft: "2rem",
        width: "12em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
            "max-width": "100%",
        },
    },
    textConteiner: {
        width: "35rem",
        [theme.breakpoints.down("sm")]: {
            width: "auto",
        },
    },
}));

const ServiceItem = (props) => {
    const { header, subtitle1, subtitle2, imageSrc, justify, center } = props;
    const theme = useTheme();
    const classes = useStyles();

    return (
        <Grid
            container
            justify={center ? "center" : justify}
            direction={center ? "column" : "row"}
            className={
                center
                    ? classes.center
                    : justify === "flex-end"
                    ? classes.right
                    : classes.left
            }
        >
            <Grid item className={classes.textConteiner}>
                <Typography variant="h4">{header}</Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                    {subtitle1}
                </Typography>
                <Typography variant="subtitle1">{subtitle2}</Typography>
                <Button
                    variant="outlined"
                    className={classes.learnBtn}
                    component={Link}
                    to={props.href}
                >
                    <span style={{ marginRight: "10px" }}>Learn More</span>
                    <ButtonArrow
                        fill={theme.palette.primary.main}
                        width="10"
                        height="10"
                    />
                </Button>
            </Grid>
            <Grid item>
                <img className={classes.icon} alt="" src={imageSrc} />
            </Grid>
        </Grid>
    );
};

export { ServiceItem };

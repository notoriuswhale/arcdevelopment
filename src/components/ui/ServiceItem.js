import React from "react";

import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import ButtonArrow from "./ButtonArrow"


const useStyles = makeStyles(theme => ({
    // serviceContainer: {
    //     marginTop: "8rem",
    //     [theme.breakpoints.down("sm")]: {
    //         marginTop: "5rem",
    //         padding: "1rem",
    //     }
    // },
    serviceTextContainer: {

    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.secondary.main
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
        }
    },
    icon: {
        marginLeft: "2rem",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        },
    },
}));

const ServiceItem = (props) => {
    const {header, subtitle1, subtitle2, imageSrc, justify} = props
    const theme = useTheme();
    const classes = useStyles();

    return (
        <Grid container className={"asdfafsd"/*classes.serviceContainer*/} justify={justify}>
        <Grid item style={{textAlign: justify==='flex-end' ? "right" : "initial" }}>
            <Typography variant="h4">
            {header}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
                {subtitle1}
            </Typography>
            <Typography variant="subtitle1">
                {subtitle2}
            </Typography>
            <Button variant="outlined" className={classes.learnBtn}>
                <span style={{ marginRight: "10px" }}>Learn More</span>
                <ButtonArrow fill={theme.palette.primary.main} width="10" height="10" />
            </Button>
        </Grid>
        <Grid item>
            <img className={classes.icon} alt="" src={imageSrc} />
        </Grid>
    </Grid>
    );
}

export {ServiceItem}
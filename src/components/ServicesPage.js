import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { ServiceItem } from "./ui/ServiceItem";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.secondary.main,
    },
    servicesContainer: {
        marginTop: "2rem",
        marginBottom: "5rem",
        [theme.breakpoints.down("sm")]: {
            marginTop: "1rem",
            marginBottom: "4rem",
        },
    },
    serviceContainer: {
        marginTop: "8rem",
        [theme.breakpoints.down("sm")]: {
            marginTop: "5rem",
            padding: "1rem",
        },
    },
    serviceHeader: {
        paddingLeft: "5rem",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "0",
            textAlign: "center",
        },
    },
}));

const ServicesPage = (props) => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid
            container
            direction="column"
            className={classes.servicesContainer}
        >
            <Grid item className={classes.serviceHeader}>
                <Typography variant="h2" gutterBottom>
                    Services
                </Typography>
            </Grid>

            {/*iOS/Android Developmnt*/}
            <Grid
                item
                className={classes.serviceContainer}
                style={{ marginTop: "0" }}
            >
                <ServiceItem
                    header="iOS/Android App Development"
                    subtitle1="Extend functionality. Extend Access. Increase engagement."
                    subtitle2={
                        <>
                            Integrate your web expirience or create a standalone
                            app {matchesSM ? null : <br />} with either mobile
                            platform.
                        </>
                    }
                    justify="flex-end"
                    center={matchesSM}
                    imageSrc={mobileAppsIcon}
                />
            </Grid>

            {/*Custom Software Developmnt*/}
            <Grid item className={classes.serviceContainer}>
                <ServiceItem
                    header="Custom Software Development"
                    subtitle1="Save Energy. Save Time. Save Money."
                    subtitle2={
                        <>
                            Complete digital solutions, from investigation to{" "}
                            <span className={classes.specialText}>
                                selebration.
                            </span>
                        </>
                    }
                    center={matchesSM}
                    imageSrc={customSoftwareIcon}
                />
            </Grid>

            {/*Website Developmnt*/}
            <Grid item className={classes.serviceContainer}>
                <ServiceItem
                    header="Website Development"
                    subtitle1="Reach more. Discover more. Sell more."
                    subtitle2="Optimized for Search Engines, build for speed."
                    center={matchesSM}
                    justify="flex-end"
                    imageSrc={websiteIcon}
                />
            </Grid>
        </Grid>
    );
};

export { ServicesPage };

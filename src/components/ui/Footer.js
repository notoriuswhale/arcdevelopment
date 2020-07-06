import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import {Link} from "react-router-dom";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg"
import instagramm from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: theme.zIndex.modal + 1,
        position: "relative"
    },
    adornment: {
        width: "20rem",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "17rem"
        },
        [theme.breakpoints.down("sm")]: {
            width: "15rem"
        }
    },
    mainContainer: {
        position: "absolute",
    },
    gridItem: {
        margin: "2rem"
    },
    link: {
        fontFamily: "Arial",
        fontSize: "0.75rem",
        color: "white",
        fontWeight: "bold",
        textDecoration: "none",
    },
    iconContainer: {
        width: "auto",
        position: "absolute",
        bottom: "2rem",
        right: "2rem",
        [theme.breakpoints.down("xs")]:{
            right: "1rem",
            bottom: "1rem",
        }
    },
    icon: {
        width: "4rem",
        height: "4rem",
        [theme.breakpoints.down("xs")]:{
            width: "2.5rem",
            height: "2.5rem",
        }
    },
}))

const Footer = ({value, setValue, selectedMenuItem, setSelectedMenuItem, ...props}) => {
    const classes = useStyles();

    const links = [[{name: "Home", location: "/", activeIndex: 0}],
        [{name: "Services", location: "/services", activeIndex: 1, selectedIndex: 0},
            {name: "Custom Software Development", location: "/customsoftware", activeIndex: 1, selectedIndex: 1},
            {name: "Mobile App Development", location: "/mobileapps", activeIndex: 1, selectedIndex: 2},
            {name: "Website Development", location: "/website", activeIndex: 1, selectedIndex: 3}],
        [{name: "The Revolution", location: "/revolution", activeIndex: 2, selectedIndex: 0},
            {name: "Vision", location: "/revolution", activeIndex: 2, selectedIndex: 1},
            {name: "Technology", location: "/revolution", activeIndex: 2, selectedIndex: 2},
            {name: "Process", location: "/revolution", activeIndex: 2, selectedIndex: 3}],
        [{name: "About Us", location: "/about", activeIndex: 3, selectedIndex: 0},
            {name: "Mission Statement", location: "/about", activeIndex: 3, selectedIndex: 1},
            {name: "History", location: "/about", activeIndex: 3, selectedIndex: 2},
            {name: "Team", location: "/about", activeIndex: 3, selectedIndex: 3}],
        [{name: "Contact Us", location: "/contact", activeIndex: 4}],]

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container className={classes.mainContainer} justify="center">
                    {links.map((v, i) => (
                        <Grid item className={classes.gridItem} key={i}>
                            <Grid container direction="column" spacing={2}>
                                {v.map(link => <Grid item className={classes.link}
                                                     onClick={() => {
                                                         setValue(link.activeIndex);
                                                         if (link.selectedIndex) setSelectedMenuItem(link.selectedIndex);
                                                     }}
                                                     component={Link} to={link.location}
                                                     key={link.name}>{link.name}</Grid>)}
                            </Grid>
                        </Grid>))
                    }

                </Grid>
            </Hidden>
            <Grid container className={classes.iconContainer} justify="flex-end" spacing={2}>
                <Grid item component="a" href="https:/facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="facebook" className={classes.icon}/>
                </Grid>
                <Grid item component="a" href="https:/instagramm.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramm} alt="instagramm" className={classes.icon}/>
                </Grid>
                <Grid item component="a" href="https:/twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="twitter" className={classes.icon}/>
                </Grid>
            </Grid>
            <img src={footerAdornment} alt="black footer adornment" className={classes.adornment}/>
        </footer>
    );
}

export {Footer}
import React, {useState, useEffect} from "react";
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/styles"
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import {Link} from "react-router-dom"

import logo from "../../assets/logo.svg";
import {Button} from "@material-ui/core";


function ElevationScroll(props) {
    const {children} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.modal + 1,
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3rem",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2rem",
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: "1.5rem"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "2rem"
        }
    },
    logo: {
        height: "7rem",
        [theme.breakpoints.down("md")]: {
            height: "6rem",
        },
        [theme.breakpoints.down("sm")]: {
            height: "5.5rem"
        }
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    tabsContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
    },
    button: {
        ...theme.typography.estimate,
        marginLeft: "25px",
        marginRight: "50px",
        borderRadius: "50px",
        height: "45px"

    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        borderRadius: 0,
    },
    menuItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: "0.7",
        "&:hover": {
            opacity: "1"
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent",
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawer: {
        backgroundColor: theme.palette.common.blue,
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    },
    drawerItemActive: {
        "& .MuiListItemText-root": {
            opacity: 1,
        },
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
}));

const menuOptions = [
    {name: "Services", location: "/services", activeIndex: 1, selectedIndex: 0},
    {name: "Custom Software Development", location: "/customsoftware", activeIndex: 1, selectedIndex: 1},
    {name: "Mobile App Development", location: "/mobileapps", activeIndex: 1, selectedIndex: 2},
    {name: "Website Development", location: "/website", activeIndex: 1, selectedIndex: 3}];


function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setValue] = useState(0);
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const handleChange = (e, value) => {
        setValue(value);
    }

    const handleMenuItemClick = (e, i) => {
        setSelectedMenuItem(i);
        setAnchorEl(null);
        setValue(1);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const routes = [
        {name: "Home", location: "/", activeIndex: 0},
        {
            name: "Services", location: "/services", activeIndex: 1,
            props: {"aria-controls": "simple-menu", "aria-haspopup": "true", onMouseOver: handleClick}
        },
        {name: "The Revolution", location: "/revolution", activeIndex: 2},
        {name: "About Us", location: "/about", activeIndex: 3},
        {name: "Contact Us", location: "/contact", activeIndex: 4},
        {
            name: "Free Estimate",
            location: "/estimate",
            activeIndex: 5,
            tabInvisible: true,
            props: {className: classes.drawerItemEstimate}
        }];

    useEffect(() => {
        [...routes, ...menuOptions].forEach((route) => {
            switch (window.location.pathname) {
                case route.location:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex);
                        if (route?.selectedIndex !== selectedMenuItem) {
                            setSelectedMenuItem(route.selectedIndex);
                        }
                    }
                    break;
                default:
                    break;
            }
        });
    }, [value, selectedMenuItem, routes])

    const tabs = (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange} className={classes.tabsContainer} indicatorColor="primary">

                {routes.map((route, i) => {
                    if (!route.tabInvisible) {
                        return <Tab className={classes.tab} component={Link}
                                    to={route.location} label={route.name} {...route.props}
                                    key={route.name}/>
                    } else return null;
                })}
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/estimate">Free Estimate</Button>
            <Menu id="simple-menu" anchorEl={anchorEl}
                  onClose={handleClose}
                  open={Boolean(anchorEl)}
                  classes={{paper: classes.menu}}
                  elevation={0}
                  style={{zIndex: "1302"}}
                  MenuListProps={{onMouseLeave: handleClose}}>
                {menuOptions.map((option, i) => (
                    <MenuItem onClick={(e) => handleMenuItemClick(e, i)}
                              classes={{root: classes.menuItem}}
                              component={Link}
                              to={option.location}
                              selected={i === selectedMenuItem && value === 1}
                              key={option.name}>{option.name}</MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS}
                             disableDiscovery={iOS}
                             open={openDrawer} onClose={() => setOpenDrawer(false)}
                             onOpen={() => setOpenDrawer(true)}
                             classes={{paper: classes.drawer}}>
                <div className={classes.toolbarMargin}/>
                <List disablePadding>
                    {routes.map((route, i) => (
                        <ListItem button divider component={Link} to={route.location} key={route.name}
                                  classes={{selected: classes.drawerItemActive}}
                                  selected={i === value} onClick={() => {
                            setOpenDrawer(false);
                            setValue(i);
                        }
                        } {...route.props} >
                            <ListItemText
                                className={classes.drawerItem}
                                disableTypography>{route.name}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(true)} disableRipple className={classes.drawerIconContainer}>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar className={classes.appBar} position="fixed">
                    <Toolbar disableGutters>
                        <Button className={classes.logoContainer} disableRipple component={Link} to="/"
                                onClick={() => setValue(0)}><img src={logo} alt="company logo"
                                                                 className={classes.logo}/></Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </React.Fragment>

    );
}

export {Header}
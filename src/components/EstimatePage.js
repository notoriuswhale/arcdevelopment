import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Typography,
    IconButton,
    Button,
    DialogContent,
    Dialog,
    useMediaQuery,
} from "@material-ui/core";
import Lottie from "react-lottie";
import { cloneDeep } from "lodash";

import {
    defaultQuestions,
    softwareQuestions,
    websiteQuestions,
} from "../questions";

import estimateAnimation from "../animations/estimateAnimation/data.json";
import backArrow from "../assets/backArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import { useTheme } from "@material-ui/styles";
import { ContactForm } from "./ui/ContactForm";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        padding: "3.5rem 4rem",
        maxWidth: "120rem",
        margin: "auto",
        [theme.breakpoints.down("md")]: {
            padding: "2.5rem 3rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "2rem 1rem",
        },
    },
    animation: {
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30rem",
        },
    },
    header: {
        marginBottom: "7.5rem",
        [theme.breakpoints.down("md")]: {
            marginBottom: "5rem",
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: "3rem",
        },
    },
    subHeader: {
        fontWeight: 500,
        fontSize: "2.25rem",
        lineHeight: 1.25,
        textAlign: "center",
    },
    options: {
        marginBottom: "4rem",
    },
    optionItem: {
        // padding: "0 1.75rem",
        // "&:last-child": {
        //     paddingRight: "0",
        // },
        // "&:first-child": {
        //     paddingLeft: "0",
        // },
        textAlign: "center",
        padding: "28px",
        borderRadius: 0,
        textTransform: "none",
        [theme.breakpoints.down("sm")]: {
            // padding: "0",
        },
        "& .MuiButton-label": {
            flexDirection: "inherit",
            height: "100%",
            // alignItems: "inherit",
            // justifyContent: "inherit",
        },
    },
    optionHeader: {
        lineHeight: 1,
    },
    optionSubHeader: {
        marginBottom: "1.8rem",
    },
    image: {
        // maxWidth: "100%",
        // maxHeight: "7.2rem",
        fill: theme.palette.primary.main,
        width: "12em",
        height: "10em",
        [theme.breakpoints.down("sm")]: {
            width: "8em",
            height: "6.67em",
        },
    },
    navigation: {
        maxWidth: "16rem",
        marginBottom: "4em",
        // margin: "auto",
    },
    estimateBtn: {
        ...theme.typography.estimate,
        fontSize: "1.75rem",
        padding: "0.5rem 1rem",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "50px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    specialText: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize: "2rem",
        color: theme.palette.common.orange,
    },
    dialogItem: {
        padding: "1rem",
    },
    dialogForm: {
        maxWidth: "25rem",
    },
    dialogDescription: {
        [theme.breakpoints.down("xs")]: {
            order: -1,
        },
    },
}));

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const EstimatePage = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const [questions, setQuestions] = useState(defaultQuestions);
    const [total, setTotal] = useState(0);
    const [dialogOpen, setDialogOpen] = useState(false);

    const nextQuestion = () => {
        const newQuestions = cloneDeep(questions);

        const currentlyActive = newQuestions.filter(
            (question) => question.active
        );
        const activeIndex = currentlyActive[0].id - 1;

        newQuestions[activeIndex].active = false;
        newQuestions[activeIndex + 1].active = true;
        setQuestions(newQuestions);
    };
    const previousQuestion = () => {
        const newQuestions = cloneDeep(questions);

        const currentlyActive = newQuestions.filter(
            (question) => question.active
        );
        const activeIndex = currentlyActive[0].id - 1;

        newQuestions[activeIndex].active = false;
        newQuestions[activeIndex - 1].active = true;
        setQuestions(newQuestions);
    };
    const previousDisabled = () => {
        const currentlyActive = questions.filter((question) => question.active);
        if (currentlyActive[0].id === 1) {
            return true;
        } else return false;
    };
    const nextDisabled = () => {
        const currentlyActive = questions.filter((question) => question.active);
        if (currentlyActive[0].id === questions[questions.length - 1].id) {
            return true;
        } else return false;
    };
    const estimateDisabled = () => {
        let disabled = true;

        const emptySelections = questions
            .map((question) =>
                question.options.filter((option) => option.selected)
            )
            .filter((question) => question.length === 0);

        if (questions.length === 2) {
            if (emptySelections.length === 1) {
                return false;
            }
        } else if (questions.length === 1) {
            return true;
        } else {
            if (
                emptySelections.length < 3 &&
                questions[questions.length - 1].options.filter(
                    (option) => option.selected
                ).length > 0
            ) {
                return false;
            }
        }

        return disabled;
    };

    const onSelect = (index) => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(
            (question) => question.active
        )[0];
        const activeIndex = currentlyActive.id - 1;

        switch (currentlyActive.options[index].title) {
            case "Custom Software Development":
                return setQuestions(softwareQuestions);
            case "iOS/Android App Development":
                return setQuestions(softwareQuestions);
            case "Website Development":
                return setQuestions(websiteQuestions);
            default:
                break;
        }

        switch (currentlyActive.subtitle) {
            case "Select all that apply.":
                newQuestions[activeIndex].options[index].selected = !questions[
                    activeIndex
                ].options[index].selected;
                break;
            case "Select one.":
                newQuestions[activeIndex].options.forEach((option, i) => {
                    if (i === index) option.selected = true;
                    else option.selected = false;
                });
                break;
            default:
                break;
        }

        setQuestions(newQuestions);
    };

    const getTotal = () => {
        let cost = 0;

        const selections = questions
            .map((question) =>
                question.options.filter((option) => option.selected)
            )
            .filter((question) => question.length > 0);

        selections.map((options) =>
            options.map((option) => (cost += option.cost))
        );

        if (questions.length > 2) {
            const userCost = questions
                .filter(
                    (question) =>
                        question.title === "How many users do you expect?"
                )
                .map((question) =>
                    question.options.filter((option) => option.selected)
                )[0][0];

            cost -= userCost.cost;
            cost *= userCost.cost;
        }

        setTotal(cost);
    };

    return (
        <>
            <Grid
                container
                className={classes.mainContainer}
                justify="space-between"
            >
                <Grid
                    item
                    md={4}
                    lg={4}
                    xl={4}
                    container
                    direction="column"
                    alignItems="center"
                >
                    <Grid item style={{ width: "100%" }}>
                        <Typography variant="h2" className={classes.header}>
                            Estimate
                        </Typography>
                    </Grid>
                    <Grid item className={classes.animation}>
                        <Lottie options={defaultOptions} />
                    </Grid>
                </Grid>
                <Grid
                    item
                    md={7}
                    lg={7}
                    xl={6}
                    container
                    direction="column"
                    alignItems="center"
                >
                    {questions
                        .filter((v) => v.active)
                        .map((question) => (
                            <React.Fragment key={question.id}>
                                <Grid item className={classes.header}>
                                    <Typography
                                        variant="h2"
                                        className={classes.subHeader}
                                    >
                                        {question.title}
                                    </Typography>
                                    <Typography variant="body1" align="center">
                                        {question.subtitle}
                                    </Typography>
                                </Grid>
                                <Grid container className={classes.options}>
                                    {question.options.map((option, i) => (
                                        <Grid
                                            key={option.title}
                                            item
                                            sm={4}
                                            container
                                            justify="space-between"
                                            className={classes.optionItem}
                                            direction="column"
                                            component={Button}
                                            onClick={() => onSelect(i)}
                                            style={{
                                                backgroundColor: option.selected
                                                    ? theme.palette.secondary
                                                          .main
                                                    : "initial",
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                className={classes.optionHeader}
                                            >
                                                {option.title}
                                            </Typography>
                                            <Typography
                                                className={
                                                    classes.optionSubHeader
                                                }
                                                variant="body1"
                                            >
                                                {option.subtitle}
                                            </Typography>
                                            {/* <svg
                                                viewBox="0 0 100 100"
                                                className={classes.image}
                                            >
                                                <title>{option.iconAlt}</title>
                                                <use
                                                    href={
                                                        sprite +
                                                        "#" +
                                                        option.icon
                                                    }
                                                ></use>
                                            </svg> */}
                                            {
                                                <option.icon
                                                    className={classes.image}
                                                />
                                            }
                                        </Grid>
                                    ))}
                                </Grid>
                            </React.Fragment>
                        ))}

                    <Grid
                        item
                        container
                        justify="space-between"
                        className={classes.navigation}
                    >
                        <Grid item>
                            <IconButton
                                onClick={previousQuestion}
                                disabled={previousDisabled()}
                            >
                                <img
                                    src={
                                        previousDisabled()
                                            ? backArrowDisabled
                                            : backArrow
                                    }
                                    alt="Previous question"
                                />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={nextQuestion}
                                disabled={nextDisabled()}
                            >
                                <img
                                    src={
                                        nextDisabled()
                                            ? forwardArrowDisabled
                                            : forwardArrow
                                    }
                                    alt="Previous question"
                                />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            className={classes.estimateBtn}
                            disabled={estimateDisabled()}
                            onClick={() => {
                                setDialogOpen(true);
                                getTotal();
                            }}
                        >
                            Get Estimate
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                fullWidth
                maxWidth="lg"
                style={{ zIndex: 1302 }}
                fullScreen={matchesSM}
            >
                <Typography
                    variant="h2"
                    align="center"
                    style={{ margin: "1rem 0" }}
                >
                    Estimate
                </Typography>
                <DialogContent>
                    <Grid container justify="center">
                        <Grid
                            item
                            container
                            justify="center"
                            xs={12}
                            sm={6}
                            md={7}
                            className={[classes.dialogItem].join(" ")}
                        >
                            <ContactForm
                                buttonContext="Place Request"
                                messagePlaceholder="Tell us more about your project."
                                closeDialog={() => setDialogOpen(false)}
                                className={classes.dialogForm}
                            ></ContactForm>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={5}
                            className={[
                                classes.dialogItem,
                                classes.dialogDescription,
                            ].join(" ")}
                        >
                            <Typography
                                variant="body1"
                                paragraph
                                align={matchesSM ? "center" : undefined}
                                style={{ lineHeight: 1.1 }}
                            >
                                We can create this digital solution for an
                                estimated{" "}
                                <span className={classes.specialText}>
                                    ${total.toFixed(2)}
                                </span>
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                align={matchesSM ? "center" : undefined}
                            >
                                Fill out your name, number, and email, place
                                your request, and we’ll get back to you with
                                details moving forward and a final price.
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
};

export { EstimatePage };

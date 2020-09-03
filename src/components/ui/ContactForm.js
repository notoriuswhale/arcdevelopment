import * as React from "react";
import { useFormik } from "formik";
import {
    Button,
    LinearProgress,
    makeStyles,
    Snackbar,
    Grid,
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import sendIcon from "../../assets/send.svg";

const useStyles = makeStyles((theme) => ({
    formInput: {
        marginBottom: "1rem",
    },
    message: {
        marginTop: "3.125rem",
        marginBottom: "2rem",
    },
    submitBtn: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "50px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
}));

const ContactForm = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [submitResult, setSubmitResult] = React.useState({
        message: "",
        color: "",
    });
    const formik = useFormik({
        initialValues: {
            name: "",
            number: "",
            email: "",
            message: "",
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = "Required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = "Invalid email address";
            }
            if (!values.name) {
                errors.name = "Required";
            }
            if (!values.number) {
                errors.number = "Required";
            }
            if (!values.message) {
                errors.message = "Required";
            }
            return errors;
        },
        onSubmit: (values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
                setSubmitting(false);
                setSubmitResult({
                    message: "Message sent Successfully",
                    color: "forestgreen",
                });
                resetForm();
                setOpen(true);
            }, 500);
        },
    });

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    return (
        <Grid
            container
            direction="column"
            component="form"
            className={props.className}
        >
            <Grid item className={classes.formInput}>
                <TextField
                    disabled={formik.isSubmitting}
                    name="name"
                    type="text"
                    label="Name"
                    fullWidth
                    error={Boolean(formik.errors.name && formik.touched.name)}
                    helperText={
                        formik.errors.name &&
                        formik.touched.name &&
                        formik.errors.name
                    }
                    {...formik.getFieldProps("name")}
                />
            </Grid>
            <Grid item className={classes.formInput}>
                <TextField
                    disabled={formik.isSubmitting}
                    name="number"
                    type="text"
                    label="Number"
                    fullWidth
                    error={Boolean(
                        formik.errors.number && formik.touched.number
                    )}
                    helperText={
                        formik.errors.number &&
                        formik.touched.number &&
                        formik.errors.number
                    }
                    {...formik.getFieldProps("number")}
                />
            </Grid>
            <Grid item className={classes.formInput}>
                <TextField
                    disabled={formik.isSubmitting}
                    name="email"
                    type="email"
                    label="Email"
                    error={Boolean(formik.errors.email && formik.touched.email)}
                    helperText={
                        formik.errors.email &&
                        formik.touched.email &&
                        formik.errors.email
                    }
                    fullWidth
                    {...formik.getFieldProps("email")}
                />
            </Grid>
            <Grid item className={classes.message}>
                <TextField
                    disabled={formik.isSubmitting}
                    name="message"
                    type="message"
                    placeholder={
                        props.messagePlaceholder || "Type Your Message"
                    }
                    multiline
                    variant="outlined"
                    rows={8}
                    fullWidth
                    error={Boolean(
                        formik.errors.message && formik.touched.message
                    )}
                    helperText={
                        formik.errors.message &&
                        formik.touched.message &&
                        formik.errors.message
                    }
                    {...formik.getFieldProps("message")}
                />
            </Grid>

            {formik.isSubmitting && <LinearProgress />}
            <br />
            <Grid item style={{ alignSelf: "center" }}>
                {props.closeDialog && (
                    <Button onClick={props.closeDialog}> Close</Button>
                )}
                <Button
                    className={classes.submitBtn}
                    variant="contained"
                    onClick={formik.submitForm}
                    disabled={
                        Object.keys(formik.errors).length !== 0 ||
                        Object.keys(formik.touched).length === 0 ||
                        formik.isSubmitting
                    }
                >
                    {props.buttonContext || "Send Message"}
                    <img
                        src={sendIcon}
                        alt="paper airplane"
                        style={{ marginLeft: "1rem" }}
                    />
                </Button>
            </Grid>
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                ContentProps={{
                    style: {
                        backgroundColor: submitResult.color,
                    },
                }}
                autoHideDuration={4000}
                onClose={handleClose}
                message={submitResult.message}
            />
        </Grid>
    );
};

export { ContactForm };

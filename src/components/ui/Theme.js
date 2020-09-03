import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B6";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

const defaultTheme = createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`,
        },
    },
});

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`,
        },
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            fontSize: "1rem",
            textTransform: "none",
            fontWeight: "700",
        },
        estimate: {
            textTransform: "none",
            fontSize: "1rem",
            fontFamily: "Pacifico",
            color: "white",
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: 1.5,
            [defaultTheme.breakpoints.down("sm")]: {
                fontSize: "1.8rem",
            },
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: arcBlue,
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: arcBlue,
            fontWeight: 700,
        },
        h5: {
            fontFamily: "Roboto",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: arcGrey,
        },
        h6: {
            fontWeight: 500,
            fontSize: "1.25rem",
            fontFamily: "Raleway",
            color: arcBlue,
        },
        subtitle1: {
            fontSize: "1.25rem",
            color: arcGrey,
            fontWeight: 300,
        },
        subtitle2: {
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 300,
        },
        body1: {
            fontSize: "1.25rem",
            color: arcGrey,
            fontWeight: 300,
        },
        body2: {
            fontFamily: "Roboto",
            fontSize: "1.25rem",
            color: arcGrey,
        },
        caption: {
            fontFamily: "Roboto",
            fontSize: "1.25rem",
            color: arcGrey,
        },
        learnBtn: {
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        },
    },
    overrides: {
        MuiFormHelperText: {
            root: {
                fontSize: "0.75rem",
            },
        },
        MuiInputLabel: {
            root: {
                color: arcBlue,
                fontSize: "1rem",
                fontWeight: 500,
                "&.Mui-focused": {
                    color: defaultTheme.palette.secondary.dark,
                },
            },
        },
        MuiInput: {
            root: {
                color: arcGrey,
                fontWeight: 300,
            },
            underline: {
                "&:before": {
                    borderBottom: `2px solid ${arcBlue}`,
                },
                "&:after": {
                    borderBottomColor: defaultTheme.palette.secondary.dark,
                },
                "&.Mui-disabled:before": {
                    borderBottom: `2px solid ${arcGrey}`,
                },
            },
        },

        MuiOutlinedInput: {
            root: {
                color: arcGrey,
                fontWeight: 300,
                marginBottom: "1rem",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: defaultTheme.palette.secondary.dark,
                },
            },
            notchedOutline: {
                borderWidth: "2px",
                borderColor: arcBlue,
            },
        },
    },
    props: {
        MuiTextField: {
            InputLabelProps: {
                shrink: true,
            },
        },
    },
});

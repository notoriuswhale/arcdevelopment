import {createMuiTheme} from "@material-ui/core/styles";

const arcBlue = "#0B72B6";
const arcOrange = "#FFBA60";

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
    }
});
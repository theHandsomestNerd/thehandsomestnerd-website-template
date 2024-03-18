import withStyles from "@mui/styles/withStyles";
import {TextField} from "@mui/material";

const StyledTextField = withStyles({
    root: {
        transition: "all 0.3s ease-in-out",
        "& label": {
            position: "relative",
            fontSize: "16px",
                top: "10px",
            "&:focus": {
            top: "16px",
                position: "relative",
            },
        },
        "& legend": {
            maxWidth: "0px",

        },
        "& input": {
            zIndex: 2
        },
        "& textarea": {
            zIndex: 2
        },

        "& fieldset": {
            "&:focus": {
                position: "relative",
            },
        },

        "& .MuiOutlinedInput-root": {
            borderColor: `#212121 !important`,
            color: "black",
            "&.Mui-focused": {
                borderColor: `#212121 !important`,
                "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: `#212121 !important`
                    }
                }
            },
            "&:hover": {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: `#212121 !important`
                }
            }
        }
    }
})(TextField);

export default StyledTextField
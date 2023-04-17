import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { Children } from "react";

type ThemeProps = {
    children: JSX.Element
}

enum themePalette {
    BG = "#12181b",
    Lime = "#C8FA5F",
    Yellow = "#f1d505",
    FontGlobal = "'JetBrains Mono', monospace",
    //ALERT STYLE
    ErrorMain = "f44336",
    BG_ErrorMain = "rgba(244,67,54,0.1)",
    SuccessMain = "#66bb6a",
    BG_SuccessMain = "rgba(102,187,106,0.1)"
}

const Theme = createTheme({
    palette : {
        mode : "dark",
        background : {
            default: themePalette.BG
        },
        primary : {
            main: themePalette.Yellow
        }
    },
    typography : {
        fontFamily : themePalette.FontGlobal
    },
    components : {
        MuiButton: {
            defaultProps:{
                style:{
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em"
                }
            }
        },
        MuiAlert:{
            defaultProps:{
                style:{
                    borderRadius: "0.8em",
                    fontSize:"1em"
                }
            },
            styleOverrides:{
                standardError:{
                    border: `1px solid ${themePalette.ErrorMain}`,
                    background: themePalette.BG_ErrorMain,
                },
                standardInfo:{
                    border: `1px solid ${themePalette.SuccessMain}`,
                    background: themePalette.BG_SuccessMain
                }
            }
        }
    }
});

export const ThemeConfig : React.FC<ThemeProps> = ({children}) => {
    return(
        <ThemeProvider theme={Theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}
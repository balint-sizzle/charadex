import { ThemeProvider } from "@mui/material";
// import React from "react";

export default function Normal(props) {

    return (
        <ThemeProvider theme={props.theme}>
            <div>
                <h1>Normal</h1>
            </div>
        </ThemeProvider>
    );
}

import * as React from "react";
import { Input, Button, ListItem, DataGrid, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import "./App.css";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Normal from "./components/Normal";

export default function App() {
    const [homePage, setHomePage] = React.useState(true);
    const [normal, setNormal] = React.useState(false);

    const theme = createTheme({
        typography: {
            fontFamily: ["Outfit"].join(","),
            fontSize: 20,
        },
    });

    const goHome = () => {
        setHomePage(true);
        setNormal(false);
    };
    const goNomal = () => {
        setHomePage(false);
        setNormal(true);
    };
    const goTeams = () => {
        setHomePage(false);
        setNormal(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                    <motion.div
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                    />
                </header>
                <body className="App-body">
                    {homePage ? (
                        <Home theme={theme} />
                    ) : normal ? (
                        <Normal theme={theme} />
                    ) : (
                        <Teams theme={theme} />
                    )}
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" onClick={() => goHome()}>
                            Home
                        </Button>
                        <Button variant="contained" onClick={() => goNomal()}>
                            Normal
                        </Button>
                        <Button variant="contained" onClick={() => goTeams()}>
                            Teams
                        </Button>
                    </Stack>
                </body>
                <footer className="App-footer">
                    {/* <Button
                        variant="contained"
                        onClick={() => setDisplayPrompts(!displayPrompts)}
                    >
                        {!displayPrompts ? "Display Prompts" : "Hide Prompts"}
                    </Button>

                    <ScrollView>{renderPrompts()}</ScrollView> */}
                </footer>
                {/* {modal ? (
                    <Modal
                        activeItem={activeItem}
                        toggle={toggle}
                        onSave={handleModalSave}
                    />
                ) : null} */}
            </div>
        </ThemeProvider>
    );
}

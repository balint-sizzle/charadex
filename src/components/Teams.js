import React from "react";
import { ThemeProvider } from "@emotion/react";

export default function Teams(props) {
    const [team1, setTeam1] = React.useState(false);

    return (
        <ThemeProvider theme={props.theme}>
            <div>
                <h1>Teams</h1>
                {/* <form onSubmit={handleSubmit}>
                        <Input
                            color="primary"
                            sx={{ input: { color: "white" } }}
                            id="prompt"
                            type="text"
                            value={input}
                            autoComplete="off"
                            onChange={(e) => setInput(e.target.value)}
                        />
                        {renderPromptLength()}
                        <Button variant="contained" type="submit">
                            submit
                        </Button>
                    </form>
                    <Button variant="contained" onClick={() => (setHomePage(false))}>
                        Get Random Prompt
                    </Button>
                    <Stack spacing={2} direction="row">
                        <Button
                            variant="contained"
                            id="team-select1"
                            style={{
                                fontSize: "100px",
                                minHeight: "50vh",
                                minWidth: "40vw",
                            }}
                        >
                            Team 1
                        </Button>
                        <Button
                            variant="contained"
                            id="team-select"
                            style={{
                                fontSize: "100px",
                                minHeight: "50vh",
                                minWidth: "40vw",
                            }}
                        >
                            Team 2
                        </Button>
                    </Stack>
                    
                */}
            </div>
        </ThemeProvider>
    );
}

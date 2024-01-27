import { ThemeProvider } from "@mui/material";


export default function Home(props) {
    return (
        <ThemeProvider theme={props.theme}>
            <div>
                <h1>CHARADE5</h1>
            </div>
        </ThemeProvider>
    );
}

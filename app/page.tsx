'use client'

import {Sidebar} from "@/components/Sidebar";
import {Feed} from "@/components/Feed";
import {RightBar} from "@/components/Rightbar";
import {Box, createTheme, Stack, ThemeProvider} from "@mui/material";
import {Navbar} from "@/components/Navbar";
import {Add} from "@/components/Add";
import {useState} from "react";

export default function Home() {

    const [mode, setMode] = useState<"dark"|"light">('light')

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        }
    })


    return (
        <ThemeProvider theme={darkTheme}>

        <Box
            bgcolor={'background.default'}
            color={'text.primary'}
        >
            <Navbar/>
            <Stack direction="row" spacing={2} justifyContent="space-evenly">
                <Sidebar mode={mode} setMode={setMode}/>
                <Feed/>
                <RightBar/>
            </Stack>
            <Add/>
        </Box>
        </ThemeProvider>
    );
}

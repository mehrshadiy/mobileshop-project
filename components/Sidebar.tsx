// @flow
import * as React from 'react';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import {AccountBox, Article, Group, Home, ModeNight, Person, Settings} from "@mui/icons-material";
import Link from "next/link";
import {Dispatch, SetStateAction} from "react";

type Props = {
    mode: "dark" | "light"
    setMode: Dispatch<SetStateAction<"dark" | "light">>
}

export const Sidebar = ({mode, setMode}: Props) => {
    return (
        <Box flex={1} p={2}
             sx={{
                 display: {
                     xs: 'none',
                     sm: 'block',
                 }
             }}>
            <Box position="fixed">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} href='/'>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Homepage"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} href='/'>
                        <ListItemIcon>
                            <Article />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} href='/'>
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} href='/'>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} href='/'>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} href='/'>
                        <ListItemIcon>
                            <AccountBox />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        <Switch onChange={
                            ()=> setMode(mode === 'light' ? 'dark' : 'light')
                        }/>
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Box>
    );
};
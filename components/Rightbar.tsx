// @flow
import * as React from 'react';
import {
    Avatar,
    AvatarGroup,
    Box, Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar, ListItemText,
    Typography
} from "@mui/material";
import Image from "next/image";

export const RightBar = () => {
    return (
        <Box flex={2}
             p={2}
             sx={{
                 display: {
                     xs: 'none',
                     sm: 'block',
                 }
             }}
        >
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup max={5}>
                    <Avatar alt="Remy Sharp" src=""/>
                    <Avatar alt="Travis Howard" src=""/>
                    <Avatar alt="Cindy Baker" src=""/>
                    <Avatar alt="Agnes Walker" src=""/>
                    <Avatar alt="Trevor Henderson" src=""/>
                    <Avatar alt="Remy Sharp" src=""/>
                    <Avatar alt="Travis Howard" src=""/>
                    <Avatar alt="Cindy Baker" src=""/>
                    <Avatar alt="Agnes Walker" src=""/>
                    <Avatar alt="Trevor Henderson" src=""/>
                </AvatarGroup>

                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Latest Photos
                </Typography>

                <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <Image
                            src={`/wallpaperemood(105).jpg`}
                            width={2160}
                            height={3840}
                            alt={''}
                            loading="lazy"
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <Image
                            src={`/wallpaperemood(105).jpg`}
                            width={2160}
                            height={3840}
                            alt={''}
                            loading="lazy"
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <Image
                            src={`/wallpaperemood(105).jpg`}
                            width={2160}
                            height={3840}
                            alt={''}
                            loading="lazy"
                        />
                    </ImageListItem>

                </ImageList>

                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Latest Conversations
                </Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};
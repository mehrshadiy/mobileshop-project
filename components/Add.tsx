'use client'
import * as React from 'react';
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {
    Add as AddIcon, DateRange,
    EmojiEmotions,
    Image as ImageIcon,
    PersonAdd,
    VideoCameraBack
} from "@mui/icons-material";
import {useState} from "react";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

const UserBox = styled(Box)(
    ({}) => ({
        display: "flex",
        gap: '10px',
        alignItems: 'center',
        marginBottom: '20px',
    })
)


export function Add() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip title="Delete"
                     onClick={() => {
                         setOpen(true)
                     }}
                     sx={{
                         position: "fixed",
                         bottom: 20,
                         left: {xs: 'calc(50% - 20px)', md: 30},
                     }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon/>
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={400}
                    height={280}
                    p={3}
                    borderRadius={5}
                    bgcolor={'background.default'}
                    color={'text.primary'}
                >
                    <Typography variant={"h6"} color={'gray'} textAlign={'center'}>
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src={''}
                            sx={{
                                width: 30,
                                height: 30,
                            }}
                        />
                        <Typography fontWeight={500}>
                            John Doe
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{
                            width: '100%',
                        }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="Whats on your mind?"
                        variant="standard"
                    />
                    <Stack direction={"row"} gap={1} mt={2} mb={3}>
                        <EmojiEmotions color={"primary"}/>
                        <ImageIcon color={"secondary"}/>
                        <VideoCameraBack color={"success"}/>
                        <PersonAdd color={"error"}/>
                    </Stack>
                    <ButtonGroup
                        variant="contained"
                        aria-label="Basic button group"
                        fullWidth
                    >
                        <Button>
                            Post
                        </Button>
                        <Button
                            sx={{
                                width: "100px",
                            }}
                        >
                            <DateRange/>
                        </Button>
                    </ButtonGroup>

                </Box>
            </StyledModal>
        </>
    )
}
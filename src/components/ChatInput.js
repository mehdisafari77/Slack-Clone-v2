import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material';


function ChatInput(channelName, channelId) {

    const sendMessage = e => {
        e.preventDefault(); // Prevents refresh
    }

    return (
        <chatInputContainer>
            <form>
                <input placeholder={`Message #ROOM`} />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </chatInputContainer>
    )
}

export default ChatInput

const chatInputContainer = styled.div``;

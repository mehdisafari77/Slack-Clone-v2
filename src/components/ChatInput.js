import React, { useRef } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material';
import { db } from '../firebase'
import firebase from 'firebase'


function ChatInput(channelName, channelId) {
    const inputRef = useRef(null);

    const sendMessage = e => {
        e.preventDefault(); // Prevents refresh

        if (channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: inputRef.current.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    return (
        <ChatInputContainer>
            <form>
                <input  ref={inputRef} placeholder={`Message #ROOM`} />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 40px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;

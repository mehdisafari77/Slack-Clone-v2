import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material';
import { auth, db } from "../firebase";
import firebase from 'firebase'
import { useAuthState } from "react-firebase-hooks/auth";


function ChatInput({ channelName, channelId, chatRef }) {
    const [input, setInput] = useState("");
    const [user] = useAuthState(auth);
  
    const sendMessage = (e) => {
      e.preventDefault();
      console.log(channelId);
  
      if (!channelId) {
        return false;
      }
  
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: 'Mehdi',
        userImage: 'https://pbs.twimg.com/profile_images/1339192504382590976/2WxMn8cm_400x400.jpg',
      });
  
      chatRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
      setInput("");
    };
    return (
      <ChatInputContainer>
        <form>
          <input
            placeholder={`Message #${channelName}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <Button hidden type="submit" onClick={sendMessage}>
            SEND
          </Button>
        </form>
      </ChatInputContainer>
    );
  }
  
  export default ChatInput;
  
  const ChatInputContainer = styled.div`
    border-radius: 20px;
  
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
  
import React from "react";
import styled from 'styled-components'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Header() {
    const [user] = useAuthState(auth);

    return (
        <HeaderContaner>

            <HeaderLeft>
                <HeaderAvatar
                   alt={user?.displayName}
                   src={user?.photoURL}
                />
                <p
                    onClick={() => auth.signOut()}
                >Logout
                </p>
                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search..." />
            </HeaderSearch>

            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContaner>
    )
}

export default Header;

const HeaderContaner = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: var(--slack-color);
    padding: 10px 0;
    color: white;
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }

    > p {
        margin-left: 10px;
        font-size: 15px;
        padding: 5px;
        border: 1px solid gray;
        border-radius: 15px;
        background-color: gray;

        :hover {
            opacity: 0.8;
        }
    }
`;

const HeaderSearch = styled.div`
    display: flex;
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`;

const HeaderRight = styled.div`
    display: flex;
    flex: 0.3;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;


const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;


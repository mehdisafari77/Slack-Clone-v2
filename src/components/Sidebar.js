import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Mehdi HQ</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Mehdi Safari
                    </h3>
                </SidebarInfo>
            </SidebarHeader>
        </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`

`;

const SidebarHeader = styled.div`

`;

const SidebarInfo = styled.div`

`;
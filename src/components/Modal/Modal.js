import React from 'react';
import styled from 'styled-components';

const HORIZONTAL_GAP = '20px';
const VERTICAL_GAP = '20px';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CloseButton = styled.button`
    background: transparent;
    position: absolute;
    padding: 10px;
    outline: 0;
    border: 0;
    right: ${HORIZONTAL_GAP};
    top: ${VERTICAL_GAP};
    color: gray;
    font-size: 50px;
    cursor: pointer;
    &: hover{
        color: lightgray;
    }
`;

const Body = styled.div``;

const Model = ({
    onClose,
    page
}) => {
    return(
        <Overlay>
            <Body>{page}</Body>
            <CloseButton onClick = {onClose}>X</CloseButton>
        </Overlay>
    )
}
export default Model;
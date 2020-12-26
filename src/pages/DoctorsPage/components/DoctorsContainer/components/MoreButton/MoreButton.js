import React from 'react';
import styled from 'styled-components';
import { THEME_COLOR } from "../../../../../../constants";


const Button = styled.button`
    width: 10%;
    height: 50px;
    background-color: ${THEME_COLOR};
    border: 1px solid #dce0e0;
    border-radius: 100px;
    box-shadow: 0;
    font-family: inherit;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
    color: #ffffff;
    transition: 0.25s;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    :hover{
        background-color: #00627a;
    }
    margin-bottom: 100px;
`

const MoreButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

function MoreButton(props) {
    return (
        <MoreButtonContainer className="MoreButtonContainer">
            <Button className="MoreButton" onClick={() => props.onMoreButtonClick()}>
                More
            </Button>
        </MoreButtonContainer>
    )
};

export default MoreButton;
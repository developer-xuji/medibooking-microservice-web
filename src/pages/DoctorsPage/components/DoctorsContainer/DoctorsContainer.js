import React from 'react';
import styled from 'styled-components';
import DoctorOfEach from './components/DoctorOfEach'
import MoreButton from './components/MoreButton'
import DoctorInfo from '../../../DoctorInfo'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

const DoctorsMainContainer = styled.div`
    @media screen and (max-width: 300px) {
        width: calc(250px + 2rem);
        flex-shrink: 0;
        display: flex;
        background-color: #fff;
        flex-wrap: wrap;
        padding-top: 50px;
    }
    @media screen and (min-width: 550px) {
        width: calc(500px + 4rem);
        flex-shrink: 0;
        display: flex;
        background-color: #fff;
        flex-wrap: wrap;
        padding-top: 50px;
    }
    @media screen and (min-width: 800px) {
        width: calc(750px + 6rem);
        flex-shrink: 0;
        display: flex;
        background-color: #fff;
        flex-wrap: wrap;
        padding-top: 50px;
    }
    @media screen and (min-width: 1050px) {
        width: calc(1000px + 8rem);
        flex-shrink: 0;
        display: flex;
        background-color: #fff;
        flex-wrap: wrap;
        padding-top: 50px;

    }
`

const DoctorsContainerWraper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #fff;
`


class DoctorsContainer extends React.Component {

    render() {
        let moreButton;
        console.log(this.props.IfMore);
        if (this.props.IfMore){
            moreButton = <MoreButton onMoreButtonClick={() => {this.props.handleMoreClick()}}/>;
        }
        const renderdoctor = this.props.CurrentDoctorsList.slice(0, this.props.CurrentNumOfDoctorsShowed).map((value, index) => 
            <DoctorOfEach DoctorId={value} Doctor={this.props.AllDoctors[value]}/>
        )
        return(
            <DoctorsContainerWraper>
                <DoctorsMainContainer>
                    {renderdoctor}
                    {moreButton}
                </DoctorsMainContainer>
            </DoctorsContainerWraper>
        )
    }
}

export default DoctorsContainer;
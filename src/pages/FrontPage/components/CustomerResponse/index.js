import React from "react";
import styled from "styled-components";
import TitleArea from "../TitleArea"
import ResponseCard from "./ResponseCard"


const CardArea = styled.div`
  display: flex;
  margin-top: 24px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 80%;
`

const CustomerResponse = () => {

    return <>
        <TitleArea titleText="Testimonial" subTitleText="What's Customers' Feedback" />
        <CardArea>
            <ResponseCard 
            icon="avatar1"
            name="Emma Jarvis" 
            response="It’s extremely easy to follow. It’s pretty self explanatory and quick to complete once you’ve registered for the first time and your information is stored. I love the freedom of booking my appointments."/>
            <ResponseCard 
            icon="avatar2"
            name="Ned Cress"
            response="I've been using this website for over 12 months and find it so convenient. It enables me to make the appointment anytime. It is also great as you can make changes with no problems at all."/>
        </CardArea>
    </>

}

export default CustomerResponse
import React from "react";
import styled from "styled-components";

import DataCard from "./DataCard"
import { DATA_ADS_PIC } from "../../../../constants"
import { HOSPITAL_REG_ICON } from "../../../../constants"
import { MEDICAL_ICON } from "../../../../constants"

const Layout = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  align-items: center;
`

const LeftCard = styled.div`
  margin-top: -80px;
  background:linear-gradient(0deg, rgba(174, 204, 84, 0.8), rgba(174, 204, 84, 0.8)), url(${DATA_ADS_PIC});
  width: 600px;
  height: 500px;
  padding: 48px 36px;
  color: #fff;
  font-family: 'Open Sans', sans-serif;

h2 {
  color: #fff;
  font-size: 32px;
  width: 80%;
  margin: 24px 0;
}

img {
    width: 40px;
    height: 40px;
}`

const IconTitleContainer = styled.div`
  margin: 36px 0;
  display: flex;
  p {
      margin: 2px 16px;
      font-size: 16px;
  }
`
const RightContainer = styled.div`
  margin-top: -80px;
  display: flex;
  flex-wrap: wrap;  
  justify-content: space-evenly;
  align-items: flext-start;
  
`

const DataCards = [
    {
        icon: 'smile',
        data: '2M',
        unit: 'Happy Patients',
        description: 'Medibooking has helped over 2 million of patients, and most of them are happy with the experience of using our website to make appointments.'
    },
    {
        icon: 'bed',
        data: '6K',
        unit: 'Medical Beds',
        description: 'In collaboration with over 100 hospitals, Medibooking ensures adequate medical resources for every incoming patient.'
    },
    {
        icon: 'support',
        data: '24/7',
        unit: 'Patient Support',
        description: 'Medibooking is committed to providing 24/7 support so that every patient can make the appointment anytime through day and night.'
    },
    {
        icon: 'experience',
        data: '10',
        unit: 'Years of Service',
        description: 'With over 10 years of experience, Medibooking provides online medical appointment services that is simple, convenient and free of charge.'
    }
]

const DataAds = () => {
    return (
        <Layout>
            <LeftCard>
                <p>About MediBooking</p>
                <h2>The Modern Way to Stay Healthy</h2>
                <IconTitleContainer>
                    <img src={HOSPITAL_REG_ICON} alt="hostpital"></img>
                    <div>
                        <p><b>100+</b></p>
                        <p>Hospitals</p>
                    </div>
                </IconTitleContainer>
                <IconTitleContainer>
                    <img src={MEDICAL_ICON} alt="medical"></img>
                    <div>
                        <p><b>370+</b></p>
                        <p>Medical specialists</p>
                    </div>
                </IconTitleContainer>
            </LeftCard>
            <RightContainer>
                {DataCards.map((card) => {
                    return <DataCard
                        icon={card.icon}
                        data={card.data}
                        unit={card.unit}
                        description={card.description}
                    />
                })}
            </RightContainer>

        </Layout>


    )
}

export default DataAds
import React from "react";
import styled, { keyframes } from "styled-components";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Link from "./components/Link";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

let Loading = true;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const DivLoader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

const SvgLoader = styled.svg`
  animation-name: ${spinAnimation};
  animation-timing-function: linear;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  margin: auto;
`

const Container = styled.div`
  font-family: MessinaSansWeb, Source Sans Pro, sans-serif;
  background: #fff;
  box-shadow: 0 1px 10px rgba(92, 119, 131, 0.15);
  border-radius: 4px;
  margin: 24px auto;
  padding: 24px;
  text-align: center;
`;

function B2F(doctorObject) {
  console.log(doctorObject);
  let returnedDoctorObject = {};
  let SpecializationList = [];
  let LanguageList = [];
  doctorObject.specializations.map((specialization) => {
    SpecializationList.push(specialization.specializationName);
  });
  doctorObject.languages.map((language) => {
    LanguageList.push(language.languageName);
  });
  returnedDoctorObject = {
    DoctorsID: doctorObject.id,
    FirstName: doctorObject.firstName,
    SecondName: doctorObject.lastName,
    Age: doctorObject.age,
    Gender: doctorObject.gender,
    Description: doctorObject.description,
    Specialization: SpecializationList,
    Language: LanguageList,
  }
  return returnedDoctorObject;
}


class DoctorInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      Doctor : {}
    };

  }

  componentDidMount() {
    
    console.log(`http://localhost:8080/doctors/${this.props.match.params.DoctorsID}`);
    fetch(`http://localhost:8080/doctors/${this.props.match.params.DoctorsID}`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json;charset=UTF-8'
      },
      mode:'cors',
      cache:'default'
    })
    .then(res =>res.json())
    .then((data) => {
      this.setState({
        Doctor: B2F(data),
      });
    });
    Loading = false;
  }

  componentDidUpdate() {
    Loading = true;
  }

  render() {
    if (Loading) {
      return (
        <DivLoader>
          <SvgLoader viewBox="0 0 100 100" width="10em" height="10em">
            <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
          </SvgLoader>
        </DivLoader>
      )
    }
    else {
      return (
        <Container>
          <Profile Doctor={this.state.Doctor}/>
        </Container>
      )
    }
  }
}
export default DoctorInfo;
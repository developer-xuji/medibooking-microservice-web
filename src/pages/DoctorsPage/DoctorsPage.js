import React from "react";
import styled, { keyframes } from "styled-components";
import DoctorsContainer from "./components/DoctorsContainer";
import DoctorsSearchBar from "./components/DoctorsSearchBar";
import DoctorsFilter from "./components/DoctorsFilter";

const Debug = styled.div`
  background-color: black;
`;

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

let Loading = true;
const MaximumNumOfDoctorsToShow = 8;

function B2F(doctorObject) {
  console.log(doctorObject);
  let returnedDoctorObject = {};
  for (let i = 0; i < doctorObject.length; i++){
    let SpecializationList = [];
    let LanguageList = [];
    doctorObject[i].specializations.map((specialization) => {
      SpecializationList.push(specialization.specializationName);
    });
    doctorObject[i].languages.map((language) => {
      LanguageList.push(language.languageName);
    });
    returnedDoctorObject[doctorObject[i].id] = {
      FirstName: doctorObject[i].firstName,
      SecondName: doctorObject[i].lastName,
      Age: doctorObject[i].age,
      Gender: doctorObject[i].gender,
      Description: doctorObject[i].description,
      Specialization: SpecializationList,
      Language: LanguageList,
    }
  }
  return returnedDoctorObject;
}


let allDoctors = {
  0: {
    FirstName: "123",
    SecondName: "ggg",
    Specialization: "dental",
    Language: "English",
  },
  1: {
    FirstName: "456",
    SecondName: "hhh",
    Specialization: "dental",
    Language: "Chinese",
  },
  2: {
    FirstName: "789",
    SecondName: "ggg",
    Specialization: "Surgeon",
    Language: "English",
  },
  3: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "Surgeon",
    Language: "Chinese",
  },
  4: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  5: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "Surgeon",
    Language: "English",
  },
  6: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "Psychiatrist",
    Language: "English",
  },
  7: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  8: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  9: {
    FirstName: "fff",
    SecondName: "def",
    Specialization: "Psychiatrist",
    Language: "English",
  },
  10: {
    FirstName: "ggg",
    SecondName: "def",
    Specialization: "Psychiatrist",
    Language: "English",
  },
  11: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  12: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "Chinese",
  },
  13: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  14: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  15: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  16: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  17: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  18: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  19: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  20: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  21: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  22: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  23: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  24: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  25: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
};
let allDoctorsList = Object.keys(allDoctors);

class DoctorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllDoctors: allDoctors,
      CurrentDoctorsList: Object.keys(allDoctors),
      CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
      SearchText: NaN,
      IfMore: true,
      SpecializationSelected: undefined,
      LanguageSelected: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMoreClick = this.handleMoreClick.bind(this);
    this.handleSpecializationChange = this.handleSpecializationChange.bind(
      this
    );
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleMoreClick() {
    // console.log(this.state.CurrentNumOfDoctorsShowed);
    if (
      this.state.CurrentDoctorsList.length -
        this.state.CurrentNumOfDoctorsShowed >
      4
    ) {
      this.setState({
        CurrentNumOfDoctorsShowed: this.state.CurrentNumOfDoctorsShowed + 4,
        IfMore: true,
      });
    } else {
      this.setState({
        CurrentNumOfDoctorsShowed: this.state.CurrentDoctorsList.length,
        IfMore: false,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let TempList = [];
    for (let i = 0; i < allDoctorsList.length; i++) {
      if (
        allDoctors[allDoctorsList[i]].FirstName.includes(
          this.state.SearchText
        ) ||
        allDoctors[allDoctorsList[i]].SecondName.includes(this.state.SearchText)
      ) {
        TempList.push(allDoctorsList[i]);
      }
    }
    console.log(TempList);
    if (TempList.length > MaximumNumOfDoctorsToShow) {
      this.setState({
        CurrentDoctorsList: TempList,
        CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
        IfMore: true,
      });
    } else {
      this.setState({
        CurrentDoctorsList: TempList,
        CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
        IfMore: false,
      });
    }
  }

  handleChange(event) {
    // let TempList = [];
    // for (let i = 0; i < allDoctorsList.length; i++){
    //     if (allDoctors[allDoctorsList[i]].FirstName.includes(event.target.value) || allDoctors[allDoctorsList[i]].SecondName.includes(event.target.value)) {
    //         TempList.push(allDoctorsList[i]);
    //     }
    // }
    // console.log(TempList);
    this.setState({
      // CurrentDoctorsList : TempList,
      SearchText: event.target.value,
    });
    // console.log(this.state.CurrentDoctorsList);
  }

  handleSpecializationChange(event) {
    console.log(allDoctors);
    if (event === "AllSpecialization") {
      this.setState({
        SpecializationSelected: undefined,
      });
      let TempList = [];
      if (this.state.LanguageSelected !== undefined) {
        for (let i = 0; i < allDoctorsList.length; i++) {
          if (
            allDoctors[allDoctorsList[i]].Language.indexOf(
              this.state.LanguageSelected
            ) !== -1
          ) {
            TempList.push(allDoctorsList[i]);
          }
        }
      } else {
        TempList = Object.keys(allDoctors);
      }
      if (TempList.length > MaximumNumOfDoctorsToShow) {
        this.setState({
          CurrentDoctorsList: TempList,
          CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
          IfMore: true,
        });
      } else {
        this.setState({
          CurrentDoctorsList: TempList,
          CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
          IfMore: false,
        });
      }
    } else {
      this.setState({
        SpecializationSelected: event,
      });
      let TempList = [];
      if (this.state.LanguageSelected !== undefined) {
        for (let i = 0; i < allDoctorsList.length; i++) {
          if (
            allDoctors[allDoctorsList[i]].Specialization.indexOf(event) !== -1 &&
            allDoctors[allDoctorsList[i]].Language.indexOf(
              this.state.LanguageSelected
            ) !== -1
          ) {
            TempList.push(allDoctorsList[i]);
          }
        }
      } else {
        for (let i = 0; i < allDoctorsList.length; i++) {
          if (allDoctors[allDoctorsList[i]].Specialization.indexOf(event) !== -1) {
            TempList.push(allDoctorsList[i]);
          }
        }
      }
      if (TempList.length > MaximumNumOfDoctorsToShow) {
        this.setState({
          CurrentDoctorsList: TempList,
          CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
          IfMore: true,
        });
      } else {
        this.setState({
          CurrentDoctorsList: TempList,
          CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
          IfMore: false,
        });
      }
    }
  }

  handleLanguageChange(event) {
    if (event === "AllLanguage") {
      this.setState({
        LanguageSelected: undefined,
      });
      let TempList = [];
      if (this.state.SpecializationSelected !== undefined) {
        for (let i = 0; i < allDoctorsList.length; i++) {
          if (
            allDoctors[allDoctorsList[i]].Specialization.indexOf(
              this.state.SpecializationSelected
            ) !== -1
          ) {
            TempList.push(allDoctorsList[i]);
          }
        }
      } else {
        TempList = Object.keys(allDoctors);
      }
      if (TempList.length > MaximumNumOfDoctorsToShow) {
        this.setState({
          CurrentDoctorsList: TempList,
          CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
          IfMore: true,
        });
      } else {
        this.setState({
          CurrentDoctorsList: TempList,
          CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
          IfMore: false,
        });
      }
    } else {
      this.setState({
        LanguageSelected: event,
      });
      let TempList = [];
      if (this.state.SpecializationSelected !== undefined) {
        for (let i = 0; i < allDoctorsList.length; i++) {
          if (
            allDoctors[allDoctorsList[i]].Language.indexOf(event) !== -1 &&
            allDoctors[allDoctorsList[i]].Specialization.indexOf(
              this.state.SpecializationSelected
            ) !== -1
          ) {
            TempList.push(allDoctorsList[i]);
          }
        }
      } else {
        for (let i = 0; i < allDoctorsList.length; i++) {
          if (allDoctors[allDoctorsList[i]].Language.indexOf(event) !== -1) {
            TempList.push(allDoctorsList[i]);
          }
        }
      }
      if (TempList.length > MaximumNumOfDoctorsToShow) {
        this.setState({
          CurrentDoctorsList: TempList,
          CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
          IfMore: true,
        });
      } else {
        this.setState({
          CurrentDoctorsList: TempList,
          CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
          IfMore: false,
        });
      }
    }
  }

  componentDidMount() {
    Loading = false;
    fetch('http://localhost:8080/doctors',{
      method:'GET',
      headers:{
        'Content-Type':'application/json;charset=UTF-8'
      },
      mode:'cors',
      cache:'default'
    })
     .then(res =>res.json())
     .then((data) => {
        console.log(data);
        allDoctors = B2F(data);
        allDoctorsList = Object.keys(allDoctors);
        this.setState({
          AllDoctors: allDoctors,
          CurrentDoctorsList: allDoctorsList,
        });
    })
  }

  // componentDidUpdate() {
  //   Loading = true;
  // }

  render() {
    console.log(this.state.CurrentDoctorsList);
    if (Loading === true) {
      return (
          <DivLoader>
            <SvgLoader viewBox="0 0 100 100" width="10em" height="10em">
              <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
            </SvgLoader>
          </DivLoader>
      );
    }
    else {
      return (
        <React.Fragment>
          <DoctorsSearchBar
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <DoctorsFilter
            handleSpecializationChange={this.handleSpecializationChange}
            handleLanguageChange={this.handleLanguageChange}
          />
          <DoctorsContainer
            AllDoctors={this.state.AllDoctors}
            CurrentDoctorsList={this.state.CurrentDoctorsList}
            CurrentNumOfDoctorsShowed={this.state.CurrentNumOfDoctorsShowed}
            handleMoreClick={this.handleMoreClick}
            IfMore={this.state.IfMore}
          />
        </React.Fragment>
      );
    }

  }
}

export default DoctorsPage;

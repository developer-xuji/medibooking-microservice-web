import React from 'react';
import styled from 'styled-components';
import image from './assets/img/background_doctor.jpg'
import { THEME_COLOR } from "../../../../constants";

const Banner = styled.div`
    background-image: url(${image});
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
    height: 500px;
    display: flex;
    flex-flow: row wrap;
`;

const BannerContainer = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    width: 100%;
    background-color: rgba(10, 10, 10, 0.5);
    align-self: flex-end;
`;

const SearchBarTextWraper = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
`;

const SearchBarTextContainer = styled.div`
    align-items: center;
    width: 50%;
`;

const SearchTextContainer = styled.div`
    width: 100%;
    text-align: center;
    color: white;
    .h2{
        font-size: 40px;
        font-weight: 700;
        
    }
    .p{
        font-size: 0.9375rem;
        font-weight: 400;
    }
`;

const SearchBarContainer = styled.div`
    .form{
        position: relative;
    }
    .SubmitButton:hover{
        background-color: #97000a;
    }
`

const SearchBar = styled.input`
    position: relative;
    left: 15px;
    box-sizing: border-box;
    width: 80%;
    height: 2.4375rem;
    margin: 0 0 1rem;
    padding: 0.5rem;
    border: 1px solid #dce0e0;
    border-radius: 100px;
    background-color: #ffffff;
    box-shadow: 0;
    font-family: inherit;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
    color: #4a4a4a;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;

const SubmitButton = styled.input`
    position: relative;
    left: 25px;
    top: 6px;
    // height: auto;
    // display: inline-block;
    vertical-align: middle;
    margin: 0 0 1rem 0;
    font-family: inherit;
    padding: 0.85em 1em;
    -webkit-appearance: none;
    border: 1px solid transparent;
    border-radius: 100px;
    transition: background-color 0.25s ease-out, color 0.25s ease-out;
    font-size: 0.9rem;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    background-color: ${THEME_COLOR};
    transition: 0.25s;
    color: #ffffff;
    :hover{
        background-color: #00627a;
    }
`;




class DoctorsSearchBar extends React.Component {

    // constructor(props){

    //     super(props);
    //     this.state = {
    //         AllDoctors : allDoctors,
    //         CurrentDoctorsList : Object.keys(allDoctors),
    //     };
    //     // this.OnCityListClick = this.OnCityListClick.bind(this);
    // }

    render() {
        return (
            <Banner>
                <BannerContainer>
                    <SearchBarTextWraper>
                        <SearchBarTextContainer>
                            <SearchTextContainer>
                                <h2>Our Doctors</h2>
                                <p>Medical One GP's are dedicated to providing you the best possible care. On this page you can find a GP by name, gender, location, languages spoken or medial interest.</p>
                            </SearchTextContainer>
                            <SearchBarContainer>
                                <form  onSubmit={this.props.handleSubmit}>
                                    <SearchBar placeholder="Enter doctor's name" type="text" name="doctor-name" size="60" maxlength="128" onChange={this.props.handleChange}></SearchBar>
                                    <SubmitButton type="submit" value="Submit"></SubmitButton>
                                </form>
                            </SearchBarContainer>
                        </SearchBarTextContainer>
                    </SearchBarTextWraper>
                </BannerContainer>
                
            </Banner>
        )
    }
}

export default DoctorsSearchBar;
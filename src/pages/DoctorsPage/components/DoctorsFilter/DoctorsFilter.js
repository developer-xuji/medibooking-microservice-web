import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const { Option } = Select;

const FilterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;
`

function DoctorsFilter(props) {
    
    return (
        <FilterContainer>
            <Select defaultValue="Specialization" style={{ width: 200, marginRight: 50, marginTop: 20 }} onChange={props.handleSpecializationChange}>
                <Option value="AllSpecialization">Specialization</Option>
                <Option value="Addiction medicine">Addiction medicine</Option>
                <Option value="Anaesthesia">Anaesthesia</Option>
                <Option value="Dermatology">Dermatology</Option>
                <Option value="Emergency medicine">Emergency medicine</Option>
                <Option value="General practice">General practice</Option>
                <Option value="Intensive care medicine">Intensive care medicine</Option>
                <Option value="Medical administration">Medical administration</Option>
                <Option value="Obstetrics and gynaecology">Obstetrics and gynaecology</Option>
                <Option value="Occupational and environmental medicine">Occupational and environmental medicine</Option>
                <Option value="Ophthalmology">Ophthalmology</Option>
                <Option value="Paediatrics and child health">Paediatrics and child health</Option>
                <Option value="Pain medicine">Pain medicine</Option>
                <Option value="Palliative medicine">Palliative medicine</Option>
                <Option value="Pathology">Pathology</Option>
                <Option value="Physician">Physician</Option>
                <Option value="Psychiatry">Psychiatry</Option>
                <Option value="Public health medicine">Public health medicine</Option>
                <Option value="Radiation oncology">Radiation oncology</Option>
                <Option value="Radiology">Radiology</Option>
                <Option value="Rehabilitation medicine">Rehabilitation medicine</Option>
                <Option value="Sexual health medicine">Sexual health medicine</Option>
                <Option value="Sport and exercise medicine">Sport and exercise medicine</Option>
                <Option value="Surgery">Surgery</Option>
            </Select>
            <Select defaultValue="Language" style={{ width: 200, marginRight: 50, marginTop: 20   }} onChange={props.handleLanguageChange}>
                <Option value="AllLanguage">Language</Option>
                <Option value="Mandarin Chinese">Mandarin Chinese</Option>
                <Option value="Spanish">Spanish</Option>
                <Option value="English">English</Option>
                <Option value="Hindi">Hindi</Option>
                <Option value="Bengali">Bengali</Option>
                <Option value="Portuguese">Portuguese</Option>
                <Option value="Russian">Russian</Option>
                <Option value="Japanese">Japanese</Option>
                <Option value="Korean">Korean</Option>
                <Option value="French">French</Option>
                <Option value="German">German</Option>
                <Option value="Vietnamese">Vietnamese</Option>
                <Option value="Italian">Italian</Option>
            </Select>
            {/* <Select defaultValue="All" style={{ width: 200, marginTop: 20 }} onChange={props.handleChange}>
                <Option value="All">All</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select> */}
        </FilterContainer>
    )

};

export default DoctorsFilter;
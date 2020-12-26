import React from "react";
import {
  Layout,
  FormItem,
  Label,
  FormInput,
  GenderSelector,
  Title,
  Submit,
} from "../../../styling";
import setPatientInfo from "../../../../../../../../utils/setPatientInfo";

class PatientInfoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.data,
      // data: this.props.data,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trim(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = this.state;
    updatedData.age = Number(updatedData.age);
    setPatientInfo(updatedData).then(() => {
      this.forceUpdate();
    });
  };

  render() {
    const { firstName, lastName, age, gender } = this.state;
    return (
      <Layout onSubmit={this.handleSubmit}>
        <Title>Personal Information</Title>
        <FormItem>
          <Label>First Name:</Label>
          <FormInput
            name="firstName"
            type="text"
            defaultValue={firstName}
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <Label>Last Name:</Label>
          <FormInput
            name="lastName"
            type="text"
            defaultValue={lastName}
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <Label>Age:</Label>
          <FormInput
            name="age"
            type="number"
            defaultValue={age}
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <Label>Gender:</Label>
          <GenderSelector
            name="gender"
            defaultValue={gender}
            onChange={this.handleChange}
          >
            <option value="">----</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </GenderSelector>
        </FormItem>
        {/* <FormItem>
      <Label>Phone:</Label>
      <FormInput name="phone" type="text" defaultValue={data.phone} />
    </FormItem>
    <FormItem>
      <Label>Email:</Label>
      <FormInput name="email" type="text" defaultValue={data.email} />
    </FormItem> */}

        <Submit type="submit" value="Save" />
      </Layout>
    );
  }
}

export default PatientInfoForm;

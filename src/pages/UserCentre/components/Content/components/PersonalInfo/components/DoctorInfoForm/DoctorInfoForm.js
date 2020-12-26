import React from "react";
import {
  Layout,
  FormItem,
  Label,
  FormInput,
  DoctorDescription,
  GenderSelector,
  Title,
  Submit,
} from "../../../styling";
import MultiSelector from "./components/MultiSelector";

class DoctorInfoForm extends React.Component {
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

    console.log(updatedData);
  };

  // onFinish = (values) => {

  //   const requestOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: sessionStorage.getItem("username"),
  //       name: values.name,
  //       dob: dob,
  //       phone: phone,
  //       email: email,
  //       introduction: introduction,
  //     }),
  //   };
  //   fetch(
  //     url.backendUrl + "/user/info/basic",
  //     requestOptions
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       if (res.success === false) {
  //         setTimeout(() => {}, 300);
  //       } else {
  //         message.success(`Your changes have been saved.`);
  //         console.log(res.message);
  //       }
  //     });}

  handleSelectorChange = (value, selector) => {
    selector === "languages"
      ? this.setState({
          languages: value,
        })
      : this.setState({
          specializations: value,
        });
  };

  render() {
    const {
      firstName,
      lastName,
      age,
      gender,
      languages,
      specializations,
      description,
    } = this.state;
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
          <FormInput
            name="phone"
            type="text"
            defaultValue={phone}
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <Label>Email:</Label>
          <FormInput
            name="email"
            type="text"
            defaultValue={email}
            onChange={this.handleChange}
          />
        </FormItem> */}
        <FormItem>
          <Label>Languages:</Label>
          <MultiSelector
            category="languages"
            data={languages}
            handleSelectorChange={this.handleSelectorChange}
          />
        </FormItem>
        <FormItem>
          <Label>Specializations:</Label>
          <MultiSelector
            category="specializations"
            data={specializations}
            handleSelectorChange={this.handleSelectorChange}
          />
        </FormItem>
        <FormItem doctorDescription>
          <Label>Description:</Label>

          <DoctorDescription
            name="description"
            defaultValue={description}
            onChange={this.handleChange}
          />
        </FormItem>

        <Submit type="submit" value="Save" />
      </Layout>
    );
  }
}

export default DoctorInfoForm;

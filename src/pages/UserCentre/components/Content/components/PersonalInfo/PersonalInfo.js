import React from "react";
import getAuth from "../../../../../../apis/getAuth";
import LoadingSpin from "../../../../../../components/LoadingSpin";
import PatientInfoForm from "./components/PatientInfoForm";
import DoctorInfoForm from "./components/DoctorInfoForm";
import fetchData from "../../../../../../apis/fetchData";
import getUserInfo from "../../../../../../utils/getUserInfo";

const role = localStorage.getItem("ROLE");
class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: undefined,
      role: undefined,
    };
  }

  componentDidMount() {
    getUserInfo().then((data) => {
      this.setState({
        role,
        data,
        loading: false,
      });
    });
  }

  render() {
    const { loading, data, role } = this.state;

    console.log(data);
    return (
      <>
        {loading ? (
          <LoadingSpin />
        ) : role === "ROLE_DOCTOR" ? (
          <DoctorInfoForm data={data} />
        ) : (
          <PatientInfoForm data={data} />
        )}
      </>
    );
  }
}

export default PersonalInfo;

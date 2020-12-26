import React from "react";
import PasswordForm from "./components/PasswordForm"
import { Layout, FormItem, Label, FormInput, Title, Submit } from "../styling";
import getAuth from "../../../../../../apis/getAuth";
import logIn from "../../../../../../apis/logIn";
import putPassword from "../../../../../../utils/putPassword"


const ENCRYPTION_STRENGTH = 10;
let bcrypt = require("bcryptjs");
let salt = bcrypt.genSaltSync(ENCRYPTION_STRENGTH);

class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      password: "123456",
      PasswordResetStatus: "show",
      PasswordResetResult: false,
    };

    this.onFinish = this.onFinish.bind(this);
    this.onNewFinish = this.onNewFinish.bind(this);
    this.setUser = this.setUser.bind(this);
    this.onPasswordReset = this.onPasswordReset.bind(this);
  }

  onFinish(event) {
    logIn({
      username: this.state.username,
      password: event.password,
    })
      .then((response) => {
        console.log(response);
        this.setState({
          PasswordResetStatus: "new",
        })
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          PasswordResetStatus: "wrong",
        })
      });
  };

  onNewFinish(event){

    console.log(event);
    let account = {encodedPassword: bcrypt.hashSync(event.newpassword, salt)}
    putPassword([localStorage.getItem("ACCOUNT_ID")], account)
    this.setState({
      PasswordResetResult:true,
    })
  };

  onPasswordReset(event) {
    this.setState({
      PasswordResetStatus: "reset",
    });
  };

  setUser(data) {
    this.setState({
      username: data.username,
    });
  };

  componentDidMount(){
    const token = localStorage.getItem("JWT_TOKEN");
    getAuth({ token: token })
      .then((response) => (this.setUser(response.data)))
      .catch(() => {});
  };

  // componentDidUpdate(){
  //   this.setState({
  //     PasswordResetStatus: "show",
  //   });
  // };


  render() {
    console.log(this.state.username);
    return (
      <PasswordForm
        username={this.state.username}
        PasswordResetStatus={this.state.PasswordResetStatus}
        onPasswordReset={this.onPasswordReset}
        onFinish={this.onFinish}
        onNewFinish={this.onNewFinish}
        PasswordResetResult={this.state.PasswordResetResult}
      />
    );
  }
}

export default AccountInfo;
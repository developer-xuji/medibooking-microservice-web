import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { getRoutePath } from "../../../../../../utils/getRoute";

const Layout = styled.ul`
  a {
    color: black;
    text-decoration: none;
  }
  padding: 0;
  margin: 0;
  /* background-color: lightcyan; */
`;
const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  transition: background-color 200ms;
  cursor: pointer;
  font-size: large;
  height: 10vh;
  border-bottom: #e1e1e1 1px solid;
  background-color: ${(props) => (props.active ? "#01a4b7" : {})};
  &:hover {
    background-color: #01a4b7;
    color: white;
  }
  color: ${(props) => (props.active ? "white" : {})};
  font-weight: ${(props) => (props.active ? "700" : {})};
`;

class Menu extends React.Component {
  render() {
    return (
      <Layout>
        <Link to={getRoutePath("user_center")} className="nav-link">
          {window.location.pathname === getRoutePath("user_center") ? (
            <MenuItem active>Personal Information</MenuItem>
          ) : (
            <MenuItem>Personal Information</MenuItem>
          )}
        </Link>

        <Link to={getRoutePath("user_center/accountInfo")} className="nav-link">
          {window.location.pathname ===
          getRoutePath("user_center/accountInfo") ? (
            <MenuItem active>Account Information</MenuItem>
          ) : (
            <MenuItem>Account Information</MenuItem>
          )}
        </Link>

        <Link
          to={getRoutePath("user_center/manageBookings")}
          className="nav-link"
        >
          {window.location.pathname ===
          getRoutePath("user_center/manageBookings") ? (
            <MenuItem active>Manage Bookings</MenuItem>
          ) : (
            <MenuItem>Manage Bookings</MenuItem>
          )}
        </Link>
      </Layout>
    );
  }
}

export default withRouter(Menu);

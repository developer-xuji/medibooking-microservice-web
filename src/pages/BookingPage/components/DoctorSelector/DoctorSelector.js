import React from "react";
import "antd/dist/antd.css";
import { List, Avatar } from "antd";
import styled, { css } from "styled-components";
import { THEME_COLOR } from "../../../../constants";
import getDoctors from "../../../../utils/getDoctors";

const Layout = styled.div``;
const ItemBox = styled.div`
  display: flex;
  & ~ & {
    border-top: 1px solid gray;
  }
  ${(props) =>
    ({
      true: css`
        background-color: ${THEME_COLOR};
      `,
    }[props.isSelected])}
`;

class DoctorSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorList: null,
    };
  }

  componentDidMount() {
    getDoctors().then((response) =>
      this.setState({
        doctorList: response.slice(0, 5),
      })
    );
  }

  render() {
    const { title, selected, onSelect } = this.props;
    const emptyList = [];
    const { doctorList } = this.state;

    return (
      <Layout>
        <h3>{title}</h3>
        <List
          itemLayout="horizontal"
          dataSource={doctorList === null ? emptyList : doctorList}
          renderItem={(doctor) => {
            const doctorName = doctor.firstName + " " + doctor.lastName;
            return (
              <ItemBox
                isSelected={selected === doctorName}
                onClick={() => onSelect(doctor)}
              >
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={doctorName}
                    description="Specialization:"
                  />
                </List.Item>
              </ItemBox>
            );
          }}
        />
        <div>
          <a href="/doctors">More Doctors</a>
        </div>
      </Layout>
    );
  }
}
export default DoctorSelector;

import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Radio } from "antd";
import { APPOINTMENT_TIMES } from "../../../../constants";
import { TIMES } from "../../../../constants";
import moment from "moment";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const isTimeExpired = (time, date) => {
  if (date !== moment().format("YYYY-MM-DD")) return false;
  const { hour } = time;
  const currentHour = parseInt(moment().format("HH"));
  return parseInt(hour) < currentHour || parseInt(hour) === currentHour;
};

class TimeSelector extends React.Component {
  render() {
    const { title, onSelect, invalidAppointments, date } = this.props;
    const invalidTime = [];
    invalidAppointments.forEach((appointment) => {
      invalidTime.push(appointment.startingTime);
    });

    return (
      <Layout>
        <h3>{title}</h3>
        <Radio.Group onChange={onSelect}>
          {TIMES(8, 20).map((time) => {
            let valid = true;
            const timeString = time.hour + ":" + time.minute;
            invalidTime.forEach((t) => {
              if (t === timeString + ":00") valid = false;
            });

            return (
              <Radio.Button
                key={time.key}
                value={timeString}
                disabled={!valid || isTimeExpired(time, date)}
                style={{ margin: 8 }}
              >
                {timeString}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Layout>
    );
  }
}

export default TimeSelector;

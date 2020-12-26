import { Spin } from "antd";
import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingSpin = () => {
  return (
    <Layout>
      <Spin size="large" tip="Loading..." />
    </Layout>
  );
};

export default LoadingSpin;

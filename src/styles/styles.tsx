import styled from "styled-components";
import { Card, Row, Col, Layout } from "antd";

const { Header } = Layout;

export const StyledCard = styled(Card)`
  &&& {
    .ant-card-head-title {
      font-size: 16px;
      text-align: center;
      overflow: hidden;
      white-space: normal;
    }
    .ant-card-meta-title {
      font-size: 16px;
      text-align: center;
      overflow: hidden;
      white-space: normal;
    }
  }
`;

export const StyledHeader = styled(Header)`
  &&& {
    height: 100%;
    padding-inline: 0px;
    background: none;
  }
`;

export const StyledRow = styled(Row)`
  &&& {
    margin-left: 60px;
    margin-right: 60px;
  }
`;

export const StyledCol = styled(Col)`
  &&& {
    flex-basis: 20%;
    width: 20%;
    margin-bottom: 3%;
  }
`;

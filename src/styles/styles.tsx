import styled from "styled-components";
import { Card, Row, Col, Layout } from "antd";

const { Header, Sider } = Layout;

export const StyledCard = styled(Card)`
  &&& {
    width: 90%;
    font-size: 12px;
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

export const HeaderContainer = styled.div`
  &&& {
    display: flex;
    color: white;
    font-size: 35px;
    justify-content: space-around;
  }
`;

export const SearchContainer = styled.div`
  &&& {
    display: flex;
    gap: 30px;
    color: white;
    height: 55px;
    font-size: 20px;
    justify-content: center;
    align-items: center;
  }
`;

export const UserAndHamburgerContainer = styled.div`
  &&& {
    display: flex;
    color: white;
    height: 55px;
    font-size: 20px;
    justify-content: flex-end;
  }
`;

export const StyledSider = styled(Sider)`
  &&& {
    @media (max-width: 1450px) {
      display: none;
    }
  }
`;

export const StyledRow = styled(Row)`
  &&& {
    margin-left: 60px;
    margin-right: 60px;
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
    justify-content: center;
  }
`;

export const StyledCol = styled(Col)`
  &&& {
    flex-basis: 20%;
    width: 25%;
    margin-bottom: 3%;

    @media (max-width: 1600px) {
      flex-basis: 25%;
      width: 25%;
    }

    @media (max-width: 1450px) {
      flex-basis: 30%;
      width: 35%;
    }

    @media (max-width: 1250px) {
      flex-basis: 40%;
      width: 45%;
    }
  }
`;

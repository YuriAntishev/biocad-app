import styled from "styled-components";
import { Card, Row, Col, Layout, Input } from "antd";

const { Header, Sider } = Layout;
const { Search } = Input;

export const StyledCard = styled(Card)`
  &&& {
    width: 90%;
    font-size: 12px;
    .ant-card-head-title {
      font-size: 100%;
      text-align: center;
      overflow: hidden;
      white-space: normal;

      @media (min-width: 0px) and (max-width: 420px) {
        font-size: 110%;
      }
    }
    .ant-card-meta-title {
      font-size: 120%;
      text-align: center;
      overflow: hidden;
      white-space: normal;
      @media (min-width: 0px) and (max-width: 420px) {
        font-size: 130%;
      }
    }
  }
`;

export const StyledSearch = styled(Search)`
  &&& {
    background-color: ${({ disabled }) => (disabled ? "white" : "white")};
  }
`;

export const StyledHeader = styled(Header)`
  &&& {
    height: 100%;
    padding-inline: 0px;
    background: none;
  }
`;

export const ColDesktop = styled(Col)`
  &&& {
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

export const ColMobile = styled(Col)`
  &&& {
    @media (max-width: 1024px) {
      display: block;
    }
    @media (min-width: 1025px) {
      display: none;
    }
  }
`;

export const HeaderContainer = styled.div`
  &&& {
    display: flex;
    color: white;
    font-size: 35px;
    text-align: center;
    justify-content: space-around;
  }
`;

export const SearchContainer = styled.div`
  &&& {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    color: white;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    margin: 15px;
    @media (min-width: 800px) {
      gap: 30px;
      flex-direction: row;
    }
  }
`;

export const UserAndHamburgerContainerMobile = styled.div`
  &&& {
    display: flex;
    color: white;
    height: 55px;
    font-size: 20px;
    justify-content: space-between;
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

export const HamburgerContainer = styled.div`
  &&& {
    margin-left: 20px;
  }
`;

export const UserContainer = styled.div`
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
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

export const StyledRow = styled(Row)`
  &&& {
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
    justify-content: center;
  }
`;

export const StyledCol = styled(Col)`
  &&& {
    flex-basis: 17%;
    width: 25%;
    margin-bottom: 3%;

    @media (min-width: 1250px) and (max-width: 1440px) {
      flex-basis: 20%;
      width: 20%;
    }

    @media (min-width: 800px) and (max-width: 1250px) {
      flex-basis: 25%;
      width: 20%;
    }

    @media (min-width: 600px) and (max-width: 800px) {
      flex-basis: 30%;
      width: 20%;
    }

    @media (max-width: 600px) {
      flex-basis: 45%;
      width: 45%;
    }
  }
`;

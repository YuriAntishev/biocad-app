/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, ChangeEventHandler } from "react";
import "./index.css";
import {
  Col,
  Row,
  Card,
  Avatar,
  Input,
  Layout,
  Menu,
  Button,
  Dropdown,
  MenuProps,
} from "antd";
import { AlignLeftOutlined } from "@ant-design/icons";
import { leftMenuItems } from "./data/MenuItems";
import { arrayBookData, BookData } from "./data/api";
import {
  SearchContainer,
  UserAndHamburgerContainer,
  HeaderContainer,
  StyledCard,
  StyledCol,
  StyledRow,
  StyledSider,
  StyledHeader,
} from "./styles/styles";
import AV from "./img/avatar.png";

const { Content } = Layout;
const { Meta } = Card;
const { Search } = Input;

const items: MenuProps["items"] = [
  {
    label: <div>Главная</div>,
    key: "0",
  },
  {
    label: <div>Новости библиотеки</div>,
    key: "1",
  },
  {
    label: <div>Сотрудники библиотеки</div>,
    key: "2",
  },
  {
    label: <div>Мероприятия библиотеки</div>,
    key: "3",
  },
];

const App: React.FC = () => {
  const [results, setResults] = useState<BookData[]>(arrayBookData);
  const [showResults, setShowResults] = useState(false);

  const onSearchLike: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const searchText = value.toLowerCase();
    const filteredValue = arrayBookData.filter(
      (x: BookData) =>
        x.name.toLowerCase().includes(searchText) ||
        x.author.toLowerCase().includes(searchText)
    );
    setResults(filteredValue);
  };

  useEffect(() => {
    if (results.length > 0 && !showResults) setShowResults(true);

    if (results.length <= 0) setShowResults(false);
  }, [JSON.stringify(results)]);

  return (
    <Layout>
      <StyledHeader>
        <Row style={{ background: "#001529" }}>
          <Col span={24}>
            <HeaderContainer>Корпоративная библиотека</HeaderContainer>
          </Col>
        </Row>
        <Row style={{ background: "#001529" }}>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Button>
              <AlignLeftOutlined />
            </Button>
          </Dropdown>
          <Col span={24}>
            <UserAndHamburgerContainer>
              <div>User Name</div>
              <Avatar style={{ float: "right", margin: "13px" }} src={AV} />
            </UserAndHamburgerContainer>
          </Col>
        </Row>
        <Row style={{ background: "#001529" }}>
          <Col span={24}>
            <SearchContainer>
              <div>Find Your Book Of Choice</div>
              <Search
                placeholder="find a book"
                onChange={onSearchLike}
                style={{ width: 300 }}
                allowClear
              />
            </SearchContainer>
          </Col>
        </Row>
      </StyledHeader>
      <Layout>
        <StyledSider width={250}>
          <Menu
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
            items={leftMenuItems}
          />
        </StyledSider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 20,
              minHeight: 280,
            }}
          >
            <StyledRow>
              {showResults &&
                results?.map(({ id, img, name, author }) => {
                  return (
                    <StyledCol key={id}>
                      <StyledCard
                        title={name}
                        hoverable
                        cover={<img alt="book" src={img} />}
                      >
                        <Meta title={author} />
                      </StyledCard>
                    </StyledCol>
                  );
                })}
            </StyledRow>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;

import React, { useState, useEffect, ChangeEventHandler } from "react";
import "./index.css";
import {
  Col,
  Row,
  Card,
  Avatar,
  Tooltip,
  Layout,
  Menu,
  Button,
  Select,
  Dropdown,
  Typography,
} from "antd";
import { AlignLeftOutlined } from "@ant-design/icons";
import { leftMenuItems, items } from "./data/MenuItems";
import { arrayBookData, BookData } from "./data/api";
import {
  SearchContainer,
  HamburgerContainer,
  ColMobile,
  ColDesktop,
  UserAndHamburgerContainer,
  UserAndHamburgerContainerMobile,
  UserContainer,
  HeaderContainer,
  StyledImg,
  StyledCard,
  StyledSearch,
  StyledCol,
  StyledRow,
  StyledSider,
  StyledHeader,
} from "./styles/styles";
import AV from "./img/avatar.png";

const { Content } = Layout;
const { Meta } = Card;
const { Text } = Typography;

const App: React.FC = () => {
  const [results, setResults] = useState<BookData[]>(arrayBookData);
  const [showResults, setShowResults] = useState(false);
  const [searchType, setSearchType] = useState<string>("");

  const handleChange = (value: string) => {
    setSearchType(value);
  };

  const onSearchLike: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const searchText = value.toLowerCase();
    let filteredValue: BookData[];

    if (searchType === "name") {
      filteredValue = arrayBookData.filter((x: BookData) =>
        x.name.toLowerCase().includes(searchText)
      );
      setResults(filteredValue);
    }

    if (searchType === "author") {
      filteredValue = arrayBookData.filter((x: BookData) =>
        x.author.toLowerCase().includes(searchText)
      );
      setResults(filteredValue);
    }
  };

  useEffect(() => {
    if (results.length > 0 && !showResults) setShowResults(true);

    if (results.length <= 0) setShowResults(false);
  }, [results]);

  return (
    <Layout>
      <StyledHeader>
        <Row style={{ background: "#001529" }}>
          <Col span={24}>
            <HeaderContainer>Корпоративная библиотека</HeaderContainer>
          </Col>
        </Row>
        <Row style={{ background: "#001529" }}>
          <ColDesktop span={24}>
            <UserAndHamburgerContainer>
              <div>User Name</div>
              <Avatar style={{ float: "right", margin: "13px" }} src={AV} />
            </UserAndHamburgerContainer>
          </ColDesktop>
          <ColMobile span={24}>
            <UserAndHamburgerContainerMobile>
              <HamburgerContainer>
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Button>
                    <AlignLeftOutlined />
                  </Button>
                </Dropdown>
              </HamburgerContainer>
              <UserContainer>
                <div>User Name</div>
                <Avatar style={{ float: "right", margin: "13px" }} src={AV} />
              </UserContainer>
            </UserAndHamburgerContainerMobile>
          </ColMobile>
        </Row>
        <Row style={{ background: "#001529" }}>
          <Col span={24}>
            <SearchContainer>
              <Select
                placeholder="Выбрать категорию"
                style={{ width: 200 }}
                onChange={handleChange}
                options={[
                  {
                    value: "name",
                    label: "Название",
                  },
                  {
                    value: "author",
                    label: "Автор",
                  },
                ]}
              />
              <div>Найти книгу</div>
              <Tooltip
                open={searchType === "" ? true : false}
                color="blue"
                placement="bottomLeft"
                title="Чтобы воспользоваться поиском, выберите категорию поиска"
              >
                <StyledSearch
                  placeholder="Найти книгу"
                  disabled={searchType === "" ? true : false}
                  onChange={onSearchLike}
                  style={{ width: 300 }}
                  allowClear
                />
              </Tooltip>
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
              marginTop: 60,
              minHeight: 280,
            }}
          >
            <StyledRow>
              {showResults &&
                results?.map(({ id, img, name, author, ellipsis }) => {
                  return (
                    <StyledCol key={id}>
                      <StyledCard
                        title={
                          <Text
                            style={ellipsis ? { width: 100 } : undefined}
                            onClick={() =>
                              setResults((prev) => {
                                const clonedArray = JSON.parse(
                                  JSON.stringify(prev)
                                );
                                return clonedArray.map((book: BookData) => {
                                  if (book.id === id) {
                                    book.ellipsis = !book.ellipsis;
                                  }
                                  return book;
                                });
                              })
                            }
                            ellipsis={ellipsis ? { tooltip: name } : false}
                          >
                            {name}
                          </Text>
                        }
                        hoverable
                        cover={<StyledImg alt="book" src={img} />}
                      >
                        <Meta title={
                          <Text
                          style={ellipsis ? { width: 100 } : undefined}
                          onClick={() =>
                            setResults((prev) => {
                              const clonedArray = JSON.parse(
                                JSON.stringify(prev)
                              );
                              return clonedArray.map((book: BookData) => {
                                if (book.id === id) {
                                  book.ellipsis = !book.ellipsis;
                                }
                                return book;
                              });
                            })
                          }
                          ellipsis={ellipsis ? { tooltip: author } : false}
                        >
                          {author}
                        </Text>
                          } />
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

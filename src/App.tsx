/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./index.css";
import { NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Row, Card, Avatar, Input, Layout, Menu } from "antd";
import {
  StyledCard,
  StyledCol,
  StyledRow,
  StyledHeader,
} from "./styles/styles";
import AV from "./img/avatar.png";

const { Content, Sider } = Layout;
const { Meta } = Card;
const { Search } = Input;

type BookData = {
  id: number;
  img: string;
  name: string;
  author: string;
};

const arrayBookData: BookData[] = [
  {
    id: 1,
    img: "https://books.google.com/books/content?id=INVTzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    name: "Хоббит, туда и обратно",
    author: "Дж. Р. Р. Толкин",
  },
  {
    id: 2,
    img: "https://books.google.com/books/content?id=iHJbAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    name: "Властелин колец",
    author: "Дж. Р. Р. Толкин",
  },
  {
    id: 3,
    img: "https://books.google.com/books/content?id=6aD9CAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    name: "Игра престолов. Книга 2",
    author: "Джордж Мартин",
  },
  {
    id: 4,
    img: "https://books.google.com/books/content?id=3FBbDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    name: "Изучаем программирование на JavaScript",
    author: "Робсон Элизабет",
  },
  {
    id: 5,
    img: "https://books.google.com/books/content?id=R5z7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    name: "Конан и карусель богов",
    author: "Ник Перумов",
  },
  {
    id: 6,
    img: "https://books.google.com/books/content?id=a8VTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    name: "Сабли и мечи. Виды, история, конструкция",
    author: "Алексей Козленко",
  },
  {
    id: 7,
    img: "https://books.google.com/books/content?id=yK6tDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    name: "Выразительный JavaScript. Современное веб-программирование. 3-е издание",
    author: "Хавербеке Марейн",
  },
  {
    id: 8,
    img: "https://books.google.com/books/content?id=nlgWywAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    name: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
  },
  {
    id: 9,
    img: "https://books.google.com/books/content?id=-LhHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    name: "Что такое Биткоин и как не потерять все на криптовалюте",
    author: "Максим Серебренников",
  },
  {
    id: 10,
    img: "https://books.google.com/books/content?id=6xJJDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    name: "Малышка на биткоин. И другие рассказы",
    author: "Сергей Коноплицкий",
  },
  {
    id: 11,
    img: "https://books.google.com/books/content?id=HqV9EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    name: "Идеальная работа. Программирование без прикрас",
    author: "Мартин Роберт",
  },
  {
    id: 12,
    img: "https://books.google.com/books/content?id=oOBaDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    name: "Алгоритмы и структуры данных. Извлечение информации на языке Java",
    author: "Аллен Б. Доуни",
  },
  {
    id: 13,
    img: "https://books.google.com/books/content?id=RRLmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    name: "The Road to React",
    author: "Robin Wieruch",
  },
  {
    id: 14,
    img: "https://books.google.com/books/content?id=9XjyzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    name: "React Js",
    author: "Emma William",
  },
];

export const leftMenuItems = [
  {
    key: "listWebResources",
    label: <div>Главная</div>,
    icon: <NotificationOutlined />,
  },
  {
    key: "listWebResources",
    label: <div>Новости библиотеки</div>,
    icon: <NotificationOutlined />,
  },
  {
    key: "listWebResources",
    label: <div>Сотрудники библиотеки</div>,
    icon: <NotificationOutlined />,
  },
  {
    key: "listWebResources",
    label: <div>Мероприятия библиотеки</div>,
    icon: <NotificationOutlined />,
  },
  {
    key: "managers",
    label: "Managers",
    icon: <UserOutlined />,
    children: [
      {
        key: "listManagers",
        label: <div>All managers</div>,
      },
    ],
  },
];

const App: React.FC = () => {
  const [results, setResults] = useState<BookData[]>(arrayBookData);
  const [showResults, setShowResults] = useState(false);

  const onSearchLike = (e: any) => {
    const {value} = e.target;

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

  console.log("results777", results);

  return (
    <Layout>
      <StyledHeader>
        <Row style={{ background: "#001529" }}>
          <Col span={24}>
            <div
              style={{
                display: "flex",
                color: "white",
                fontSize: "35px",
                justifyContent: "space-around",
              }}
            >
              Корпоративная библиотека
            </div>
          </Col>
        </Row>
        <Row style={{ background: "#001529" }}>
          <Col span={24}>
            <div
              style={{
                display: "flex",
                color: "white",
                height: "55px",
                fontSize: "20px",
                justifyContent: "flex-end",
              }}
            >
              <div>User Name</div>
              <Avatar style={{ float: "right", margin: "13px" }} src={AV} />
            </div>
          </Col>
        </Row>
        <Row style={{ background: "#001529" }}>
          <Col span={24}>
            <div
              style={{
                display: "flex",
                gap: "30px",
                color: "white",
                height: "55px",
                fontSize: "20px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>Find Your Book Of Choice</div>
              <Search
                placeholder="find a book"
                onChange={onSearchLike}
                style={{ width: 300 }}
              />
            </div>
          </Col>
        </Row>
      </StyledHeader>
      <Layout>
        <Sider width={250}>
          <Menu
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
            items={leftMenuItems}
          />
        </Sider>
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
                        title={author}
                        hoverable
                        style={{ width: 200, fontSize: "12px" }}
                        cover={<img alt="book" src={img} />}
                      >
                        <Meta title={name} />
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

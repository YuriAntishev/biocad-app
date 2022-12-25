import { MenuProps } from "antd";
import {
  NotificationOutlined,
  UserOutlined,
  BookOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

export const leftMenuItems = [
  {
    key: "listWebResources",
    label: <div>Главная</div>,
    icon: <NotificationOutlined />,
  },
  {
    key: "libraryNews",
    label: <div>Новости библиотеки</div>,
    icon: <InfoCircleOutlined />,
  },
  {
    key: "libraryWorkers",
    label: <div>Сотрудники библиотеки</div>,
    icon: <UserOutlined />,
  },
  {
    key: "libraryActivities",
    label: <div>Мероприятия библиотеки</div>,
    icon: <BookOutlined />,
  },
];

export const items: MenuProps["items"] = [
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

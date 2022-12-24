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

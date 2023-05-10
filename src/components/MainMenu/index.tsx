import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function MainMenu() {
  const navigateTo = useNavigate();
  const currentRoute = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const currentOpenKeys = currentRoute.pathname.split('/').slice(0, -1).join('/');


  const items: MenuItem[] = [
    {
      key: "/about",
      icon: <PieChartOutlined />,
      label: "about",
    },
    {
      key: "/user",
      icon: <DesktopOutlined />,
      label: "user",
    },
    {
      key: "/3",
      icon: <UserOutlined />,
      label: "User",
      children: [
        {
          key: "/3/1",
          label: "Tom",
        },
        {
          key: "/3/2",
          label: "Bill",
        },
      ],
    },
    {
      key: "/4",
      icon: <TeamOutlined />,
      label: "Team",
      children: [
        {
          key: "/4/1",
          label: "Team11",
        },
        {
          key: "/4/2",
          label: "Team22",
        },
      ],
    },
  ];

  const onMenuOpenChange = (keys: string[]) => {
    setOpenKeys(keys.slice(-1));
  };

  const onMenuClick = (e: { key: string }) => {
    navigateTo(e.key);
  };

  useEffect(() => {
    setOpenKeys([currentOpenKeys]);
  }, [currentOpenKeys]);

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
    //   defaultOpenKeys={[defaultOpenKeys]}
      mode="inline"
      items={items}
      onClick={onMenuClick}
      openKeys={openKeys}
      onOpenChange={onMenuOpenChange}
    />
  );
}

export default MainMenu;

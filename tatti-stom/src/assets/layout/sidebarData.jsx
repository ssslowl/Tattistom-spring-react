import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import EventIcon from "@mui/icons-material/Event";

export const SidebarData = [
  {
    title: "Главная",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Пациенты",
    icon: <PersonIcon />,
    link: "/patients",
  },
  {
    title: "Докторы",
    icon: <BadgeIcon />,
    link: "/doctors",
  },
  {
    title: "Расписание",
    icon: <EventIcon />,
    link: "/events",
  },
  {
    title: "Профиль",
    icon: <PersonIcon />,
    link: "/profile",
  },
];

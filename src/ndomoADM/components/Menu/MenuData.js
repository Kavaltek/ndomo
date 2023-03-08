import React from "react";
import * as HiIcon from "react-icons/hi";

export const MenuData = [
  {
    title: 'Painel de Controle',
    path: '/dashbord',
    icon: <HiIcon.HiOutlineViewGrid className="icon-menu me-2"/>
  },
  {
    title: 'Estatística',
    path: '/estatistica',
    icon: <HiIcon.HiOutlinePresentationChartLine className="icon-menu me-2"/>
  },
 /* {
    title: 'Estatística',
    path : '/wwdwdw0w',
    icon: <HiIcon.HiOutlineHome className="icon-menu me-2"/>,
    iconClosed: <HiIcon.HiOutlineChevronDown/>,
    iconOpend: <HiIcon.HiOutlineChevronDown/>,
    subNav: [
      {
        title: 'Visitantes',
        path : '/www3'
      },
      {
        title: 'Funcionário',
        path : '/www4'
      },
      {
        title: 'Morador',
        path : '/www5'
      },
      {
        title: 'Porteiros',
        path : '/www6'
      },
    ]
  },*/
  /*{
    title: 'Finanças',
    path: '/',
    icon: <HiIcon.HiOutlineChartPie className="icon-menu me-2"/>
  },*/
  {
    title: 'Area',
    path: '/area',
    icon: <HiIcon.HiOutlineTemplate className="icon-menu me-2"/>
  },
  /*{
    title: 'Notificações',
    path: '/',
    icon: <HiIcon.HiOutlineBell className="icon-menu me-2"/>
  },*/
  {
    title: 'Gestão de usuario',
    path: '/adms',
    icon: <HiIcon.HiOutlineUsers className="icon-menu me-2"/>
  }/*,
  {
    title: 'Configuração',
    path: '/',
    icon: <HiIcon.HiOutlineCog className="icon-menu me-2"/>
  }*/
];
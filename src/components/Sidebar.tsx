"use client";

import React from "react";
import { PanelMenu } from "primereact/panelmenu";
import { MenuItem } from "primereact/menuitem";
import styles from "../styles/Sidebar.module.css";
import { useRouter } from "next/navigation";

interface SidebarProps {
  isExpanded: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded }) => {
  const router = useRouter();

  const items: MenuItem[] = [
    {
      label: "Usuarios",
      icon: "pi pi-id-card",
      items: [
        {
          label: "ABM",
          icon: "pi pi-eraser",
          command: () => router.push("/usuarios"),
        },
        {
          label: "Reporte",
          icon: "pi pi-heart",
          command: () => router.push("/usuarios/report"),
        },
      ],
    },
    {
      label: "Generic Crud",
      icon: "pi pi-crown",
      items: [
        {
          label: "ABM",
          icon: "pi pi-star",
          command: () => router.push("/generic"),
        },
        {
          label: "Reporte",
          icon: "pi pi-bookmark",
          command: () => router.push("/generic/report"),
        },
        {
          label: "crud",
          icon: "pi pi-bookmark",
          command: () => router.push("/generic/page"),
        },
      ],
    },
  ];

  return (
    <aside
      className={`${styles.sidebar} ${
        isExpanded ? styles.expanded : styles.collapsed
      }`}
    >
      {isExpanded ? (
        <PanelMenu model={items} className="w-full" />
      ) : (
        <ul className={styles.iconMenu}>
          {items.map((item, index) => (
            <li key={index} className={styles.iconItem}>
              <i className={item.icon}></i>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;

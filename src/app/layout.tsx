"use client";

import React, { useState, ReactNode } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Layout.module.css";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className={styles.layout}>
      <Navbar toggleSidebar={() => setIsExpanded(!isExpanded)} />
      <div
        className={`${styles.contentContainer} ${
          isExpanded ? styles.expanded : styles.collapsed
        }`}
      >
        <Sidebar isExpanded={isExpanded} />
        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

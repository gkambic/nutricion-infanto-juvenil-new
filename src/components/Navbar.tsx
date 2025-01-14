"use client";

import React from "react";
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const start = (
    <Button
      icon="pi pi-bars"
      className="p-button-rounded p-button-text"
      onClick={toggleSidebar}
    />
  );

  const end = (
    <div className="flex align-items-center gap-2">
      <Avatar icon="pi pi-user" size="large" shape="circle" />
    </div>
  );

  return (
    <div className="card">
      <Toolbar start={start} end={end} />
    </div>
  );
};

export default Navbar;

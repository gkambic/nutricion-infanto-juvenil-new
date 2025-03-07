"use client";

import React, { useState, ReactNode } from "react";
import Navbar from "../components/Navbar";
//import './styles/globals.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import WhatsAppIcon from '@/components/WhatsappIcon';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout-body">
      <Navbar />
      <div
      >
        <main className="layout-main">{children}</main>
        <WhatsAppIcon />
      </div>
    </div>
  );
};

export default Layout;

"use client";

import React, { useState, ReactNode } from "react";
import Navbar from "../components/Navbar";
import '.././styles/global.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import WhatsAppIcon from '@/components/WhatsappIcon';
import Footer from "@/components/Footer";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <div
      >
        <main className="layout-main" style={{ marginTop: '80px' }}>{children}</main>
        <WhatsAppIcon />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;

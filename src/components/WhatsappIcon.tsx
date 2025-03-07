"use client"; // Indica que este componente debe ejecutarse en el lado del cliente

import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Usa React Icons para el ícono de WhatsApp

const WhatsAppIcon = () => {
  const handleClick = () => {
    const phoneNumber = "5491155805506"; // Tu número de WhatsApp con el código de país
    const message = "Hola, tengo una consulta."; // Mensaje inicial
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abre WhatsApp en una nueva ventana o en la aplicación móvil si está disponible
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366", // Color de WhatsApp
        borderRadius: "50%",
        padding: "15px",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
        cursor: "pointer",
        zIndex: 1000, // Para asegurarte de que siempre esté por encima de otros elementos
      }}
    >
      <FaWhatsapp color="white" size={30} />
    </div>
  );
};

export default WhatsAppIcon;

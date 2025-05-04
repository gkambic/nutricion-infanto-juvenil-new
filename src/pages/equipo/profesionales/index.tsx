import React from 'react';
import TeamSection from '../../../components/TeamSection';
//import Layout from '../../components/Layout';

const EquipoPage: React.FC = () => {
  return (
      <TeamSection />
  );
};

export default EquipoPage;

/* import React, { useState } from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import "../../../styles/Timeline.css";
import "../../../styles/imagenPerfil.css";

interface TimelineEvent {
  Nombre?: string;
  cargo?: string;
  matricula?: string;
  icon?: string;
  color?: string;
  image?: string;
  description?: string[];
}

export default function profesionales() {
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<TimelineEvent | null>(null);

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      <span className="font-bold white-space-nowrap">Amy Elsner</span>
    </div>
  );

  const footerContent = (
    <div>
      <Button
        label="Ok"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );
  const events: TimelineEvent[] = [
    {
      Nombre: "Lic. Mariel Gabe",
      cargo: "Fundadora - Nutricionista",
      matricula: "M.N. 9459 m.p. 4598",
      icon: "pi pi-check",
      color: "#FF9800",
      image: "/images/profesionales/Lic. Mariel Gabe nutricionista.jpg",
      description: [
        "Directora equipo Nutrición Infanto Juvenil.",
        "Miembro participante de equipos interdisciplinarios para la infancia y adolescencia.",
        "Especializada en selectividad alimentaria en infancias con típico desarrollo y con condiciones del neurodesarrollo.",
        "Coach ontológica profesional (ICF).",
        "Formación en liderazgo de equipos con soft skills y en Programación neurolingüística (PNL)",
        "Diplomada universitaria en neuroeducación para el aprendizaje.",
        "Diplomada en alimentación y psicología.",
        "Posgrado en entrevista motivacional para la práctica clínico-nutricional.",
        "Consultora particular sobe consultorio de nutrición pediátrica.",
        "ex Docente carrera lic. en nutrición Universidad Nacional de Tres de Febrero (UNTREF).",
        "Ex Docente UBA – Universidad Maimonides y Universidad Isalud.",
        "Co directora – Docente cursos posgrado: Evaluación antropometrica en infancias con tipico desarrollo y con discapacidad y Perfeccionamiento en selectividad alimentaria: de la teoría a la práctica – InicYe, Facultad de ciencias medicas, Universidad Nacional de Cordoba.",
        "Docente Ateneo selectividad alimentaria en infancias diversas en Colegio de nutricionistas de la provincia de Buenos Aires.",
        "Investigadora colaboradora del Instituto de Investigaciones Clínicas y Epidemiológicas (INICyE), UNC en trabajo de investigación sobre intervenciones efectivas en infancias con selectividad alimentaria.",
        "Autora Don pepino al rescate. Amarillo Ediciones 2022",
        "Ex nutricionista de planta Centro integral de salud infantil – Municipio de Moreno.",
        "Ex fellowship en investigación en nutrición infantil en Centro de estudios sobre investigación en nutrición infantil.",
      ],
    },
    {
      Nombre: "Lic. Victoria Guerrero",
      cargo: "Nutricionista",
      matricula: "",
      icon: "pi pi-check",
      color: "#FF9800",
      image: "/images/profesionales/Lic. Victoria Guerrero.jpeg",
      description: [],
    },
    {
      Nombre: "Lic. Melisa Gomez",
      cargo: "Nutricionista",
      matricula: "",
      icon: "pi pi-check",
      color: "#FF9800",
      image: "/images/profesionales/Lic. Melisa Gomez.jpg",
      description: [
        "Formación profesional en alimentación complementaria BLW.",
        "Formación en neofobia y selectividad alimentaria infantil.",
        "Formación en alimentación en infancias con discapacidad y situaciones especiales.",
        "Curso de posgrado en Enfoque Integrador en neurodesarrollo y TEA | SANyT.",
        "Curso de posgrado Actualización en Nutrición Clínica Pediátrica y del Adulto.",
        "Curso de oratoria aplicado al desarrollo del ejercicio profesional.",
        "Docente universitaria UCALP y UNLP.",
        "Disertante en “Taller de Alimentación complementaria. Papillas y BLW/BLISS” (virtual).",
        "Disertante en “Taller de acompañamiento integral para personas gestantes” (presencial).",
        "Atención en consultorio particular y Centro de Desarrollo Infantil Sukha a infancias con desarrollo típico y atípico.",
      ],
    },
    {
      Nombre: "Lic. Erika Noelia Skrypnik",
      cargo: "Nutricionista",
      matricula: "",
      icon: "pi pi-check",
      color: "#FF9800",
      image: "/images/profesionales/Lic. Erika Noelia Skrypnik.jpg",
      description: [],
    },
    {
      Nombre: "Dra. Debora Norte",
      cargo: "Pediatra",
      matricula: "",
      icon: "pi pi-check",
      color: "#FF9800",
      image: "/images/profesionales/Dra. Debora Norte pediatra.jpg",
      description: [
        "Alimentación complementaria.",
        "Selectividad alimentaria.",
        "Alimentación basada en plantas en infancias y adolescencia.",
        "Auditoría médica, administración y gestión hospitalaria.",
        "Asesoría en lactancia.",
        "Manejo integral y transdiciplinario de frenillo lingual alterado en lactantes y niños pequeños.",
      ],
    },
  ];

  const openDialog = (item: TimelineEvent) => {
    setSelectedItem(item); // Guardamos el ítem seleccionado
    setVisible(true); // Mostramos el diálogo
  };

  const customizedMarker = (item: TimelineEvent) => {
    return (
      <span
        className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
        style={{ backgroundColor: item.color }}
      >
        <i className={item.icon}></i>
      </span>
    );
  };

  const customizedContent = (item: TimelineEvent) => {
    return (
      <Card
        title={item.Nombre}
        subTitle={item.cargo}
        header={
          <div className="profileWrapper">
            <img alt="Card" src={item.image} className="profileImage" />
          </div>
        }
      >
        {item.matricula && <p>Matricula: {item.matricula}</p>}
        <Button
          label="Read more"
          className="p-button-text"
          onClick={() => openDialog(item)}
        />
      </Card>
    );
  };

  return (
    <div className="card">
      <Timeline
        value={events}
        align="alternate"
        className="customized-timeline"
        marker={customizedMarker}
        content={customizedContent}
      />

      <Dialog
        visible={visible}
        modal
        header={selectedItem?.Nombre}
        footer={footerContent}
        style={{ width: "50rem" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <ul className="list-disc ml-6 mb-4">
          {selectedItem?.description?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Dialog>
    </div>
  );
}
 */
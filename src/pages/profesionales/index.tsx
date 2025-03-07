import React from 'react';
import PropuestasSection from '../../components/PorpuestasSection';
import '../../styles/propuestas.css';


const PropuestaProfesionalesPage: React.FC = () => {
    const cardsData = [
        {
            imageUrl: 'https://nutricioninfantojuvenil.com.ar/wp-content/uploads/2024/04/Imagen-de-WhatsApp-2024-04-02-a-las-12.08.48_2aa315e7.jpg',
            title: 'Consultorías individuales sobre atención en consultorio de nutrición pediátrica',
            description: 'En estos encuentros trabajamos sobre:',
            listItems: [
            'La confianza en nosotros mismos/as para iniciar a trabajar con infancias y familias.',
            'Como ponerle valor a lo que hacemos.',
            'Que significa la empatía cuando trabajamos con familias.',
            'Lo importante de la escucha activa.',
            'Las etapas de la infancia y posibles estrategias acordes.',
            'Como intervenir ante ciertas dificultades alimentarias.',
            'Trabajo inter y transdiciplinario en pediatría.',
            'Analizamos Casos clínicos.',
            'Y varias cosas más.',
            ],
            buttonText: 'Contactar',
            buttonLink: 'https://wa.me/5491155805506',
            isReversed: false, // Imagen a la izquierda
        },
        {
          imageUrl: 'https://nutricioninfantojuvenil.com.ar/wp-content/uploads/2024/02/nina-suficiente-comida-saludable_23-2148281903.webp',
          title: 'Taller selectividad alimentaria infantil',
          description: 'Temario del taller:',
          listItems: [
            'Etapas del desarrollo y su relación con la alimentación y el crecimiento.',
            'Conceptos básicos para la comprensión de las familias sobre el trastorno del procesamiento sensorial y otras situaciones patológicas que pudieran producir la selectividad alimentaria.',
            'Rol de las familias y características de las infancias.',
            'Neofobia vs. Trastorno alimentario. Clasificación de la selectividad.',
            'Estrategias generales de abordaje: Ideas de menú, encadenamiento de alimentos y juegos acordes a la edad.',
            'Banderas orgánicas y conductuales a tener en cuenta en el desarrollo de la selectividad.',
          ],
          buttonText: 'Contactar',
          buttonLink: 'https://wa.me/5491155805506',
          isReversed: true, // Imagen a la izquierda
      },
      {
        imageUrl: 'https://nutricioninfantojuvenil.com.ar/wp-content/uploads/2024/05/5a7e9954-e5fa-4c97-9d36-2cad2f4e6d17.jpg',
        title: 'Curso: Evaluación antropométrica pediátrica en infancias con tipico desarrollo y con discapacidad',
        description: 'Objetivo general:',
        listItems: [
          'Aprender a aplicar estrategias de evaluación antropométrica pediátrica para la práctica clínica.',
          'Realizar una evaluación antropométrica pediátrica adecuada, considerando todas las variables existentes, tanto en infancias con típico desarrollo como en aquellas con discapacidad.',
          'Aprendan a distinguir los distintos tipos de evaluaciones antropométricas, según se trate de infancias con desarrollo típico como con discapacidad.',
          'Hacer una lectura crítica de las evaluaciones antropométricas realizadas tanto en infancias con típico desarrollo como en aquellas con discapacidad.',
        ],
        buttonText: 'Contactar',
        buttonLink: 'https://wa.me/5491155805506',
        isReversed: false, // Imagen a la izquierda
    },
    {
      imageUrl: 'https://nutricioninfantojuvenil.com.ar/wp-content/uploads/2024/08/a95800e7-ff60-49cf-bbef-a23ca79d1ad2.jpeg',
      title: 'Curso: Perfeccionamiento en selectividad alimentaria: de la teoría a la práctica',
      description: 'Objetivo general:',
      listItems: [
        'Identificar las características de una alimentación selectiva identificada como una problemática alimentaria',
        'Reconocer cuando la selectividad alimentaria compromete el crecimiento y desarrollo esperado de un niño/a.',
        'Vincular los conceptos de la integración sensorial y abordaje conductual con el tratamiento de la selectividad alimentaria.',
        'Distinguir aquellos recursos que ayuden al niño y la familia a generar un contexto agradable y previsible que disponga mejor para la ingesta y nueva ingesta alimentaria.',
        'Comprender particularidades en el abordaje de la selectividad alimentaria en infancias con trastorno de evitación/restricción de la ingesta de alimentos (TERIA).',
        'Analizar estrategias de intervención para el abordaje de la selectividad alimentaria tanto en niños con típico desarrollo, en niños con discapacidad y con trastornos alimentarios como rumiación y PICA.',
      ],
      buttonText: 'Contactar',
      buttonLink: 'https://wa.me/5491155805506',
      isReversed: true, // Imagen a la izquierda
  },
        ];
  return (
    <main>
      <PropuestasSection cardsData={cardsData}/>
    </main>
  );
};

export default PropuestaProfesionalesPage;

'use client';
import React, { useEffect, useState } from 'react';
import PropuestasSection from '../../components/PorpuestasSection';
import '../../styles/propuestas.css';
import { GetPropuestas } from '@/services/dataBaseService';
import { PropuestasCardProps } from '@/components/PropuestasCard';

const FamiliasPage: React.FC = () => {
    const [data, setData] = useState<PropuestasCardProps[]>([]);
    const cardsData = [
        {
            imageUrl: 'https://nutricioninfantojuvenil.com.ar/wp-content/uploads/2024/02/Imagen-de-WhatsApp-2024-02-26-a-las-14.16.37_8038b9a0.webp',
            title: 'Tratamiento intensivo de selectividad alimentaria infantojuvenil',
            description: '¿Por qué el tratamiento Intensivo?',
            listItems: [
            'Porque trabajamos 100% personalizado, alrededor de una hora en cada consulta.',
            'Porque trabajamos con los peques y sus familias. Enfocándonos en las posibilidades de cada uno de ellos.',
            'Porque trabajamos en equipo con sus otros profesionales tratantes, si es que lo hay, y si es necesario creamos redes de derivación dentro y fuera del equipo.',
            'Porque individualizamos las pautas y las estrategias y enviamos actividades y tareas para trabajar en casa con la familia.',
            'Porque supervisamos los casos dentro del equipo y trabajamos en grupo de estudio para mejorar y tener nuevas herramientas en nuestras intervenciones.',
            'Porque entendemos que cada persona tiene su tiempo de aprender y llevar a cabo el proceso. Por lo cual, en cada consulta, avanzamos conforme a eso.',
            'Porque nos comunicamos entre consultas si es necesario para acompañarlos.',
            ],
            buttonText: 'Contactar',
            buttonLink: 'https://wa.me/5491155805506',
            isReversed: false, // Imagen a la izquierda
        },
        {
            imageUrl: 'https://nutricioninfantojuvenil.com.ar/wp-content/uploads/2024/02/concepto-dieta-cientifica-comida-sana_23-2148193255.jpg',
            title: 'Consultorio para adultos',
            description: '¿Cómo es una consulta con nosotras?',
            listItems: [
            'Charlamos sobre tu historia, hábitos y rutina.',
            'Reflexionamos sobre tu manejo del estrés, tu descanso, el ambiente personal y laboral, las relaciones sociales y cómo influyen en tu forma de alimentarte.',
            'Planteamos objetivos posibles juntos para el próximo encuentro.',
            'Te brindamos herramientas para que puedas cumplir con tus objetivos.',
            'Explicamos conceptos, respondemos dudas, te escuchamos.',
            'No te juzgamos, no te cuestionamos, no te retamos.',
            'Trabajamos en equipo derivando y realizando interconsultas necesarias.',
            ],
            buttonText: 'Consultar',
            buttonLink: '#contacto',
            isReversed: true, // Imagen a la izquierda
        },
        {
            imageUrl: 'https://nutricioninfantojuvenil.com.ar/wp-content/uploads/2024/02/nina-suficiente-comida-saludable_23-2148281903.webp',
            title: 'Taller selectividad alimentaria infantil',
            description: 'Objetivo general:',
            listItems: [
            'Brindar herramientas y estrategias para mejorar la selectividad alimentaria de los niños y niñas y conocer la diferencia entre los comportamientos esperables de los que no.',
            'Etapas del desarrollo y su relación con la alimentación y el crecimiento.',
            'Conceptos básicos para la comprensión de las familias sobre el trastorno del procesamiento sensorial y otras situaciones patológicas que pudieran producir la selectividad alimentaria.',
            'Rol de las familias y características de las infancias.',
            'Neofobia vs. Trastorno alimentario. Clasificación de la selectividad.',
            'Estrategias generales de abordaje: Ideas de menú, encadenamiento de alimentos y juegos acordes a la edad.',
            'Banderas orgánicas y conductuales a tener en cuenta en el desarrollo de la selectividad.',
            'Además, realizamos un intercambio entre los participantes para, entre todos/as, compartir experiencias, sentires, ideas y estrategias!!',
            'Se entrega material luego del taller.',
            'Próximamente nueva fecha. Si te interesa recibir información del lanzamiento, ¡escribinos!',
            ],
            buttonText: 'Consultar',
            buttonLink: '#contacto',
            isReversed: false, // Imagen a la izquierda
        },
        ];
    /* useEffect(() => {
        (async () => {
            const filters: any = [1];
            const { data: result} = await GetPropuestas(filters);
            setData(result);
        })();
    }, []); */
  return (
    <main>
      <PropuestasSection cardsData={cardsData}/>
    </main>
  );
};

export default FamiliasPage;

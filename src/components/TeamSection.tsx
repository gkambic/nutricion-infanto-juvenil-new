import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const team = [
  {
    id: 1,
    name: 'Lic. Mariel Gabe',
    title: 'Fundadora - Nutricionista',
    photo: '/images/profesionales/Lic. Mariel Gabe nutricionista.jpg',
    bio: 'Mariel combina ciencia y pasión para crear planes nutricionales a medida, promoviendo hábitos duraderos.',
  },
  {
    id: 2,
    name: 'Lic. Victoria Guerrero',
    title: 'Nutricionista',
    photo: '/images/profesionales/Lic. Victoria Guerrero.jpeg',
    bio: 'Victoria enfoca la nutrición funcional y bienestar integral, con seguimiento personalizado.',
  },
  {
    id: 3,
    name: 'Lic. Melisa Gomez',
    title: 'Nutricionista',
    photo: '/images/profesionales/Lic. Melisa Gomez.jpg',
    bio: 'Melisa se especializa en nutrición deportiva y rendimiento, adaptando dietas a objetivos específicos.',
  },
  {
    id: 4,
    name: 'Lic. Erika Noelia Skrypnik',
    title: 'Nutricionista',
    photo: '/images/profesionales/Lic. Erika Noelia Skrypnik.jpg',
    bio: 'Erika trabaja en salud digestiva y alimentaria, diseñando planes con enfoque clínico.',
  },
  {
    id: 5,
    name: 'Dra. Debora Norte',
    title: 'Pediatra',
    photo: '/images/profesionales/Dra. Debora Norte pediatra.jpg',
    bio: 'La Dra. Debora cuida la nutrición infantil y ofrece seguimiento médico especializado.',
  },
];

export default function TeamPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Fondo suave */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-gradient-to-br from-red-100 via-green-100 to-yellow-100" />

      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Nuestro Equipo</h1>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Contamos con un equipo multidisciplinario de profesionales dedicados a tu salud.
        </p>
      </header>

      <main className="px-6 lg:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member) => (
          <motion.div
            key={member.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(member)}
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-inner">
              <Image
                src={member.photo}
                alt={member.name}
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-800 text-center">{member.name}</h2>
            <p className="text-green-600 font-medium text-center">{member.title}</p>
          </motion.div>
        ))}
      </main>

      {/* Detalle en Dialog */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-green-200 shadow-lg">
                <Image
                  src={selected.photo}
                  alt={selected.name}
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-800 text-center">{selected.name}</h2>
              <p className="text-center text-green-600 font-medium">{selected.title}</p>
              <p className="mt-4 text-gray-600 text-center">{selected.bio}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* 
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/imagenPerfil.css'
import 'bootstrap/dist/css/bootstrap.min.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  detailLink: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Lic. Mariel Gabe',
    title: 'Fundadora - Nutricionista',
    photo: '/images/profesionales/Lic. Mariel Gabe nutricionista.jpg',
    detailLink: '/team-details',
  },
  {
    id: 2,
    name: 'Lic. Victoria Guerrero',
    title: 'Nutricionista',
    photo: '/images/profesionales/Lic. Victoria Guerrero.jpeg',
    detailLink: '/team-details',
  },
  {
    id: 3,
    name: 'Lic. Melisa Gomez',
    title: 'Nutricionista',
    photo: '/images/profesionales/Lic. Melisa Gomez.jpg',
    detailLink: '/team-details',
  },
  {
    id: 4,
    name: 'Lic. Erika Noelia Skrypnik',
    title: 'Nutricionista',
    photo: '/images/profesionales/Lic. Erika Noelia Skrypnik.jpg',
    detailLink: '/team-details',
  },
  {
    id: 5,
    name: 'Dra. Debora Norte',
    title: 'Pediatra',
    photo: '/images/profesionales/Dra. Debora Norte pediatra.jpg',
    detailLink: '/team-details',
  },
];

const TeamSection = () => {
  return (
    <div className="container">
      <div className="row">
        {teamMembers.map((member) => (
          <div key={member.id} className="col-lg-4 col-md-6 mb-4">
            <div className="pepe h-100">
              <Image
                src={member.image}
                alt={member.name}
                className="pepe-img-top"
                width={400}
                height={400}
                style={{ objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
                <Link legacyBehavior  href={member.detailLink} passHref>
                  <a className="btn btn-primary">Ver detalles</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeamSection;
 */
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section id="nosotros" className="bg-classic flex flex-col items-center p-4">

      {/* Títulos y textos */}
      <div className="text-center max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">¿Quiénes somos?​</h2>
        <p className="mb-4">
          Nuestro equipo está formado por profesionales especializadas en las dificultades alimentarias en la infancia. Trabajamos con familias de todo el país. Somos profesionales enfocadas en el bienestar y en la salud integral de nuestras personas consultantes, respetando y acompañando con una mirada respetuosa y amorosa.
        </p>
        <p className="mb-4">
          Creemos fuertemente en el acompañamiento y la motivación como aliados esenciales para lograr la efectividad de los tratamientos.
        </p>
        <h5 className="text-xl font-semibold">Equipo Nutrición Infanto Juvenil</h5>
      </div>
    </section>
  );
};

export default AboutUs;

// pages/index.tsx
import React from 'react';
import Layout from '../app/layout';
import withAuth from '../lib/withAuth';

const HomePage: React.FC = () => {
  return (
    <div>
      <h2>Bienvenido a la Aplicación</h2>
    </div>
  );
};

export default HomePage;
//export default withAuth(HomePage);

import Loader from '../components/loader';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AnimatedRoutes from '../utils/animatedRoutes';
import Header from '../pages/header';

const Router = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Header />
      <HelmetProvider>
        <Helmet>
          <title >Kaam Keeda</title>
          <meta name='description' content='No App. Just WhatsApp.' />
          <meta name='keywords' content='Search | Chat | Order | all on whatsapp' />
          <meta name='description' content='Introducing a new way to shop online' />
        </Helmet>
      </HelmetProvider>
      <AnimatedRoutes />
    </React.Suspense>
  );
};

export default Router;

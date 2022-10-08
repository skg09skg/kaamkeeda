import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
      </Switch>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;
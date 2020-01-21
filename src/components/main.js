import React from 'react';
import { Route } from 'react-dom'
import About from "./about";

const Main = () => (
    <Route path="/" component={About} />
)
  
export default Main;
import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App(){
  return (
    <HashRouter>
      <Route path="/" exact={true} component={home} />
      <Route path="/about" component={about}/>
    </HashRouter>
  );
}

export default App;
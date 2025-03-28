import React from "react";
import Estado from "./Estado";
import String from "./String";
import Boolean from "./Boolean";
import Lista from "./Lista";
import Objeto from "./Objeto";
import Clase from "./Clase";

const App = () => {
  return (
    <div>
      <Estado />
      <String />
      <Boolean />
      <Lista />
      <Objeto />
      <Clase />
    </div>
  );
};

export default App;
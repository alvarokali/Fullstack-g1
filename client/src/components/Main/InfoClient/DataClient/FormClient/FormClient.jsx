import React from "react";

const FormClient = () => {
  return <>
    <form>   
      <input type="text" placeholder="Nombre y apellido"/>
      <input type="text" placeholder="Dirección"/>  
      <input type="text"  placeholder="Compañía actual"/>
    </form>
    <button>Continuar</button>
  </>;
};

export default FormClient;

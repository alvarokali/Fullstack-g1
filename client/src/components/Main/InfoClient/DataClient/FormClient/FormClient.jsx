import React from "react";
import { Link } from "react-router-dom";

const FormClient = () => {
  return <>
    {/* <form>   
      <input type="text" placeholder="Nombre y apellido"/>
      <input type="text" placeholder="Dirección"/>  
      <input type="text"  placeholder="Compañía actual"/>
      <Link to="/energy"><button>Continuar</button></Link>
    </form> */}

    <form>
  <div class="form-group">
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nombre y apellidos"/>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Dirección"/>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Compañía actual"/>
  </div>
  <Link to="/energy"><button>Continuar</button></Link>
  <Link to="/home"><button>Atrás</button></Link>
</form>
   
  </>;
};

export default FormClient;

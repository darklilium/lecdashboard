import React from 'react';
import styles from '../css/styles.css';
import HoyTenemos from './HoyTenemos';
import Ordenes from './Ordenes';
import ClientesLeidos from './ClientesLeidos';
import PerdidasEstadisticas from './PerdidasEstadisticas';
import CicloFacturacion from './CicloFacturacion';
import Reparticiones from './Reparticiones';
import CantidadFacturada from './CantidadFacturada';
import NuevosClientes from './NuevosClientes';


//Clase principal donde se envían parametros para los otros componentes.
class Main extends React.Component {
  render() {
    return (

      <div className="grid-container">
        <div className="logo"><img className="logo_img" src="./src/images/logo.png"></img></div>
        <HoyTenemos cantidadLectores={75}></HoyTenemos>
        <Ordenes ordenesCriticas={7869} ordenesAnalisis={377} ordenesCierreMass={368}></Ordenes>
        <ClientesLeidos cantidadClientesLeidos={14860}></ClientesLeidos>
        <PerdidasEstadisticas perdidaMesPorcentaje={8.19} perdidaMesGwh={19.9} perdidasAñoPorcentaje={8.30} perdidasAñoGwh={240.1}></PerdidasEstadisticas>
        <CicloFacturacion numeroCiclo={5}></CicloFacturacion>
        <CantidadFacturada mes1={'OCTUBRE'} cantidadMes1={10.14} mes2={'NOVIEMBRE'} cantidadMes2={'9.59'}></CantidadFacturada>
        <Reparticiones cantidadBoletas={22.635}></Reparticiones>
        <NuevosClientes mes={'Octubre'} cantidadClientesCreados={1.338} clientesIncorporados={13.161}></NuevosClientes>
        <div className="footer"><img className="footer_img" src="./src/images/background.png"></img></div>
        
      </div>
    );
  }
}

export default Main;


import React from 'react';
import { Container, Statistic, Label, Segment } from 'semantic-ui-react'
class CicloFacturacion extends React.Component {
    render() {
        const {numeroCiclo} = this.props;
        return (

            <div className="grid-ciclo-facturacion">
                <Segment className="red_box ciclo_facturacion_box" padded>
                    <Label className="red_box_title" color="red" attached='top'>Facturación</Label>
                   
                    <div className="wrapper_facturacion">
                        <Statistic className="clientes_leidos_statistics"> 
                            <Statistic.Value className="statistics_values">{numeroCiclo}</Statistic.Value>
                            <Statistic.Label className="statistics_labels">Ciclo</Statistic.Label>
                        </Statistic>

                       
                    </div>
                   
                </Segment>
            </div>
        );
    }
}

export default CicloFacturacion;


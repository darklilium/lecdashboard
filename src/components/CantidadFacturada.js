import React from 'react';
import { Container, Statistic, Label, Segment } from 'semantic-ui-react'
class CantidadFacturada extends React.Component {
    render() {
        const {mes1, cantidadMes1, mes2, cantidadMes2 } = this.props;
        return (

            <div className="grid-cantidad-facturada">
                <Segment className="red_box cantidad_facturada_box" padded>
                    <Label className="red_box_title" color="red" attached='top'>Cantidades</Label>


                    <div className="ciclo_facturacion_gwh">
                        <Statistic size="mini" className="ciclo_facturacion_mini">
                            <Statistic.Value className="statistics_values">{cantidadMes1}Gwh</Statistic.Value>
                            <Statistic.Label className="statistics_labels">{mes1}</Statistic.Label>
                        </Statistic>

                        <Statistic size="mini" className="ciclo_facturacion_mini">
                            <Statistic.Value className="statistics_values">{cantidadMes2}Gwh</Statistic.Value>
                            <Statistic.Label className="statistics_labels">{mes2}</Statistic.Label>
                        </Statistic>
                    </div>

                </Segment>
            </div>
        );
    }
}

export default CantidadFacturada;




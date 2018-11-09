import React from 'react';
import { Container, Statistic, Label, Segment } from 'semantic-ui-react'
class Ordenes extends React.Component {
    render() {
        const {ordenesCriticas, ordenesAnalisis, ordenesCierreMass} = this.props;
        return (

            <div className="grid-ordenes">
                <Segment className="red_box ordenes_box" padded>
                    <Label className="red_box_title" color="red" attached='top'>Tenemos</Label>
                   
                    <Statistic className="statistics_wrappers no-padding-top">
                        <Statistic.Value className="statistics_values">{ordenesCriticas}</Statistic.Value>
                        <Statistic.Label className="statistics_labels">Órdenes Críticas Pendientes</Statistic.Label>
                        
                        <div className="statistics_horizontal_wrapper">
                         <Statistic className="statistics_horizontal_" horizontal label='Cierre por Análisis' value={ordenesAnalisis} />
                         <Statistic className="statistics_horizontal_ noLeftMargin" horizontal label='Cierre masivo' value={ordenesCierreMass} />
                  
                        </div>
                    </Statistic>
                   
                </Segment>
            </div>
        );
    }
}

export default Ordenes;

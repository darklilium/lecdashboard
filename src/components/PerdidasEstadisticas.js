import React from 'react';
import { Statistic, Divider, Label, Segment } from 'semantic-ui-react'
class PerdidasEstadisticas extends React.Component {
    render() {
        const {perdidaMesPorcentaje, perdidaMesGwh, perdidasAñoPorcentaje, perdidasAñoGwh} = this.props;
        return (

            <div className="grid-perdidas">
                <Segment className="red_box box_perdidas_mes" padded>
                    <Label className="red_box_title " color="red" attached='top'>Tipos de Pérdidas</Label>
                    <Statistic className="statistics_titles">
                        <Statistic.Label>Pérdida del mes</Statistic.Label>
                    </Statistic>
                    <div className="results_wrapper">
                        <div className="percentaje_wrapper">
                            <Statistic size="mini" >
                                <Statistic.Value>{perdidaMesPorcentaje}%</Statistic.Value>
                            </Statistic>

                        </div>

                        <div className="gwh_wrapper">
                            <Statistic size="mini" >
                                <Statistic.Value>{perdidaMesGwh}Gwh</Statistic.Value>
                            </Statistic>
                        </div>


                    </div>

                    <Statistic className="statistics_titles">
                        <Statistic.Label>Pérdida año móvil</Statistic.Label>
                    </Statistic>
                    <div className="results_wrapper">
                        <div className="percentaje_wrapper">
                            <Statistic size="mini" className="font_values">
                                <Statistic.Value className="font_values">{perdidasAñoPorcentaje}%</Statistic.Value>
                            </Statistic>


                        </div>

                        <div className="gwh_wrapper">
                            <Statistic size="mini" className="font_values">
                                <Statistic.Value className="font_values">{perdidasAñoGwh}Gwh</Statistic.Value>
                            </Statistic>
                        </div>


                    </div>


                </Segment>


            </div>
        );
    }
}

export default PerdidasEstadisticas;


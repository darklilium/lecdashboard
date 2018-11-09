import React from 'react';
import { Header, Statistic, Label, Segment } from 'semantic-ui-react'
class NuevosClientes extends React.Component {
    render() {
        const {mes, cantidadClientesCreados, clientesIncorporados} = this.props;
        return (

            <div className="grid-nuevos-clientes">
                <Segment className="red_box nuevos_clientes_box" padded>
                    <Label className="red_box_title" color="red" attached='top'>Nuevos Clientes</Label>
                    
                    <div className="statistics_wrappers">
                        <Header className="header_" color="grey" as='h4'>En el mes de</Header>
                   
                        <Statistic  size="tiny" className="statistics_wrappers">
                            <Statistic.Value className="statistics_values">{mes}</Statistic.Value>
                            
                        </Statistic>
                        <Statistic  size="tiny" className="noLeftMargin">
                            
                            <Statistic.Label className="statistics_labels">Se crearon</Statistic.Label>
                            <Statistic.Value className="statistics_values">{cantidadClientesCreados}</Statistic.Value>
                        </Statistic>

                        <Header className="header_" color="grey" as='h3'>Se han incorporado</Header>

                        <Statistic  size="tiny" className="noLeftMargin">
                            
                           
                            <Statistic.Value className="statistics_values">{clientesIncorporados}</Statistic.Value>
                            <Statistic.Label className="statistics_labels">Durante el año</Statistic.Label>
                        </Statistic>

                    </div>   
                    
                </Segment>

                
                    
               
            </div>
        );
    }
}

export default NuevosClientes;


import React from 'react';
import { Container, Statistic, Label, Segment } from 'semantic-ui-react'
class ClientesLeidos extends React.Component {
    render() {

        const {cantidadClientesLeidos} = this.props;
        return (

            <div className="grid-clientes-leidos">
                <Segment className="red_box clientes_leidos_box" padded>
                    <Label className="red_box_title" color="red" attached='top'>Durante el día se han leído</Label>
                   
                    <Statistic className="statistics_wrappers"> 
                        <Statistic.Value className="statistics_values">{cantidadClientesLeidos}</Statistic.Value>
                        <Statistic.Label className="statistics_labels">Clientes</Statistic.Label>
                    </Statistic>
                   
                </Segment>
            </div>
        );
    }
}

export default ClientesLeidos;


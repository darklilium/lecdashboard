import React from 'react';
import { Container, Statistic, Label, Segment } from 'semantic-ui-react'
class HoyTenemos extends React.Component {
    
    render() {
        const {cantidadLectores} = this.props;
        return (
         

            <div className="grid-hoy-tenemos">
                <Segment className="red_box  hoy_tenemos_box" padded>
                    <Label className="red_box_title" color="red" attached='top'>Hoy Tenemos</Label>
                    
                    <Statistic className="statistics_wrappers">
                        <Statistic.Value className="statistics_values">{cantidadLectores}</Statistic.Value>
                        <Statistic.Label className="statistics_labels">Lectores en Terreno</Statistic.Label>
                    </Statistic>
                   
                </Segment>
            </div>
        );
    }
}

export default HoyTenemos;


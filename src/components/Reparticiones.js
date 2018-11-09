import React from 'react';
import { Header, Statistic, Label, Segment } from 'semantic-ui-react'
class Reparticiones extends React.Component {
    render() {
        const {cantidadBoletas} = this.props;
        return (

            <div className="grid-reparticiones">
                <Segment className="red_box reparticiones_box" padded>
                    <Label className="red_box_title" color="red" attached='top'>Hoy se repartirán</Label>
                    
                    <Statistic className="statistics_wrappers">
                        <Statistic.Value className="statistics_values">{cantidadBoletas}</Statistic.Value>
                        <Statistic.Label className="statistics_labels">Boletas</Statistic.Label>
                    </Statistic>
                                     
                    
                </Segment>

                
                    
               
            </div>
        );
    }
}

export default Reparticiones;


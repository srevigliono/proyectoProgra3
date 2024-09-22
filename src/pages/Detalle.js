import React, {Component} from 'react';
import Detail from '../components/Detail/Detail';


class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
     
    render () {
        return (
                <Detail id= {this.props.match.params.id}/>
        )
    }
}

export default Detalle;
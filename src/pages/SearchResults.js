import { Component } from "react";

export class SearchResults extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>Resultados de Busqueda:  {this.props.location.state.query}</div>
        )
    }
}
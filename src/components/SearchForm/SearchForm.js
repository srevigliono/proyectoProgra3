import { Component } from "react";
import './SearchForm.css';

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value
    });
  };

  handleInputSubmit = () => {
    const { query } = this.state;
    
      this.props.history.push({pathname: '/search', state: { query }});
    
  };

  render() {
    return (
      <div className="search">
        <input onChange={this.handleInputChange} />
        <button onClick={this.handleInputSubmit}>Buscar Película</button>
      </div>
    );
  }
}

export default SearchForm;
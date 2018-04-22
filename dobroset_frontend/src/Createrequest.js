import React, { Component } from 'react';

import { Button, FormControl} from 'react-bootstrap';


class Createrequest extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state={
      value:""
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (

<div >
<FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />

      </div>
    );
  }
}

export default Createrequest;
import React, { Component } from 'react';

class Select extends Component {
  constructor(props){
  	super(props);
    this.handleSelectChange = this.props.handleSelectChange.bind(this);
  }	

  render() {
    return(
    	<select value={this.props.selectValue} onChange={this.handleSelectChange} style={{marginLeft: '150px', backgroundColor: '#BDC9CB'}}>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    );

  }
}

export default Select;
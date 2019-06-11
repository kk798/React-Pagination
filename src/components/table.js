import React, { Component } from 'react';
import Pagination from './pagination';
import Select from './select-paginate';

class Table extends Component {
  
		constructor(props){
			super(props);

			this.state = {
				currentPage: 1,
				perPage: 3,
				source: this.props.data,
				data: this.props.data.slice(0, 3),
				selectValue: 3
			};
			this.handleClick = this.handleClick.bind(this);
			this.handleSelectChange = this.handleSelectChange.bind(this);
		}

  	handleClick(e){
  		const indexOfLast = e.target.id * this.state.perPage;
  		const indexOfFirst = indexOfLast - this.state.perPage;

  		const dataAfter = this.state.source.slice(indexOfFirst, indexOfLast);

    	this.setState({
    		currentPage: Number(e.target.id),
    		data:dataAfter
    	 })	
    }
  
    handleSelectChange(e){

    	const indexOfLast = 1 * e.target.value;
  		const indexOfFirst = indexOfLast - e.target.value;

  		const dataAfter = this.state.source.slice(indexOfFirst, indexOfLast);

	    this.setState({
	    	selectValue: Number(e.target.value),
	    	currentPage: 1,
	    	data:dataAfter,
	    	perPage: Number(e.target.value)
	    })
	}

  render() {
    return (
      <div>
      	<div className="row">
      		<table className="table table-striped text-center col-sm-8" style={{ marginTop: 20 }}>
		            <thead>
		              <tr>
		              	<th>Id</th>
		                <th>Name</th>
		                <th>Gender</th>
		                <th>Email</th>
		                <th>Phone</th>
		              </tr>
		            </thead>
		            <tbody>{
					this.state.data.map((value, index) => {
					        return (
					        	<tr key={index}>
					        		<td>{value.id}</td>
						        	<td>{value.name}</td>
						        	<td>{value.gender}</td>
						        	<td>{value.email}</td>
						        	<td>{value.phone}</td>
					        	</tr>
					        )
					      })

		            }</tbody>
		    </table>	
      	</div>
        <Pagination perPage={this.state.perPage} total={this.props.data.length} handleClick={this.handleClick}/>
        <Select selectValue={this.state.selectValue}  handleSelectChange={this.handleSelectChange}/>
      </div>
    );

  	}


}

export default Table;







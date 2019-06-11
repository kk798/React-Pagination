import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props){
  	super(props);
 	this.handleClick = this.props.handleClick.bind(this);
  }	

  render() {
  	const perPage = this.props.perPage;  	
  	const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.total / perPage); i++) {
      pageNumbers.push(i);
    }

    return(

	    pageNumbers.map(number => {
	    	      return (
	    	        <li
	    	          style={{display: 'inline-block', margin: '20px', backgroundColor: '#BDC9CB', width: '20px', textAlign: 'center'}}
	    	          key={number}
	    	          id={number}
	    	          onClick={this.handleClick}
	    	        >
	    	          {number}
	    	        </li>
	    	      );
	    	    })

    );

  }
}

export default Pagination;
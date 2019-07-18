import React from 'react';
import './Sponsored.css';
import CardContainer from './CardContainer/CardContainer';

class Sponsored extends React.Component{

	render(){
		return(
			<section className="sponsor-container">	
				<p id="sponsor-container">Sponsored restaurants in your area</p>
				<CardContainer/>
			</section>
			)
	}
}

export default Sponsored;
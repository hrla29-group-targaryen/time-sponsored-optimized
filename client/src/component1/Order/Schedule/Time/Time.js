import React from 'react';
import './Time.css';

class Time extends React.Component{
	constructor(props){
		super(props)
		this.state={}
		this.handleSelect=this.handleSelect.bind(this)
	}

	handleSelect(event){
		this.props.time_changer(event.target.value)
	}

	render(){
		return(
				<section className="order-schedule-items-today">
					<select className="order-schedule-items-today-select" value={this.props.time_selected} onChange={this.handleSelect}>
					  <option value="8:00am"> 8:00am </option>
					  <option value="9:00am"> 9:00am </option>
					  <option value="10:00am"> 10:00am </option>
					  <option value="11:00am"> 11:00am </option>
					  <option value="12:00pm"> 12:00am </option>
					  <option value="1:00pm"> 1:00pm </option>
					  <option value="2:00pm"> 2:00pm </option>
					  <option value="3:00pm"> 3:00pm </option>
					  <option value="4:00pm"> 4:00pm </option>
					  <option value="5:00pm"> 5:00pm </option>
					  <option value="6:00pm"> 6:00pm </option>
					  <option value="7:00pm"> 7:00pm </option>
					  <option value="8:00pm"> 8:00pm </option>
					  <option value="9:00pm"> 9:00pm </option>
					  <option value="10:00pm"> 10:00pm </option>
					</select>
				</section>
			)
	}
}

export default Time;
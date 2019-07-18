import React from 'react'
import './Schedule.css'
import Calendar from './Calendar/Calendar'
import Time from './Time/Time'

class Schedule extends React.Component{
	constructor(props){
		super(props)
		this.state={
			button_selected: "today", // "asap" || "today" || "later",
			time_selected: "11:00am",
			date_selected: null,
			later_time_selected: "12:00pm"
		}
		
		this.button_changer=this.button_changer.bind(this)
		this.time_changer=this.time_changer.bind(this)
		this.date_changer=this.date_changer.bind(this)
		this.later_time_changer=this.later_time_changer.bind(this)

		this.button_view_controller=this.button_view_controller.bind(this)
		this.item_view_controller=this.item_view_controller.bind(this)

	}

	button_changer(button_selected){
		this.setState({button_selected})
	}

	time_changer(time_selected){
		this.setState({time_selected})
	}

	date_changer(date_selected){
		this.setState({date_selected})
	}

	later_time_changer(later_time_selected){
		this.setState({later_time_selected})
	}

	button_view_controller(button_selected){

		let styleASAP = (button_selected === 'asap') ? "order-schedule-buttons-selected" : "order-schedule-buttons-not-selected"
		let styleToday = (button_selected === 'today') ? "order-schedule-buttons-selected" : "order-schedule-buttons-not-selected"
		let styleLater = (button_selected === 'later') ? "order-schedule-buttons-selected" : "order-schedule-buttons-not-selected"

		return(
			<section className="order-schedule-buttons">
				<button id="order-schedule-buttons-asap" className={styleASAP} onClick={()=>this.button_changer('asap')}>ASAP</button>
				<button id="order-schedule-buttons-today" className={styleToday} onClick={()=>this.button_changer('today')}>Today</button>
				<button id="order-schedule-buttons-later" className={styleLater} onClick={()=>this.button_changer('later')}>Later</button>
			</section>
			)
	}

	item_view_controller(button_selected, date_selected){
		if (button_selected === 'asap') {
			return(
				<section className="order-schedule-items-asap">
				{
					(this.props.data) &&
					(
					<div>
						<h5>{this.props.data.name}</h5>
						<h5>eta: {this.props.data.waitingtime} min</h5>
						<p>+20min for orders over $150</p>
					</div>
					)
				}
				</section>
				)
		} else if (button_selected === 'today'){
			return <Time time_changer={this.time_changer} time_selected={this.state.time_selected}/>
		} else if (button_selected === 'later' && date_selected) {
			return <Time time_changer={this.later_time_changer} time_selected={this.state.later_time_selected}/>
		} else if (button_selected === 'later'){
			return <Calendar date_changer={this.date_changer}/>
		}
	}


	render(){
		const { toggleModal , route_changer } = this.props
		return(
		<section className="order-schedule-container">

			<section className="order-schedule-exit">
				<button id="order-schedule-exit" onClick={()=>route_changer("delivery")}><img alt="right" height="20" src="https://grubhub-james.s3-us-west-1.amazonaws.com/left-arrow.png"/></button>
				<h3>Schedule my order</h3>
			</section>

			<section className="order-schedule-text">
				<p>Select a pickup time up to 7 days in advance</p>
			</section>

			<div>
			{
				this.button_view_controller(this.state.button_selected)
			}
			</div>

			{
				(this.state.date_selected) &&
				<p id="later_date_time_text">{this.state.date_selected} {this.state.later_time_selected}</p>
			}

			<section className="order-schedule-items">
			{
				this.item_view_controller(this.state.button_selected, this.state.date_selected)
			}
			</section>

			<section className="order-schedule-pickup-button">
				<button onClick={toggleModal}>Pickup at {(this.state.date_selected)? this.state.later_time_selected : this.state.time_selected}</button>
			</section>

		</section>
			)
	}
}


export default Schedule;
import React from 'react';
import './Calendar.css';

class Calendar extends React.Component{
	constructor(props){
		super(props)
		this.state={
			dayofweek: null,
			today: null,
			mmmyyyy: null,
			nextdays: []
		}
		this.calculateTime=this.calculateTime.bind(this)
		this.calculateNextDays=this.calculateNextDays.bind(this)
		this.getMMM=this.getMMM.bind(this)
		this.filler=this.filler.bind(this)
		this.getDDD=this.getDDD.bind(this)
	}

	componentDidMount(){
		this.calculateTime()
		this.calculateNextDays()
	}

	calculateTime(){
		let now = new Date()

		let dayofweek = now.getDay() //starting from 0 to 6
		let today = now.getDate() //starting from 1 to 31

		let month = now.getMonth() //starting from 0 to 11
		let mmmyyyy =  this.getMMM(month) + ' ' + now.getFullYear() //ex, Jul 2019

		this.setState({dayofweek, today, mmmyyyy})
	}

	calculateNextDays(){
		let times = []
		for (let i = 1; i < 8; i++) {
			times.push(new Date().setDate(new Date().getDate() + i))
		}
		let nextdays = []
		for (let i = 0; i < 7; i++) {
			let newDate = new Date(times[i]).getDate()
			let newMonth = new Date(times[i]).getMonth()
			nextdays.push(newDate, this.getMMM(newMonth) + ' ' + newDate)
		}
		this.setState({nextdays})
	}

	getMMM(month){
		let mmm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		return mmm[month]
	}

	filler(){
		let emptyArray = new Array(this.state.dayofweek).fill(0)
		return emptyArray.map((item, i)=> <span className="order-schedule-items-later-empty" key={i}></span>)
	}

	getDDD(){
		let ddd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		return ddd.map((item, i) => <span key={i}>{item}</span>)
	}

	render(){
		return(
			<section className="order-schedule-items-later">

				<div className="order-schedule-items-later-month">
				{
					this.state.mmmyyyy
				}
				</div>

				<div className="order-schedule-items-later-days">
				{
					this.getDDD()
				}
				</div>

				<div className="order-schedule-items-later-DD">
					{
						this.filler()
					}

						<span id="order-today">
						{
							this.state.today
						}
						</span>

					<span className="calendar-nextdays" id="calendar-nextdays1" onClick={()=>this.props.date_changer(this.state.nextdays[1])}>{this.state.nextdays[0]}</span>
					<span className="calendar-nextdays" id="calendar-nextdays2" onClick={()=>this.props.date_changer(this.state.nextdays[3])}>{this.state.nextdays[2]}</span>
					<span className="calendar-nextdays" id="calendar-nextdays3" onClick={()=>this.props.date_changer(this.state.nextdays[5])}>{this.state.nextdays[4]}</span>
					<span className="calendar-nextdays" id="calendar-nextdays4" onClick={()=>this.props.date_changer(this.state.nextdays[7])}>{this.state.nextdays[6]}</span>
					<span className="calendar-nextdays" id="calendar-nextdays5" onClick={()=>this.props.date_changer(this.state.nextdays[9])}>{this.state.nextdays[8]}</span>
					<span className="calendar-nextdays" id="calendar-nextdays6" onClick={()=>this.props.date_changer(this.state.nextdays[11])}>{this.state.nextdays[10]}</span>
					<span className="calendar-nextdays" id="calendar-nextdays7" onClick={()=>this.props.date_changer(this.state.nextdays[13])}>{this.state.nextdays[12]}</span>
				
				</div>
			</section>
			)

	}
}

export default Calendar;
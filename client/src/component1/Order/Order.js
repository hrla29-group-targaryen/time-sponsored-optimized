import React from 'react'

import Delivery from './Delivery/Delivery'
import Pickup from './Pickup/Pickup'
import Schedule from './Schedule/Schedule'

import './Order.css'

class Order extends React.Component{
	constructor(props){
		super(props)
		this.state={
			route : 'delivery'
		}
		this.route_changer=this.route_changer.bind(this)
		this.view_controller=this.view_controller.bind(this)
	}

	route_changer(route){
		this.setState({route})
	}

	view_controller(route){
		if (route === 'delivery') {
			return <Delivery toggleModal={this.props.toggleModal} route_changer={this.route_changer} data={this.props.data}/>
		} else if (route === 'pickup') {
			return <Pickup toggleModal={this.props.toggleModal} route_changer={this.route_changer} data={this.props.data}/>
		} else if (route === 'schedule') {
			return <Schedule toggleModal={this.props.toggleModal} route_changer={this.route_changer} data={this.props.data}/>
 		}
	}

	render(){
		return(
			<section className="order-modal"> 
				{
					this.view_controller(this.state.route)
				}
			</section>
			)
	}
}

export default Order

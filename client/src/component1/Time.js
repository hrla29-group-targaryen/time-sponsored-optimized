import React from 'react';
import './Time.css';
import Modal from './Modal/Modal';

import axios from 'axios';
import {APIgetRestaurantData} from '../api/api';

class Time extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			isModalOpen : false,
			data: null,
			error : false,
			order : '' //Order component, code split
		}
		this.getRestaurantData = this.getRestaurantData.bind(this)
		this.toggleModal = this.toggleModal.bind(this)
		this.importingComponent=this.importingComponent.bind(this)
	}

	componentDidMount(){
		const id = window.location.href.split("id=")[1]
	  	this.getRestaurantData(axios, id)
	}

	getRestaurantData(axios, id){
	  	APIgetRestaurantData(axios, id)
	  	.then(data => this.setState({data}))
	  	.catch(error=>this.setState({error: true}))
	}

	toggleModal(isModalOpen_Input){
		if (!isModalOpen_Input) {
			this.importingComponent(isModalOpen_Input)
		} else {
			this.setState({isModalOpen: !isModalOpen_Input})
		}
	}

	importingComponent(isModalOpen_Input){
		import('./Order/Order.js').then(OrderComp => {
			this.setState({isModalOpen: !isModalOpen_Input , order: OrderComp.default})
		})
	}

	render(){
		const {isModalOpen, data} = this.state
		return(
			<section>
				<section className="order-container">
					<section className="order-status">
						<p>Delivery, ASAP {(data) && <span>{`(${data.waitingtime}m)`}</span>}</p>
						<p className="order-no-minimum">No minimum</p>
					</section>
					<button className="order-change" id="order-change" onClick={()=>this.toggleModal(isModalOpen)}>Change</button> <br />
				</section>
				<section>
					{
						(isModalOpen && data) &&
						<Modal>
							<this.state.order data={data} isModalOpen={isModalOpen} toggleModal={()=>this.toggleModal(isModalOpen)}/>
						</Modal>
					}
				</section>
			</section>
			)
	}
}


export default Time;
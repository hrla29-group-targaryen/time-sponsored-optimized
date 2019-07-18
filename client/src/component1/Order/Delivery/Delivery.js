import React from 'react'
import './Delivery.css'

const Delivery = ({toggleModal, route_changer, data}) => {
	return(
		<section className="order-delivery-container">

			<section className="order-delivery-exit">
				<button onClick={toggleModal}>X</button>
				<h3>Your order settings</h3>
			</section>

			<section className="order-delivery-pickup-buttons">
				<button className="order-delivery-pickup-buttons-delivery">Delivery</button>
				<button id="order-delivery-pickup-buttons-pickup" className="order-delivery-pickup-buttons-pickup" onClick={()=>route_changer("pickup")}>Pickup</button>
			</section>

			<section className="order-delivery-whenwouldyou">
				<h5>When would you like your order?</h5>
				<button id="order-delivery-whenwouldyou" onClick={()=>route_changer("schedule")}>ASAP {(data) && <span>{`(${data.waitingtime}m)`}</span>}</button>
			</section>

			<section className="order-delivery-address">
				<h5>Delivery address</h5>
				<div className="order-delivery-input-container">
					<img alt="right" height="30" style={{padding: '6px 0'}} src="https://grubhub-james.s3-us-west-1.amazonaws.com/maps.png"/>
					<input className="order-delivery-input-field" placeholder="Street address, city, state"/>
				</div>
			</section>

			<section className="order-delivery-update">
				<button onClick={toggleModal}>Update</button>
			</section>

		</section>
		)
}

export default Delivery;
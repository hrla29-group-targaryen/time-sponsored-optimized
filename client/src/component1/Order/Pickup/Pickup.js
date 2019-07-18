import React from 'react'
import './Pickup.css'

const Pickup = ({toggleModal,route_changer,data}) => {
	return(
		<section className="order-delivery-container">

			<section className="order-delivery-exit">
				<button onClick={toggleModal}>X</button>
				<h3>Your order settings</h3>
			</section>

			<section className="order-pickup-delivery-buttons">
				<button id="order-pickup-delivery-buttons-delivery" onClick={()=>route_changer("delivery")}>Delivery</button>
				<button>Pickup</button>
			</section>

			<section className="order-delivery-whenwouldyou">
				<h5>When would you like your order?</h5>
				<button id="order-delivery-whenwouldyou" onClick={()=>route_changer("schedule")}>ASAP {(data) && <span>{`(${data.waitingtime}m)`}</span>}</button>
			</section>

			<section className="order-delivery-update">
				<button onClick={toggleModal}>Update</button>
			</section>

		</section>
		)
}

export default Pickup;
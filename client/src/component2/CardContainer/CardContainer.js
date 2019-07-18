import React from 'react';
import Card from './Card/Card.js';
import './CardContainer.css';
import axios from 'axios';
import { APIgetSponsoredData } from '../../api/api';

class CardContainer extends React.Component{
	constructor(props){
		super(props)
		this.state={
			group1: [],
			group2: [],
			group3: [],
			group4: [],
			current: 'group1',
			error: false
		}
		this.getSponsoredData=this.getSponsoredData.bind(this)
		this.splitData=this.splitData.bind(this)
		this.changeDataSet=this.changeDataSet.bind(this)
	}

	componentDidMount(){
		const id = window.location.href.split("id=")[1]
		this.getSponsoredData(axios, id)
	}

	getSponsoredData(axios, id){
	  	APIgetSponsoredData(axios, id)
		.then(data => this.splitData(data))
		.catch(e=> this.setState({error:true}))
	}

	splitData(data){
		if (data !== null) {
			let group1 = data.slice(0,3)
			let group2 = data.slice(3,6)
			let group3 = data.slice(6,9)
			let group4 = data.slice(9,12)
			this.setState({group1, group2, group3, group4})
		}
	}

	changeDataSet(input, current){
		let counter = Number(current[5])
		if (input === 'prev') {
			if(current !== 'group1') {
				counter -= 1
				let newCurr = `group${counter}`
				this.setState({current:newCurr})
			}
		} else if (input === 'next') {
			if(current !== 'group4') {
				counter += 1
				let newCurr = `group${counter}`
				this.setState({current:newCurr})
			}
		}
	}

	render(){
		let slicedData = (this.state.current === 'group1') 
		? this.state.group1 
		: (this.state.current === 'group2')
		? this.state.group2
		: (this.state.current === 'group3')
		? this.state.group3
		: this.state.group4

		let leftButtonStyle = (this.state.current === 'group1') ? "sponsor-card-left sponsor-btn-invisible" : "sponsor-card-left"
		let rightButtonStyle = (this.state.current === 'group4') ? "sponsor-card-right sponsor-btn-invisible" : "sponsor-card-right"

		return(
			<section className="sponsor-card-container">

				<div className={leftButtonStyle}>
					<button id="sponsor-card-container-button-prev" onClick={()=>this.changeDataSet("prev", this.state.current)}><img alt="right" height="20" src="https://grubhub-james.s3-us-west-1.amazonaws.com/left-arrow.png"/></button>
				</div>

				<div className="sponsor-card-container-sub">
					{
						(slicedData) &&
						slicedData.map((item,i)=> <Card key={i} item={item} />)
					}
				</div>

				<div className={rightButtonStyle}>
					<button id="sponsor-card-container-button-next" onClick={()=>this.changeDataSet("next", this.state.current)}><img alt="right" height="20" src="https://grubhub-james.s3-us-west-1.amazonaws.com/right-arrow.png"/></button>
				</div>

			</section>
			)
	}
}

export default CardContainer;
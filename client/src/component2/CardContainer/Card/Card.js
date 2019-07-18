import React from 'react';
import './Card.css';

class Card extends React.Component{
	constructor(props){
		super(props)
		this.state={}
		this.starGenerator=this.starGenerator.bind(this)
	}

	starGenerator(rate){
		let emptyArr = new Array(5).fill(0)
		let adjRate = rate - 1
		return emptyArr.map((value,index)=> {
			return (index <= adjRate) ? <img key={index} src="https://grubhub-james.s3-us-west-1.amazonaws.com/ystar.png"alt="star"/> : <img key={index} src="https://grubhub-james.s3-us-west-1.amazonaws.com/gstar.png"alt="star"/>
		})
	}

	render(){
		const {item} = this.props
		return(
			<section className="sponser-card">
			{
				(item) &&
				(
					<div>
					<img alt="food" src={item.image} width="280px" height="140px"/>
					<div className="sponser-card-content">
						<p id="sponser-card-content-name">{item.name}</p>
						<p id="sponser-card-content-category">{item.categories[0]}, {item.categories[1]}</p>
						<div id="sponser-card-subcontent">
							<div>
								<p id="sponser-card-content-waiting">{item.waitingtime} mins</p>
								<p id="sponser-card-content-extra">"$0 min"</p>
							</div>
							<div style={{textAlign : "right"}}>
								{
									this.starGenerator(item.ratings)
								}								
								<p id="sponser-card-content-extra">{item.counts} ratings</p>
							</div>
						</div>

					</div>
					</div>
				)
			}
			</section>
			)
	}
}

export default Card;
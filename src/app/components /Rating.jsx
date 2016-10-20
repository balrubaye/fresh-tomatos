import React,{Component} from 'react'


export default class Rating extends Component{
	constructor(props){
		super(props);


	}


	render(){
		const arr=[1,2,3,4,5];

		return(<div className="stars">
				  <form action="">

				    {arr.map( (item, indx) => {
				    	
				    	if( item === Math.floor(this.props.value) ){

				    	 return <RatingItem value={item} checked={true}/>
				    	}

				    	return <RatingItem value={item} />

				    }) }
				  </form>
				</div>);
	}
}


class RatingItem extends Component{
		constructor(props){
			super(props)
		}

	render(){
				
		return(		<div> <input className={"star star-" + this.props.value} 
							id={"star-" + this.props.value}
		 					checked={this.props.checked}
							type="radio" name="star"/>

				    <label className={"star star-" + this.props.value} for={"star-" + this.props.value}></label> </div>
				    )
	}
}
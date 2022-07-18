import React , { Component } from 'react';
import '../css/card.css'

export class Card extends Component {
    render(){
        let {name , link} = this.props;
        console.log({name});
        console.log({link});
  return (
    <div className="card-box">
        <div className="heading">Details</div>
        <div className="name">Name : {name}</div>
        <div className = "link-heading">Link to connect- </div>
        <hr/>
        <div className="link">{link}</div>
    </div>
  )
    }
}

export default Card;

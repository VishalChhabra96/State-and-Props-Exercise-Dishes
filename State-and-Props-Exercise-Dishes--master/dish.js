import React, { Component } from 'react';
import './dishcss.css'
class Dish extends Component {
    displayInfo=()=>{
        console.log(this.props.DishObject.name);
        console.log(this.props.DishObject.Energy);
        console.log(this.props.DishObject.price);
    }

    render() {
    return (
    <div onClick={this.displayInfo} className="dishContainer">
    {this.props.DishObject.name}
    </div>
    );
    }

}
export default Dish;

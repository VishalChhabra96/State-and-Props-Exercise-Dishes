import React, { Component } from 'react';
import './dishcss.css';
import Dish from "./dish";
class App extends Component {

    state={
        existingDishes:{
            A:{name:'Dish 1',Energy:'E1 '+10,price:'P1 '+10},
            B:{name:'Dish 2',Energy:'E2 '+ 20,price:'P2 '+ 20},
            C:{name:'Dish 3',Energy:'E3 '+30,price:'P3 '+30}
        },
        newDishCounter:0
    };

createDish = () => {
    this.state.newDishCounter+=1;
    let newDishObjectName='newDish'+this.state.newDishCounter;
    this.state.existingDishes[newDishObjectName]={name:'New Dish',Energy:'E '+45,price:'P '+40};
    this.setState({})
};

render() {
return(
        <div>
            <h1>Menu</h1>
            <div className='container'>
                <h1>Dishes</h1>
                <div className="App">
                {
                    this.state.existingDishes && Object.keys(this.state.existingDishes).map(function(detail, id){
                    return <Dish key={id} DishObject={this.state.existingDishes[detail]}/>;}.bind(this))
                }
                </div>
            <button onClick={()=>{this.createDish('newDish')}}>Add Dish</button>
            </div>
        </div>
    );
}
}
export default App;
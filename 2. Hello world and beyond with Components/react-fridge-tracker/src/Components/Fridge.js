import React, { Component } from 'react';
import FoodCard from './FoodCard';
import AddFood from './AddFood';

class Fridge extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                foodModels: [],
                foodModelToAdd: {
                    name: '',
                    amount: 0
                }
            };
    }

    onFoodNameChange = (event) => {
        const newName = event.target.value;
        const modelToUpdate = this.state.foodModelToAdd;

        if (newName) {
            modelToUpdate.name = newName;
        } else {
            modelToUpdate.name = '';
        }

        this.setState({ foodModelToAdd: modelToUpdate });
    }

    onFoodAmountChange = (event) => {
        const newAmount = event.target.value;
        const modelToUpdate = this.state.foodModelToAdd;

        if (newAmount) {
            modelToUpdate.amount = newAmount;
        } else {
            modelToUpdate.amount = 0;
        }

        this.setState({ foodModelToAdd: modelToUpdate });
    }

    onClickAdd = () => {
        if (this.state.foodModelToAdd.name.trim()) {
            this.setState({
                foodModels: [...this.state.foodModels, this.state.foodModelToAdd]
            });
        }
        this.setState({
            foodModelToAdd: {
                name: '',
                amount: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>React Fridge Tracker</h1>

                <AddFood
                    foodModelToAdd={this.state.foodModelToAdd}
                    onFoodNameChange={this.onFoodNameChange}
                    onFoodAmountChange={this.onFoodAmountChange}
                    onClickAdd={this.onClickAdd}
                />
                {this.state.foodModels.length ? (
                    <div>
                        <h2>Food in the Fridge</h2>
                        <table>
                            <tbody>
                                {this.state.foodModels.map((foodModel, i) =>
                                    <FoodCard
                                        key={i}
                                        name={foodModel.name}
                                        amount={foodModel.amount}
                                    />)}
                            </tbody>
                        </table>
                    </div>
                )
                    : "No food in the fridge!"}
            </div>);
    }
}

export default Fridge;
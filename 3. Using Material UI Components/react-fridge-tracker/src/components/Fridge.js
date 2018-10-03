import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import FoodCard from './FoodCard';
import AddFood from './AddFood';
import Row from './Row';

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
                <Row>
                    <AddFood
                        foodModelToAdd={this.state.foodModelToAdd}
                        onFoodNameChange={this.onFoodNameChange}
                        onFoodAmountChange={this.onFoodAmountChange}
                        onClickAdd={this.onClickAdd}
                    />
                </Row>
                <Row>
                    {this.state.foodModels.length ?
                        <div>
                            <Typography variant="title">
                                Food in the Fridge
                            </Typography>
                            <Grid container spacing={24} style={{ padding: 24 }}>
                                {this.state.foodModels.map(foodModel => (
                                    <Grid key={foodModel} item xs={12} sm={6} lg={4} xl={3}>
                                        <FoodCard foodModel={foodModel} />
                                    </Grid>
                                ))}
                            </Grid>
                        </div> :
                        <Typography variant="subheading">
                            No food in the fridge!
                        </Typography>
                    }
                </Row>
            </div>
        )
    }
}
export default Fridge;
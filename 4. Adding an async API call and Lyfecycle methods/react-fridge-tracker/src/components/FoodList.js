import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import FoodCard from '../components/FoodCard';
import RecipeCard from '../components/RecipeCard';
import Row from '../components/Row';
import LinearProgress from '@material-ui/core/LinearProgress';

import RecipeApi from '../recipeApi';

class FoodList extends Component {
    state = {
        foodModels: [],
        foodModelToAdd: {
            name: '',
            amount: 0
        },
        recipeModels: [],
        recipesLoading: false
    }

    componentDidMount() {
        this.setState({
            recipesLoading: true
        });

        RecipeApi.getRandom().then((result) => {
            this.setState({
                recipeModels: result.data,
                recipesLoading: false
            });
        });
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

    onClickLoadRecipesForFoodName = (foodName) => {
        this.setState({
            recipesLoading: true
        });

        RecipeApi.get(foodName).then((result) => {
            this.setState({
                recipeModels: result.data,
                recipesLoading: false
            });
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <div className="section">
                        <div className="col s3">
                            <TextField
                                id="foodName"
                                name="name"
                                placeholder="Name of the food"
                                value={this.state.foodModelToAdd.name}
                                onChange={this.onFoodNameChange}
                            />
                        </div>
                        <div className="col s3">
                            <TextField
                                id="foodAmount"
                                name="amount"
                                placeholder="Amount of food"
                                value={this.state.foodModelToAdd.amount}
                                onChange={this.onFoodAmountChange}
                                type="number"
                            />
                        </div>
                        <div className="col s6">
                            <Button
                                variant="contained"
                                size="small"
                                color="primary"
                                id="addFoodButton"
                                onClick={this.onClickAdd}
                                disabled={!this.state.foodModelToAdd.name || this.state.foodModelToAdd.amount < 1}>
                                Add food
                                    </Button>
                        </div>
                    </div>
                </Row>
                <Divider />
                <div className="section">
                    {this.state.foodModels.length ?
                        <Row>
                            <Typography variant="headline" component="h2">
                                In the Fridge
                                    </Typography>
                            <Grid container spacing={24} style={{ padding: 24 }}>
                                {this.state.foodModels.map((foodModel, i) => (
                                    <Grid key={"food_" + i} item xs={12} sm={6} lg={4} xl={3}>
                                        <FoodCard
                                            foodModel={foodModel}
                                            onClickLoadRecipesForFoodName={() => this.onClickLoadRecipesForFoodName(foodModel.name)}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Row> :
                        <Typography variant="headline" component="h2">
                            No food in the fridge!
                            </Typography>
                    }
                </div>
                <Divider />
                <div className="section">
                    {this.state.recipesLoading ?
                        <LinearProgress /> :
                        <Row>
                            <Typography variant="headline" component="h2">
                                Recipes:
                                </Typography>
                            <Grid container spacing={24} style={{ padding: 24 }}>
                                {this.state.recipeModels.map((recipeModel, i) => (
                                    <Grid key={"recipe" + i} item xs={12} sm={6} lg={4} xl={3}>
                                        <RecipeCard recipeModel={recipeModel} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Row>
                    }
                </div>
            </div>
        )
    }
}
export default FoodList;
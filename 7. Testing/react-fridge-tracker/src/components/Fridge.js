import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import FoodCard from './FoodCard';
import AddFood from './AddFood';
import RecipeCard from './RecipeCard';
import Row from './Row';
import LinearProgress from '@material-ui/core/LinearProgress';

import RecipeApi from '../recipeApi';

class Fridge extends Component {
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

    onClickLoadRecipesForFood = (name) => {
        this.setState({
            recipesLoading: true
        });

        RecipeApi.get(name).then((result) => {
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
                    <AddFood
                        foodModelToAdd={this.state.foodModelToAdd}
                        onFoodNameChange={this.onFoodNameChange}
                        onFoodAmountChange={this.onFoodAmountChange}
                        onClickAdd={this.onClickAdd}
                    />
                </Row>
                <Divider />
                <Row>
                    <div className="section">
                        {this.state.foodModels.length ?
                            <div>
                                <Typography variant="title">
                                    In the Fridge
                                </Typography>
                                <Grid container spacing={24} style={{ padding: 24 }}>
                                    {this.state.foodModels.map((foodModel, i) => (
                                        <Grid key={"food_" + i} item xs={12} sm={6} lg={4} xl={3}>
                                            <FoodCard
                                                foodModel={foodModel}
                                                onClickLoadRecipesForFood={() => this.onClickLoadRecipesForFood(foodModel.name)}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </div> :
                            <Typography variant="title">
                                No food in the fridge!
                            </Typography>
                        }
                    </div>
                </Row>
                <Divider />
                <Row>
                    <div className="section">
                        {this.state.recipesLoading ?
                            <LinearProgress /> :
                            <Row>
                                <Typography variant="title">
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
                </Row>
            </div>
        )
    }
}

export default Fridge;
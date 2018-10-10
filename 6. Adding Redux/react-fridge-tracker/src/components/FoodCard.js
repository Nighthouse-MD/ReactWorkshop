import React from 'react'
import PropTypes from "prop-types";

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const FoodCard = (props) => {
    return (
        <div>
            {props.foodModel ? (
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.foodModel.name}
                        </Typography>
                        <Typography component="p">
                            {props.foodModel.amount} left
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={props.onClickLoadRecipesForFood} name={props.foodModel.name} size="small" color="primary">
                            Recipes with {props.foodModel.name}
                        </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}

FoodCard.propTypes = {
    foodModel: PropTypes.object,
    onClickLoadRecipesForFood: PropTypes.func
};

//add prop checking
export default FoodCard
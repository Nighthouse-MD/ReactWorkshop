import React from 'react'
import PropTypes from "prop-types";

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const RecipeCard = (props) => {
    const model = props.recipeModel;
    return (
        <div>
            {model ? (
                <Card>
                    <CardMedia overlay={<CardHeader title={model.name} image={model.imageUrl} />}>
                        <img src={model.imageUrl} style={{ width: 'auto', height: '200px' }} />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {model.name}
                        </Typography>
                        <Typography component="p">
                            {model.text}
                        </Typography>
                    </CardContent>
                </Card>
            ) : null}
        </div>
    )
}

RecipeCard.propTypes = {
    recipeModel: PropTypes.node
};

//add prop checking
export default RecipeCard
import React from 'react';
import PropTypes from "prop-types";

const FoodCard = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.amount} left</td>
        </tr>);
}

FoodCard.propTypes = {
    name: PropTypes.string,
    amount: PropTypes.string
}

export default FoodCard;
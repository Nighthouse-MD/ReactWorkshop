import React from 'react';
import PropTypes from "prop-types";

const AddFood = (props) => {
    const {
        foodModelToAdd,
        onFoodNameChange,
        onFoodAmountChange,
        onClickAdd
    } = props;

    return (
        <div>
            <h2>Add food</h2>
            <input
                type='text'
                name='name'
                value={foodModelToAdd.name}
                onChange={onFoodNameChange}
            />
            <br />
            <input
                type='text'
                name='amount'
                value={foodModelToAdd.amount}
                onChange={onFoodAmountChange}
            />
            <br />
            <button onClick={onClickAdd}>Add Food</button>

            <br />
            <hr />
        </div>);
}

AddFood.defaultProps = {
    foodModelToAdd: { name: '', amount: 0 }
}

AddFood.propTypes = {
    foodModelToAdd: PropTypes.object.isRequired,
    onFoodNameChange: PropTypes.func.isRequired,
    onFoodAmountChange: PropTypes.func.isRequired,
    onClickAdd: PropTypes.func.isRequired
}

export default AddFood;
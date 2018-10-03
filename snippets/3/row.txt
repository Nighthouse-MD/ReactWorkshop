import React from "react";
import PropTypes from "prop-types";

const Row = (props) => {
    return (<div className="row">
        {props.children}
    </div>);
};

Row.propTypes = {
    children: PropTypes.node
};

export default Row;
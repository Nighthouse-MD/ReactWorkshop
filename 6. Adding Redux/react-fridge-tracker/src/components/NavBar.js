import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = (props) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        React Fridge Tracker --- Welcome {props.username}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

NavBar.prototypes = {
    username: PropTypes.string
}

function mapStateToProps(state) {
    return {
        username: state.userInfo.name
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
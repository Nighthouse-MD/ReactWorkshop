import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { storeUserName } from "../actions/userInfoActions";

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            navigate: false
        };
    }

    onClick = () => {
        this.props.storeUserName(this.state.name);
        this.setState({ navigate: true });
    }

    render() {
        return (
            this.state.navigate ? <Redirect to="/fridge" /> :
                <Fragment>
                    <Typography variant="title">
                        Welcome!
                    </Typography>
                    <div className="col s3">
                        <TextField
                            id="foodName"
                            name="name"
                            placeholder="Enter your name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="col s3">
                        <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            id="confirmName"
                            onClick={this.onClick}
                            disabled={!this.state.name}>
                            Enter
                        </Button>
                    </div>
                </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        storeUserName: bindActionCreators(storeUserName, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
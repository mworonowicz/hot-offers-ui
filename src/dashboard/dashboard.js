// @flow
import React from 'react';
import {connect} from 'react-redux';


const Dashboard = ({isLoggedIn}) => {
    return (<p>Dashboard isLoggedIn {isLoggedIn.toString()}</p>);
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.loginState.isLoggedIn
    }
};

export default connect(mapStateToProps)(Dashboard)
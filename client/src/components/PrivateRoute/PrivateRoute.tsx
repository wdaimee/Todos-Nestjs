import React, { Component } from 'react';
import { getUserFromToken } from '../../localStorage';
import { Redirect, Route } from 'react-router-dom';

// Private route, only accessible by a logged in user
const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
    const isLoggedIn = getUserFromToken();

    return (
        <Route
            {...rest}
            render={props => 
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
                )
            }
        />
    )
}

export default PrivateRoute;


import React from 'react';
import { getUserFromToken } from '../../localStorage';
import { Redirect, Route } from 'react-router-dom';
import { LogoDiv } from '../../pages/Dashboard/Dashboard.styles';
import Logo from '../../components/Logo/Logo';
import Navbar from '../../components/Navbar/Navbar';
import Page from '../../components/Page/Page';

// Private route, only accessible by a logged in user
const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
    const isLoggedIn = getUserFromToken();

    return (
        <Route
            {...rest}
            render={props => 
                isLoggedIn ? (
                    <Page>
                        <LogoDiv>
                            <Logo />
                        </LogoDiv>
                        <Component {...props} {...rest} />
                        <Navbar  history={props.history} {...rest} />
                    </Page>
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
                )
            }
        />
    )
}

export default PrivateRoute;


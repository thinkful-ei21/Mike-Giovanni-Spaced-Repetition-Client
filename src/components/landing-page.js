import React from 'react';
import './landing-page.css'
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
        <p>A spaced-repetition app for associating famous monuments with the countries they are in and for inspiring future travel. Try to match the correct country name to each image that gets displayed; countries you identify accurately show up less often</p>
            <h2>Login</h2>
            <LoginForm />
            or
            <Link to="/register" className="register-link"><h2>Register</h2></Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
